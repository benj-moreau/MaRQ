var form = new Vue({
    el: '#form',
    data: {
        test: '',
        yourMapping: { name: 'Choose a mapping', file: 'default'},
        mappings: mapping_files,
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