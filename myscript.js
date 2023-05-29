function loadDoc(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        Show(this);
    }
    //check
    xhttp.onreadystatechange = function(){
        if(this.readyState != 4 || this.status != 200){
            document.getElementById("example").innerHTML = 
            'The status of the XMLHttpRequest: ' + this.readyState + '<br>' +
            "HTTP response status code: " + this.status + "<hr>" + this.statusText;
        }
    }

    xhttp.open("GET","./rate.xml");
    xhttp.send();
}
//Show data
function Show(xml){
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("ExchangeRate");
    let table = "<tr><th>Country</th><th>Money</th><th>Unit</th></tr>";

    for(let i =0;i < x.length;i++){
        table += "<tr><td>" + 
        x[i].getElementsByTagName("Country")[0].childNodes[0].nodevalue +
        "</td><td>" +
        x[i].getElementsByTagName("Rate")[0].childNodes[0].nodevalue +
        "</td><td>" +
        x[i].getElementsByTagName("Code")[0].childNodes[0].nodevalue +
        "</td></tr>";
    }
    document.getElementById("example").innerHTML = table;
}

var result;
let table;
//(1)calculate the exchange rate and show it
function Exchange(){
    var dollar = document.querySelector('.dollar');

    document.getElementById('btn').onclick = function(){
        var TWD = parseInt(document.getElementById('Dollars').value);
        //(5)check
        if(TWD <= 0){
            alert('Invalid input!');
            Reset();
        }
        else{
            result = "Your input:" + TWD + "<br>";
            table = "<tr><th>Country</th><th>Money</th><th>Unit</th></tr>";
            for(let i = 0;i < x.length;i++){
                table += "<tr><td>" + 
                x[i].getElementsByTagName("Country")[0].childNodes[0].nodevalue +
                "</td><td>" +
                (x[i].getElementsByTagName("Rate")[0].childNodes[0].nodevalue * TWD).toFixed(2) +
                "</td><td>" +
                x[i].getElementsByTagName("Code")[0].childNodes[0].nodevalue +
                "</td></tr>";
            }
            dollar.innerHTML = result + table;
        }
    }
}    
//(4)reset the data
function Reset(){
    result = "Clear!<br>";
    table = "";
    document.getElementById("clear").innerHTML = result;
}