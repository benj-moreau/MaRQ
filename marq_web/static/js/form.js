var form = new Vue({
    el: '#form',
    data: {
        mappings: mapping_files,
        customMappings: [],
    },
    methods: {
        addCustomFile(event) {
            Array.from(event.target.files).forEach(mapping => {
                this.customMappings.push({file: mapping, delete:'(x)'});
                $("#customMappingsNames").val( $("#customMappingsNames").val() + "||" + mapping.name);
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#customMappings").val( $("#customMappings").val() + "||" + e.target.result);
                };
                reader.readAsBinaryString(mapping);
            });
        },

        deleteCustomMapping: function(index){
            this.customMappings.splice(index, 1);

            $("#customMappings").val("")
            $("#customMappingsNames").val("")
            this.customMappings.forEach(mapping => {
                $("#customMappingsNames").val( $("#customMappingsNames").val() + "||" + mapping.name);
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#customMappings").val( $("#customMappings").val() + "||" + e.target.result);
                };
                reader.readAsBinaryString(mapping.file);
            });
        }
}
});