var something = document.getElementsByClassName('cell');
for (var i=0; i<something.length; i++){
    something[i].addEventListener('click', put_xy);
}

var player_x = 1;

function put_xy(event) {
   //console.log(23232);
    //ert(event.target.id);
    var square = document.getElementById(event.target.id);
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



