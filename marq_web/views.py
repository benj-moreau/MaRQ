from os import listdir
from os.path import isfile, join
import json

from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

from yaml import load, Loader, YAMLError

import marq_web.utils.marq as MaRQ

MAPPINGS_PATH = 'marq_web/mappings/'


@require_http_methods(['GET'])
def home(request):
    return render(request, 'home.html')


@require_http_methods(['GET'])
def form(request):
    mapping_files = [f for f in listdir(MAPPINGS_PATH) if isfile(join(MAPPINGS_PATH, f)) and f.endswith('rml.yml')]
    return render(request, 'form.html', {'mapping_files': json.dumps(mapping_files)})


@csrf_exempt
@require_http_methods(['POST'])
def result(request):
    mapping_files = request.POST.getlist('mappingFiles')
    yarrrml_mappings = []
    for mapping_file in mapping_files:
        path = f'{MAPPINGS_PATH}{mapping_file}'
        yarrrml_mappings.append(load(open(path), Loader=Loader))
    custom_mapping = request.POST.get('customMapping')
    if custom_mapping:
        try:
            mapping = load(custom_mapping, Loader=Loader)
            yarrrml_mappings.append(mapping)
        except YAMLError:
            pass
    result = MaRQ.get_results(yarrrml_mappings)
    return render(request, 'result.html',
                  {'result': json.dumps(result['data']),
                   'queries': json.dumps(result['queries'])})
