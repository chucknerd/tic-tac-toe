/* constants */

/**app's state (variables) */
let board;


/**cached element references */

/**event listeners */

/**functions */
function init() {
    board = [
        "1", "", "",
        "", "", "",
        "", "", "",
    ];
};

render();

function render() {
    board.forEach(function(mark, index){
        console.log(mark, index)
    });
};

init();