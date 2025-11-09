let randomLabel = document.getElementById("randomLabel");
let btn = document.getElementById("randomBtn");
let randomNumber
btn.onclick = function()
{
    randomNumber = Math.floor(Math.random() * 100);
    randomLabel.textContent = randomNumber;
    console.log("Random Number:", randomNumber);
}