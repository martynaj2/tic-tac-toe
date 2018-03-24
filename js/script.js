/* eslint-env browser */
var player_x = 1;
var display = document.querySelector("#currentplayer");
display.innerHTML = "Good luck!";


var data = document.getElementsByClassName('cell');
for (var i = 0; i < data.length; i++) {
    data[i].addEventListener('click', put_xy);
}


// main game function
function put_xy(event) {
    var square = document.getElementById(event.target.id);  
    if (square.innerHTML != "") return;
        if (player_x == 1) {
            square.classList.remove('playero');
            square.classList.add('playerx');
            square.innerHTML = "X";
            player_x = 0;
            display.innerHTML = "Now it's player O turn";  
        }
        else {
            square.classList.remove('playerx');
            square.classList.add('playero');
            square.innerHTML = "O";
            player_x = 1;
            display.innerHTML = "It's player X turn";
        }   
    }

var reset = document.getElementById("resetBtn");
reset.addEventListener('click',resetgame);

// reseting board
function resetgame() {
    for (var i=0; i<data.length; i++){
    data[i].innerHTML=""; 
    }
    display.innerHTML = "Let's play again! Player X starts.";
    player_x =1 ;
}

var theme = document.getElementById("moon");
theme.addEventListener('click',changeTheme);


// change theme button
var theme_name="light";

function changeTheme() {
    if(theme_name == "light") {
    theme_name = "dark";
    $("body").css("background-color", "#373d52a1");
    }
    else {
    theme_name = "light";
    $("body").css("background-color","#2d2a350d")
     }
}


// showing winner
/*var proba = document.getElementsByClassName('cell');*/

function endgame(){
    console.log("dada"); 
}


var dupa = document.getElementsByClassName('cell');
for (var d = 0; d < dupa.length; d++) {
    if (dupa[d].innerHTML=="X"){
        endgame();
    }
}


