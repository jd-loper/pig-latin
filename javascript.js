function convertToPigLatin(text) {
    // Split the text into an array of words
    let words = text.split(" ");
    
    // Define the regular expression pattern to match vowels
    let vowelsRegex = /[aeiou]/;
    
    // Loop through each word and convert it to Pig Latin
    let pigLatinWords = words.map(word => {
      // If the word starts with a vowel, just add "way" to the end
      if (vowelsRegex.test(word[0])) {
        return word + "way";
      }
      // Otherwise, move the first consonant(s) to the end and add "ay"
      let firstVowelIndex = word.search(vowelsRegex);
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
    });
    
    // Join the Pig Latin words back into a single string
    return pigLatinWords.join(" ");
  }
  
  // Example usage
  console.log(convertToPigLatin("hello world")); // "ellohay orldway"
  