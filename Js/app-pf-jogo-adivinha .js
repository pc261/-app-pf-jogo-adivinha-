console.log("Jogo de Adivinhação iniciado");

const guessInput = document.getElementById("guessInput");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const attempts = document.getElementById("attempts");

function startGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 a 100
    localStorage.setItem("randomNumber", btoa(randomNumber.toString()));
    localStorage.setItem("attempts", btoa("10"));
    attempts.innerText = 10;
}

if (localStorage.getItem("randomNumber") === null) {
    startGame();
} else { 
    const storedAttempts = localStorage.getItem("attempts");
    attempts.innerText = storedAttempts ? atob(storedAttempts) : 10;
}

submit.onclick = () => {
    const randomNumberEncoded = localStorage.getItem("randomNumber");
    const answer = Number(atob(randomNumberEncoded));
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        alert("Por favor, digite um número de 1 a 100.");
        return;
    }
    
    if (guess === answer) {
        alert("🎉 Parabéns! Você acertou o número!");
        startGame();
        return;
    } else if (guess < answer) {
        alert("O número é maior!");
    } else {
        alert("O número é menor!");
    }
 
    let attemptsLeft = Number(atob(localStorage.getItem("attempts")));
    attemptsLeft--;

    if (attemptsLeft <= 0) {
        alert("☠️ Suas tentativas acabaram! O número era: " + answer);
        startGame();
    } else {
        localStorage.setItem("attempts", btoa(attemptsLeft.toString()));
        attempts.innerText = attemptsLeft;
    }

    guessInput.value = "";
    guessInput.focus();
}

reset.onclick = () => {
    startGame();
    alert("Jogo reiniciado!");
    guessInput.value = "";
    guessInput.focus();
}
