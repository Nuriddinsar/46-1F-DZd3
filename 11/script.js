let random = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 15;
let attempts = 0;
let gameOver = false;

const input = document.getElementById("input");
const button = document.getElementById("btn");
const resetButton = document.getElementById("reset");
const prompt = document.querySelector(".text-prompt");

function resetGame() {
    random = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    input.value = "";
    input.disabled = false;
    button.disabled = false;
    prompt.textContent = "Введите число от 1 до 100";
    input.focus();
}

function checkGuess() {
    if (gameOver) {
        return;
    }

    const value = input.value.trim();
    const guess = Number(value);

    if (value === "" || !Number.isInteger(guess) || guess < 1 || guess > 100) {
        prompt.textContent = "Введите целое число от 1 до 100";
        input.focus();
        return;
    }

    attempts++;

    if (guess === random) {
        prompt.textContent = `Поздравляю! Вы угадали число ${random} за ${attempts} попыток!`;
        gameOver = true;
    } else if (attempts === maxAttempts) {
        prompt.textContent = `Попытки закончились. Загаданное число: ${random}`;
        gameOver = true;
    } else if (guess < random) {
        prompt.textContent = "Загаданное число больше";
    } else {
        prompt.textContent = "Загаданное число меньше";
    }

    if (gameOver) {
        input.disabled = true;
        button.disabled = true;
    } else {
        input.value = "";
        input.focus();
    }
}

button.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkGuess();
    }
});
