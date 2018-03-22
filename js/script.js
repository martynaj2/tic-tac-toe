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

