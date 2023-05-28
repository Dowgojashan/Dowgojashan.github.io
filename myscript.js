function Prompt(){
    var msg;
    var user_name = prompt("Please enter your name:");
    if(user_name == null||user_name == ""){
        msg = "Invalid input";
    }
    else{
        msg = "Hi " + user_name + ",Nice to meet you";
    }
    document.getElementById("result1").innerHTML = msg;
}

function Tree(){
    let text = "";
    // for(let i = 1;i <= 4;i++){
    //     for(let k = 1;k <= 5-i+1;k++){
    //         text += " ";
    //     }
    //     for(let j = 1;j <= 2*i-1;j++){
    //         text += "*";
    //     }
    //     text += "<br>";
    // }
    // for(let i = 1;i <= 4;i++){
    //     for(let j = 1;j <= 4-i+1;j++){
    //         text += " ";
    //     }
    //     for(let k = 1;k <= 2*i+1;k++){
    //         text += "*";
    //     }
    //     text += "<br>";
    // }
    // for(let i = 1;i <= 4;i++){
    //     for(let j = 1;j <= 3-i+1;j++){
    //         text += " ";
    //     }
    //     for(let k = 1;k <= 2*i+3;k++){
    //         text += "*";
    //     }
    //     text += "<br>";
    // }
    // for(let i = 1;i <= 2;i++){
    //     for(let j = 1;j <= 5;j++){
    //         text += " ";
    //     }
    //     for(let k = 1;k <= 1;k++){
    //         text += "*";
    //     }
    //     text += "<br>";
    // }
    // text += "*******";

    for(var i = 1;i <= 9;i++){
        for(var j = 9-i;j > 0;j--){
            text += ' ';
        }
        for(var k = 1;k <= i;k++){
            text += "*";
        }
        text += "<br>";
    }

    document.getElementById("result2").innerHTML = text;
}