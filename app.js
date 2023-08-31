const player = (name, marker) => {
    return { name, marker };
};

const player1 = player('Mark', 'X');
const player2 = player('John', 'O');

console.log(player1.name)