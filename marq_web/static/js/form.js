var form = new Vue({
    el: '#form',
    data: {
        test: '',
        yourMapping: { name: 'Choose a mapping', file: 'default'},
        mappings: [
            { name: 'exemple1.yml', file: '' },
            { name: 'exemple2.yml', file: '' },
            { name: 'exemple3.yml', file: '' },
            { name: 'exemple4.yml', file: '' }
        ],
        checkedMappings: []
    },
    methods: {
        processFile(event) {
            this.yourMapping.name = event.target.files[0].name
            this.yourMapping.file = event.target.files[0]
        },
        addFile(event) {
            this.mappings.push( {name: event.target.files[0].name, file:  event.target.files[0]} )
        }
}
});