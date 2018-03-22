var something = document.getElementsByClassName('cell');

for (var i=0; i<something.length; i++){
    something[i].addEventListener('click', put_xy);
}

var player_x = 1;

function put_xy(event) {
    var square = document.getElementById(event.target.id);
    if (square.innerHTML != "") return;
        if (player_x == 1) {
            square.classList.remove('playero');
            square.classList.add('playerx');
            square.innerHTML = "X";
            player_x = 0;
        }
        else {
            square.classList.remove('playerx');
            square.classList.add('playero');
            square.innerHTML = "O";
            player_x = 1;
        }   
    }

var reset = document.getElementById("resetBtn");
reset.addEventListener('click',resetgame);



function resetgame() {
    for (var i=0; i<something.length; i++){
    something[i].innerHTML="";
    }
}

