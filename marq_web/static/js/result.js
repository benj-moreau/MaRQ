var result = new Vue({
    el: '#result',
    data: {
        marq_result: res,
        marq_queries: queries,
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
                    ss.data.push(comparison.Join_subject_subject.Number_of_triple_pattern_from_M2);
                    so.data.push(comparison.Join_subject_object.Number_of_triple_pattern_from_M2);
                    oo.data.push(comparison.Join_object_object.Number_of_triple_pattern_from_M2);
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
    }
});
/*
// TOO SLOW !
function editor(textarea)
{
    CodeMirror.fromTextArea(textarea, {
        lineNumbers: true
    });
}
let textareas = document.getElementsByTagName("textarea");
textareas = Array.prototype.slice.call(textareas);
for(i = 0;i < textareas.length; i++)
{
    //editor(textareas[i]);
}
*/

let canvas = document.getElementById('chart');
let myChart = new Chart(canvas, {});
