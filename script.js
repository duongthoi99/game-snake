const gridSize = 20;
const gameSpeed = 100; // milliseconds

const container = document.querySelector('.game-container');
const gameOverMessage = document.querySelector('.game-over');

let snake = [{ x: 10, y: 10 }];
let direction = 'right';
let food = {};

function createFood() {
    const foodX = Math.floor(Math.random() * gridSize);
    const foodY = Math.floor(Math.random() * gridSize);
    food = { x: foodX, y: foodY };
}

function updateGame() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        createFood();
    } else {
        snake.pop();
    }

    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        clearInterval(gameInterval);
        gameOverMessage.style.display = 'block';
        return;
    }

    renderGame();
}

function renderGame() {
    container.innerHTML = '';

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const segment = document.createElement('div');
            segment.classList.add('game-segment');
            
            if (snake.some(s => s.x === x && s.y === y)) {
                segment.classList.add('snake-segment');
            }

            if (food.x === x && food.y === y) {
                segment.classList.add('food');
            }

            container.appendChild(segment);
        }
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down') {
                direction = 'up';
            }
            break;
        case 'ArrowDown':
            if (direction !== 'up') {
                direction = 'down';
            }
            break;
        case 'ArrowLeft':
            if (direction !== 'right') {
                direction = 'left';
            }
            break;
        case 'ArrowRight':
            if (direction !== 'left') {
                direction = 'right';
            }
            break;
    }
});

createFood();
const gameInterval = setInterval(updateGame, gameSpeed);