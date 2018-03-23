/* eslint-env browser */
var something = document.getElementsByClassName('cell');
var player_x = 1;
var display = document.querySelector("#currentplayer");
display.innerHTML = "Good luck!"; 

for (var i = 0; i < something.length; i++) {
    something[i].addEventListener('click', put_xy);
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
    for (var i=0; i<something.length; i++){
    something[i].innerHTML="";    
    }
    display.innerHTML = "Let's play again! Player X starts.";
    player_x =1 ;
}
