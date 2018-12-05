$(document).ready(function () {
    $.getJSON('data.json', function (response) {
        handleJSON(response);
    });
});





function handleJSON(json){
    document.write(`<H1>Liczba osób na Inżynierii oprogramowania <br/>${json.InzOP}</H1>`)
    document.write(`<H1>Liczba osób na Systemach informacyjnych <br/>${json.SysInf}</H1>`)
    document.write(`<H3>Last Update ${json.UpdatedAt}</H3>`)
}

// handleJSON({"InzOP": 44, "SysInf": 7, "UpdatedAt": "Wed Dec  5 16:17:42 2018"})