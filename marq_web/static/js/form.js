var form = new Vue({
    el: '#form',
    data: {
        mappings: mapping_files,
    },
    methods: {
        addFile(event) {
            document.getElementById("fileLabel").innerHTML = event.target.files[0].name;
        }
}
});