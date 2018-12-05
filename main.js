$(document).ready(function () {
    $.getJSON('data.json', function (response) {
        console.log(response);
    });
});