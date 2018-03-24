/* eslint-env browser */
var player_x = 1;
var display = document.querySelector("#currentplayer");
display.innerHTML = "Good luck!";


var data = document.getElementsByClassName('cell');
for (var i = 0; i < data.length; i++) {
    data[i].addEventListener('click', put_xy);
}


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


function resetgame() {
    for (var i=0; i<data.length; i++){
    data[i].innerHTML=""; 
    }
    display.innerHTML = "Let's play again! Player X starts.";
    player_x =1 ;
}

var theme = document.getElementById("moon");
theme.addEventListener('click',changeTheme);

function changeTheme() {
    $("body").css("background-color", "#373d52a1");
}

