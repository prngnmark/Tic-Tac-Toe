const board = document.querySelector(".board");
var turn = 0;

const player = (name, marker) => {
    return { name, marker };
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');

const gameBoard = (() => {
    const boardState =
        [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ]

    const createBoard = () => {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                const place = document.createElement("div");
                place.classList = 'place';
                place.dataset.index = [i, j];
                place.addEventListener('click', () => {
                    if (place.innerText == '') {
                        addMarker(place)
                    }
                })
                board.appendChild(place)
            }
        }
    }
    const addMarker = (place) => {
        turn += 1
        if (turn % 2 != 0) {
            place.innerText = player1.marker;
        } else {
            place.innerText = player2.marker;
        }
    }
    return { boardState, createBoard, addMarker }
})();

gameBoard.createBoard()