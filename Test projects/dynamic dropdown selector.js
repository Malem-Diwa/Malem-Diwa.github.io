const select = window.document.getElementById("download-options");
const download_link = window.document.getElementById("download-selected");
download_link.href = select.value;
download_link.download = select.value.split('/').pop();
select.addEventListener('change', function() {
    download_link.href = this.value;
    download_link.download = this.value.split('/').pop();
});