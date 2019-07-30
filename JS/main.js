/*----- constants -----*/
const CHARACTERS = {
'null': '<img  id="Portal" src="https://i.pinimg.com/originals/64/5c/8d/645c8d877f6e2aad7fa6545140c72a52.gif">',
'1': '<img id="RICK" src="https://media.giphy.com/media/DyXkYw34H1YBO/giphy.gif">',
'-1': '<img id="MORTY" src="https://i.gifer.com/YwvU.gif">',
}

const NAMES = {
    'null': 'Portal',
    '1': 'Rick',
    '-1': 'Morty',
}   
//     '0': 'images/portal.jpeg',
//     '1':'images/download 3.jpeg',
//     '-1':'images/download 2.jpeg',
// }

const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];


/*----- app's state (variables) -----*/
let board, turn, winner



/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

let squares = document.querySelectorAll('td div');

// let img = document.createElement('img');
//     img.src = CHARACTERS;


/*----- event listeners -----*/

document.querySelector('table').addEventListener('click', handleMove);


/*----- functions -----*/
init();

// window.onload = function() {
//     document.getElementById("Theme").onplay();

// }

function handleMove(evt) {
    
    let idx = parseInt(evt.target.id.replace('sq', ''));
console.log(idx);
    if (board[idx]) return;
    
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}
function getWinner() {
    for ( let i = 0; i < WINNING_COMBOS.length; i++) {
        
        if (Math.abs(
            board[WINNING_COMBOS[i][0]] +
            board[WINNING_COMBOS[i][1]] +
            board[WINNING_COMBOS[i][2]]) === 3) 
            return board[WINNING_COMBOS[i][0]];
        }
        if (board.includes(null)) return null;
        return 'T';
    }    
    
function render() {
    board.forEach(function(sqr, idx) {

    squares[idx].innerHTML = CHARACTERS[sqr];
    console.log(CHARACTERS[sqr]);
}); if (winner === 'T') {
        alert("Cats Game 🐱");
} else if (winner) {
        alert(`congratulations ${NAMES[winner].toUpperCase()}!`);
}   else {
        msgEl.textContent = `${NAMES[turn]}'s Turn`;
        }
    };

    function init() {
    board = new Array(9).fill(null);
    turn = 1;
    winner = null;
    render();
    
};

function playAudio() {
    var theme = document.getElementById("Theme").autoplay;
    document.getElementById('demo').innerHTML = theme;
}







init();

render();
