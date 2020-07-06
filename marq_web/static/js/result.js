var result = new Vue({
    el: '#result',
    data: {
        marq_result: res,
        compSelected: 'default'
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