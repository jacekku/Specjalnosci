$(document).ready(function () {
    $.getJSON('data.json', function (response) {
        handleJSON(response);
    });
});





function handleJSON(json){
    json.forEach(element => {
        document.write("<h1>"+element+"</h1>")
    });
}