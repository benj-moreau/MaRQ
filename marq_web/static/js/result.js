var result = new Vue({
    el: '#result',
    data: {
        marq_result: res,
        marq_queries: queries,
        ind_query: 0,
        selected_source_file: null,
        selected_source: [],
        sourcesSelected: [],
        selected_comparison: null
    },
    computed: {
        //marq_results but in decreasing order
        ordered_results: function(){
            tempo = this.marq_result["comparaisons"];
            result = [];
            while (tempo.length > 0) {
                max = 0;
                for (i = 1; i < tempo.length; i++) {
                    if (parseInt(tempo[i]["Score"]) > parseInt(tempo[max]["Score"])){
                        max = i
                    }
                }
                result.push(tempo[max]);
                tempo.splice(max, 1)
            }
            return result
        },

        //list of the mapping used
        mapping_list: function(){
            tempo = this.marq_result;
            result = [tempo[0]["Source"]];

            it = 0;
            while (tempo[it]["Source"] === tempo[0]["Source"] && it < tempo.length){
                result.push(tempo[it]["Destination"]);
                it = it + 1
            }

            return result
        },
    },
    methods: {
        clickSource: function (mapping){
            ind = this.sourcesSelected.indexOf(mapping);
            if(ind === -1){
                this.sourcesSelected.push(mapping)
            } else {
                this.sourcesSelected.splice(ind,1)
            }
        },
        downloadQueries: function (){
            let wnd = window.open('about:blank', '', '_blank');
            let pair_already_seen = new Set();
            let already_done = false;
            queries.forEach( query => {
                already_done = false;

                lines = splitLines(query);
                let mapping_pair = (lines[1].slice(5), lines[2].slice(5))
                let reverse_pair = (lines[2].slice(5), lines[1].slice(5))
                pair_already_seen.add(mapping_pair);

                //if the reverse pair was already done, then the subject-subject queries and object-object queries are already done
                if ((pair_already_seen.has(reverse_pair)) && ( lines[0] == "#subject-subject" || lines[0] == "#object-object" )) {
                    already_done = true;
                }
                if (!already_done) {
                    wnd.document.write('<pre>' + escapeHtml(query) + '</pre>' + '</br>');
                }
            });
        }
    },
    watch: {
        selected_source_file: function (val) {
            let labels = [];
            let ss = {
                label: 'Subject - Subject',
                data: [],
                backgroundColor: 'rgba(0, 134, 214, 0.6)',
                hoverBackgroundColor: 'rgba(0, 134, 214, 0.7)',
                borderColor: 'rgba(0, 134, 214, 1)'
            };
            let oo = {
                label: 'Object - Object',
                data: [],
                backgroundColor: 'rgba(239, 183, 26, 0.6)',
                hoverBackgroundColor: 'rgba(239, 183, 26, 0.7)',
                borderColor: 'rgba(239, 183, 26, 1)'
            };
            let so = {
                label: 'Subject - Object',
                data: [],
                backgroundColor: 'rgba(184, 0, 49, 0.6)',
                hoverBackgroundColor: 'rgba(184, 0, 49, 0.7)',
                borderColor: 'rgba(184, 0, 49, 1)'
            };
            // update_selected_source
            this.selected_source = [];
            for (const comparison of this.marq_result){
                if (comparison.Source === val) {
                    this.selected_source.push(comparison);
                    //add to chart dataset vars
                    labels.push(comparison.Destination);
                    tempo = 0;
                    comparison.Join_subject_subject.Number_of_triple_pattern.forEach( number_of_pattern_for_one_join =>
                        tempo += number_of_pattern_for_one_join
                    );
                    ss.data.push(tempo);

                    tempo = 0;
                    comparison.Join_object_object.Number_of_triple_pattern.forEach( number_of_pattern_for_one_join =>
                        tempo += number_of_pattern_for_one_join
                    );
                    oo.data.push(tempo);

                    tempo = 0;
                    comparison.Join_subject_object.Number_of_triple_pattern.forEach( number_of_pattern_for_one_join =>
                        tempo += number_of_pattern_for_one_join
                    );
                    so.data.push(tempo);
                }
            }
            // update chart
            myChart.destroy();
            myChart = new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [ss, so, oo]
                },
                options: {
                    legend: {
                        position: 'right'
                    },
                    scales: {
                        xAxes: [{ stacked: true }],
                        yAxes: [{ stacked: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Number of joins'
                                }
                        }]
                    }
                }
            });
        },
        ind_query: function () {
            editor.setValue(this.marq_queries[this.ind_query]);
        }
    }
});

let entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}

const splitLines = str => str.split(/\r?\n/);

let textarea = document.getElementById("textarea");
let editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
});

let canvas = document.getElementById('chart');
let myChart = new Chart(canvas, {});
