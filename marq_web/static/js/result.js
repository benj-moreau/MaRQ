var result = new Vue({
    el: '#result',
    data: {
        marq_result: res,
        compSelected: 'default'
    },
    computed: {
        //marq_results but in decreasing order
        ordered_results: function(){
            tempo = this.marq_result["comparaisons"]
            result = []
            while (tempo.length > 0) {
                max = 0
                for (i = 1; i < tempo.length; i++) {
                    if (parseInt(tempo[i]["Score"]) > parseInt(tempo[max]["Score"])){
                        max = i
                    }
                }
                result.push(tempo[max])
                tempo.splice(max, 1)
            }
            return result
        }
    },
    watch: {
        compSelected: function(val){
            if(val = 'default'){
                //do nothing
            } else {
                //calculer le graph et l'afficher
            }
        }
    }
});