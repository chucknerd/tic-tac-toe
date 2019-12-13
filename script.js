/* constants */

/**app's state (variables) */
let board;

let turn = "X";


/**cached element references */

const squares =
Array.from(document.querySelectorAll("#board div"));

/**event listeners */

document.getElementById("board").addEventListener("click", handleTurn);

/**functions */
function init() {
    board = [
        "", "", "",
        "", "", "",
        "", "", "",
    ];

    render();
};



function render() {
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
    });
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        
        return square === event.target;
    });
}

init();