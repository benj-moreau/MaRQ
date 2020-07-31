var form = new Vue({
    el: '#form',
    data: {
        mappings: mapping_files,
    },
    methods: {
        addFile(event) {
            document.getElementById("fileLabel").innerHTML = event.target.files[0].name;
            var file = document.getElementById('customMappingFile');
            if(file.files.length){
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#customMapping").val(e.target.result);
                };
                reader.readAsBinaryString(file.files[0]);
            }
        }
}
});