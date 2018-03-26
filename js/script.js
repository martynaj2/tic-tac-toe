/* eslint-env browser */
var player_x = 1;

// modal 
var modal = document.getElementById('simpleModal');
var message = document.querySelector("#alert");
var closeBtn = document.getElementsByClassName('closeBtn')[0];
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
// message with current player
var display = document.querySelector("#currentplayer");
display.innerHTML = "Good luck!";
var filledcells = 0;
var isfinished = false;


// functions to close modal
function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}


// main game function
function put_xy(event) {
    var x = event.target.id;
    var square = document.getElementById(x);  
    if (square.innerHTML != "") return;
    if (isfinished != false) return;
        if (player_x == 1) {
            square.classList.remove('playero');
            square.classList.add('playerx');
            square.innerHTML = "X";
            player_x = 0;
            display.innerHTML = "Now it's player O turn";
            filledcells += 1;
        }
        else {
            square.classList.remove('playerx');
            square.classList.add('playero');
            square.innerHTML = "O";
            player_x = 1;
            display.innerHTML = "It's player X turn";
            filledcells += 1;
        }   
    
        if (endgame("X") == true) {
            message.innerHTML = "X won!"
            modal.style.display = 'block';
            isfinished = true;
           
        }
        else if (endgame("O") == true) {
            message.innerHTML = "O won!";
            modal.style.display = 'block';
            isfinished = true;
        }
        else if (endgame("O") == false && endgame("X") == false && filledcells == 9) {
            message.innerHTML = "Oh no! Draw!";
            modal.style.display = 'block';
            isfinished = true;
        }
    }

var data = document.getElementsByClassName('cell');
for (var i = 0; i < data.length; i++) {
    data[i].addEventListener('click', put_xy);
}


var reset = document.getElementById("resetBtn");
reset.addEventListener('click',resetgame);

// reseting board
function resetgame() {
    for (var i=0; i<data.length; i++){
    data[i].innerHTML=""; 
    }
    display.innerHTML = "Let's play again! Player X starts.";
    player_x = 1 ;
    message.innerHTML = "";
    filledcells = 0;
    isfinished = false;
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

function endgame(player){
    if (data[0].innerHTML==player && data[1].innerHTML==player && data[2].innerHTML==player) {
        return true;
    }
    else if (data[3].innerHTML==player && data[4].innerHTML==player && data[5].innerHTML==player) {
        return true;
    }
    else if (data[6].innerHTML==player && data[7].innerHTML==player && data[8].innerHTML==player) {
        return true;
    }
    else if (data[0].innerHTML==player && data[3].innerHTML==player && data[6].innerHTML==player) {
        return true;
    }
    else if (data[1].innerHTML==player && data[4].innerHTML==player && data[7].innerHTML==player) {
        return true;
    }
    else if (data[2].innerHTML==player && data[5].innerHTML==player && data[8].innerHTML==player) {
        return true;
    }
    else if (data[0].innerHTML==player && data[4].innerHTML==player && data[8].innerHTML==player) {
        return true;
    }
    else if (data[2].innerHTML==player && data[4].innerHTML==player && data[6].innerHTML==player) {
        return true;
    }
    else {
        return false;
    }
}


