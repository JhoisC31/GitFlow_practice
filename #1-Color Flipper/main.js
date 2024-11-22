const colors = [
    "#229954",
    "#2e4053",
    "#ffc300",
    "#c70039",
    "#900c3e",
    "#40E0D0",
    "#fdfefe",
    "#FFA07A",
    "#2e86c1",
    "#571845",
    "#FF5733"];
  
const button = document.getElementById("button");
const letterColor = document.getElementById("letter_color");

button.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColors = randomNumber;

    document.body.style.background = colors[randomColors];
    letterColor.textContent = colors[randomColors];
})