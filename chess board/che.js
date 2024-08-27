function createChessBoard() {
    const chessBoard = document.getElementById('chessBoard');
    let isBlack = false;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.className = isBlack ? 'black' : 'white';
            chessBoard.appendChild(square);
            isBlack = !isBlack; 
        }
        isBlack = !isBlack; 
    }
}

createChessBoard();