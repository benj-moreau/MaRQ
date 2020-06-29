var form = new Vue({
    el: '#form',
    data: {
        test: ''
    },
    watch: {
        test: function () {
            console.log('test')
        }
    }
});