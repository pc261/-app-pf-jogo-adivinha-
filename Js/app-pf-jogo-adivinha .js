console.log("Hello World");


const guessIput = document.getElementById("guessInput");
const submit = document.getElementById("submit");
const attempts = document.getElementById("attempts"); 

guessIput.onclick = () => {
    if (localStorage.getItem("randomNumber") !== null) {
        localStorage.getItem("randomNumber");
        //console.log("O número já foi gerado: " + localStorage.getItem("randomNumber"));
    } else {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        localStorage.setItem("randomNumber", randomNumber);
        //console.log(randomNumber);
    }
}

submit.onclick = () => {
    const awnser = Number(localStorage.getItem("randomNumber"));

	if (guessIput.value == awnser) {
        alert("Parabéns! Você acertou o número!");
    }else if (guessIput.value < awnser) {
        alert("O número é maior!");
    } else {
        alert("O número é menor!");
    }
    
}
