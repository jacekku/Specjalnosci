// $(document).ready(function () {
//     $.getJSON('data.json', function (response) {
//         handleJSON(response);
//     });
// });


function getElement(string,type="H1"){
let elem = document.createElement(type);
elem.innerHTML=string
// Wstawia go na koniec ciała dokumentu
return elem
}


function handleJSON(json){
    document.body.appendChild(getElement(`Liczba osób na Inżynierii oprogramowania <br/>${json.InzOP}`))
    document.body.appendChild(getElement(`Liczba osób na Systemach informacyjnych <br/>${json.SysInf}`))
    document.body.appendChild(getElement(`Last Update ${json.UpdatedAt}`,"H3"))
}

handleJSON({"InzOP": 44, "SysInf": 7, "UpdatedAt": "Wed Dec  5 16:17:42 2018"})