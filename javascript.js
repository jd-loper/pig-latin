let input = prompt("Enter a word:", "Bacon");
let firstLetter = input.charAt(0);
let word = input.substring(1, input.length);
let newWord = word+=firstLetter+="ay";

window.onload = function() {
    document.getElementById("newValue").innerHTML = newWord.toUpperCase();
}