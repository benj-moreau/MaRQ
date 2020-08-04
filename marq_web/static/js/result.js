var result = new Vue({
    el: '#result',
    data: {
        marq_result: res,
        marq_queries: queries,
        selected_source_file: null,
        selected_source: {},
        dest_files: [],
        selected_dest_file: null,
        selected_dest: {},
        sourcesSelected: [],
        destinationsSelected: [],
        selected_comparison: null
    },
    computed: {
        //marq_results but in decreasing order
        ordered_results: function(){
            console.log(this.marq_result);
            console.log(this.marq_queries);
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

            it = 0
            while (tempo[it]["Source"] === tempo[0]["Source"] && it < tempo.length){
                result.push(tempo[it]["Destination"]);
                it = it + 1
            }

            return result
        },

        comparaisons: function(){
            tempo = this.marq_result;
            result = [];
            for (i = 0; i < tempo.length; i++) {
                if( this.sourcesSelected.length && this.destinationsSelected.length ){
                    //if both variable aren't empty
                    if( this.sourcesSelected.indexOf(tempo[i]["Source"]) !== -1 && this.destinationsSelected.indexOf(tempo[i]["Destination"]) !== -1 ){
                        result.push(tempo[i])
                    }
                } else if( this.sourcesSelected.length){
                    //if only destinations is empty
                    if( this.sourcesSelected.indexOf(tempo[i]["Source"]) !== -1 ){
                        result.push(tempo[i])
                    }
                } else if( this.destinationsSelected.length ){
                    //if only sourcesSelected is empty
                    if( this.destinationsSelected.indexOf(tempo[i]["Destination"]) !== -1 ){
                        result.push(tempo[i])
                    }
                }
            }

            return result
        }

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

        clickDestination: function (mapping){
            ind = this.destinationsSelected.indexOf(mapping);
            if(ind === -1){
                this.destinationsSelected.push(mapping)
            } else {
                this.destinationsSelected.splice(ind,1)
            }
        }

    },
    watch: {
        selected_source_file: function (val) {
            this.selected_source = [];
            this.dest_files = [];
            this.selected_dest_file = null;
            for (const comparison of this.marq_result){
                if (comparison.Source === val) {
                    this.selected_source.push(comparison)
                }
            }
            for (const comparison of this.selected_source){
                if (comparison.Destination !== val) {
                    this.dest_files.push(comparison.Destination)
                }
            }
        },
        selected_dest_file: function (val) {
            for (const comparison of this.selected_source){
                if (comparison.Destination === val) {
                    this.selected_comparison = comparison;
                }
            }
        }
    }
});
function editor(textarea)
{
    CodeMirror.fromTextArea(textarea, {
        lineNumbers: true
    });
}
let textareas = document.getElementsByTagName("textarea");
textareas = Array.prototype.slice.call(textareas)
for(i = 0;i < textareas.length; i++)
{
    editor(textareas[i]);
}