let input = prompt("Enter a word:", "Bacon");
let firstLetter = input.charAt(0);
let word = input.substring(1, input.length);

function output() {
    console.log(word+=firstLetter+="ay");
}

output(input);