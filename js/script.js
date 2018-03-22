/*
var player_X = 1;
//var square = document.getElementById('0');


function display(cell) {
    var square = document.getElementsByClassName("cell")[0];
   
    if(square.innerHTML !="") return;
    
    if ( player_X == 1){
        square.innerHTML = "X";
        player_X = 0;
    } else {
        square.innerHTML = "O";
        player_X = 1;
    }
}
*/


var something = document.getElementsByClassName('cell')[0];
/*for (var i=0; i<something.length; i++){
    
}*/
/*var something = document.querySelectorAll(".cell");*/
var player_x = 1;
something.addEventListener('click', put_xy);

function put_xy() {
    if (something.innerHTML !== "") return;
    if (player_x == 1) {
        something.innerHTML = "X";
        player_x = 0;
    }
    else {
        something.innerHTML = "0";
        player_x = 1;
    }
}