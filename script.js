let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWinner() {
    return null;
}

function handleClick(index) {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    renderBoard();

    const winner = checkWinner();
    if (winner) {
        displayMessage(winner === 'T' ? 'Empate!' : `Jogador ${winner} vence!`);
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.className = 'cell ' + board[index]?.toLowerCase();
    });
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
