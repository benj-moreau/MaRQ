from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json


@require_http_methods(['GET'])
def home(request):
    return render(request, 'home.html')


@require_http_methods(['GET'])
def form(request):
    return render(request, 'form.html')


@csrf_exempt
@require_http_methods(['POST'])
def result(request):
    mock_result = {"comparaisons":
        [
            {"Source":"mappingReview.yml",
             "Destination":"mappingListing.yml",
             "Score":"18874391",
             "Join_subject_subject":{
                 "Number_of_triple_pattern": [24,21],
                 "Number_of_triple_pattern_from_M1": 27,
                 "Number_of_triple_pattern_from_M2": 43},
             "Join_object_object":{
                 "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                 "Number_of_triple_pattern_from_M1": 25,
                 "Number_of_triple_pattern_from_M2": 25},
             "Join_subject_object":{
                 "Number_of_triple_pattern": [],
                 "Number_of_triple_pattern_from_M1": 0,
                 "Number_of_triple_pattern_from_M2": 0}
             },
    {"Source":"mappingReview.yml",
     "Destination":"mappingAverage.yml",
     "Score":"4",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1],
         "Number_of_triple_pattern_from_M1": 4,
         "Number_of_triple_pattern_from_M2": 4},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingReview.yml",
     "Destination":"mappingRatings.yml",
     "Score":"25",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         "Number_of_triple_pattern_from_M1": 25,
         "Number_of_triple_pattern_from_M2": 25},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingListing.yml",
     "Destination":"mappingReview.yml",
     "Score":"18874391",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [24,21],
         "Number_of_triple_pattern_from_M1": 43,
         "Number_of_triple_pattern_from_M2": 27},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         "Number_of_triple_pattern_from_M1": 25,
         "Number_of_triple_pattern_from_M2": 25},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingListing.yml",
     "Destination":"mappingAverage.yml",
     "Score":"270382",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [17,13,17],
         "Number_of_triple_pattern_from_M1": 44,
         "Number_of_triple_pattern_from_M2": 47},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,4],
         "Number_of_triple_pattern_from_M1": 27,
         "Number_of_triple_pattern_from_M2": 27},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingListing.yml",
     "Destination":"mappingRatings.yml",
     "Score":"589929",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [19,15,15],
         "Number_of_triple_pattern_from_M1": 44,
         "Number_of_triple_pattern_from_M2": 43},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
         "Number_of_triple_pattern_from_M1": 55,
         "Number_of_triple_pattern_from_M2": 56},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingAverage.yml",
     "Destination":"mappingReview.yml",
     "Score":"4",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1],
         "Number_of_triple_pattern_from_M1": 4,
         "Number_of_triple_pattern_from_M2": 4},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingAverage.yml",
     "Destination":"mappingListing.yml",
     "Score":"270382",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [17,13,17],
         "Number_of_triple_pattern_from_M1": 47,
         "Number_of_triple_pattern_from_M2": 44},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,4],
         "Number_of_triple_pattern_from_M1": 27,
         "Number_of_triple_pattern_from_M2": 27},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingAverage.yml",
     "Destination":"mappingRatings.yml",
     "Score":"819245",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [19,15,18],
         "Number_of_triple_pattern_from_M1": 47,
         "Number_of_triple_pattern_from_M2": 43},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,4],
         "Number_of_triple_pattern_from_M1": 26,
         "Number_of_triple_pattern_from_M2": 26},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingRatings.yml",
     "Destination":"mappingReview.yml",
     "Score":"25",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         "Number_of_triple_pattern_from_M1": 25,
         "Number_of_triple_pattern_from_M2": 25},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingRatings.yml",
     "Destination":"mappingListing.yml",
     "Score":"589929",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [19,15,15],
         "Number_of_triple_pattern_from_M1": 43,
         "Number_of_triple_pattern_from_M2": 44},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4],
         "Number_of_triple_pattern_from_M1": 56,
         "Number_of_triple_pattern_from_M2": 55},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     },
    {"Source":"mappingRatings.yml",
     "Destination":"mappingAverage.yml",
     "Score":"819245",
     "Join_subject_subject":{
         "Number_of_triple_pattern": [19,15,18],
         "Number_of_triple_pattern_from_M1": 43,
         "Number_of_triple_pattern_from_M2": 47},
     "Join_object_object":{
         "Number_of_triple_pattern": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4],
         "Number_of_triple_pattern_from_M1": 26,
         "Number_of_triple_pattern_from_M2": 26},
     "Join_subject_object":{
         "Number_of_triple_pattern": [],
         "Number_of_triple_pattern_from_M1": 0,
         "Number_of_triple_pattern_from_M2": 0}
     }
    ]
    }
    result = mock_result
    return render(request, 'result.html', {'result': json.dumps(result)})
