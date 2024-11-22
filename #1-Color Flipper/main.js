const colors = [
    "#229954",
    "#2e4053",
    "#99e990",
    "#c70039",
    "#900c3e",
    "#40E0D0",
    "#fdfefe",
    "#FFA07A",
    "#2e86c1",
    "#571845",
    "#FF5733",
    "#632f24",
    "#6c6c6c",
    "#FFD700"];
  
const button = document.getElementById("button");
const letterColor = document.getElementById("letter_color");

button.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColors = randomNumber;

    document.body.style.background = colors[randomColors];
    letterColor.textContent = colors[randomColors];
})