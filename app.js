const board = document.querySelector(".board");
const container = document.querySelector(".container")

const player = (name, marker) => {
    return { name, marker };
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');

const gameBoard = (() => {
    var turn = 0;
    var winner = false;
    const boardState =
        [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"]
        ]

    const createBoard = () => {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                const place = document.createElement("div");
                place.classList = 'place';
                place.dataset.rowIndex = i;
                place.dataset.colIndex = j;
                place.addEventListener('click', () => {
                    if (place.innerText == '') {
                        addMarker(place);
                    }
                })
                board.appendChild(place);
            }
        }
    }



    const addMarker = (place) => {
        turn += 1
        var player;
        if (turn % 2 != 0) {
            player = player1.name
            marking = player1.marker;
            place.innerText = marking;
        } else {
            player = player2.name
            place.innerText = player2.marker;
        }
        var i = place.dataset.rowIndex;
        var j = place.dataset.colIndex;
        boardState[i][j] = place.innerText;
        checkBoard(boardState, player);
    }

    const displayResults = (player, winner) => {
        const results = document.createElement("span");
        results.classList = 'results';
        if (winner == true) {
            results.innerText = `${player} Wins!`;
            container.appendChild(results);
        } else {
            results.innerText = `Draw!`;
            container.appendChild(results);
        }
    }

    const checkBoard = (boardState, player) => {
        if (boardState[0][0] == boardState[0][1] && boardState[0][1] == boardState[0][2]
            || boardState[1][0] == boardState[1][1] && boardState[1][1] == boardState[1][2]
            || boardState[2][0] == boardState[2][1] && boardState[2][1] == boardState[2][2]
            || boardState[0][0] == boardState[1][0] && boardState[1][0] == boardState[2][0]
            || boardState[0][1] == boardState[1][1] && boardState[1][1] == boardState[2][1]
            || boardState[0][2] == boardState[1][2] && boardState[1][2] == boardState[2][2]
            || boardState[0][0] == boardState[1][1] && boardState[1][1] == boardState[2][2]
            || boardState[0][2] == boardState[1][1] && boardState[1][1] == boardState[2][0]) {
            winner = true;
            displayResults(player, winner);
        } else if (turn == 9) {
            displayResults(winner)
        }
    }

    return { createBoard }
})();

gameBoard.createBoard()