// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let kalvian1 = 'om';
console.log("The driver's name is " + kalvian1);

let kalvian2 = 'kalvian2';
console.log("The navigator's name is " + kalvian2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (kalvian1.length > kalvian2.length) {
  console.log(
    'The driver has the longest name, it has ' +
      kalvian1.length +
      ' characters.'
  );
} else if (kalvian1.length < kalvian2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      kalvian2.length +
      ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' + kalvian1.length + ' characters!'
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
let vowels = '';
for (let i = 0; i < kalvian1.length; i++) {
  if ('aeiouAEIOU'.includes(kalvian1[i])) {
    vowels += kalvian1[i] + ' ' + (i + 1) + ' ';
  }
}
if (vowels.length > 0) {
  console.log(kalvian1 + ' ' + vowels);
} else {
  console.log('no vowels');
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let upperCaseCount = 0;
let lowerCaseCount = 0;
for (let i = 0; i < kalvian1.length; i++) {
  if (kalvian1[i] >= 'A' && kalvian1[i] <= 'Z') {
    upperCaseCount++;
  } else if (kalvian1[i] >= 'a' && kalvian1[i] <= 'z') {
    lowerCaseCount++;
  }
}
console.log('Number of uppercase characters: ' + upperCaseCount);
console.log('Number of lowercase characters: ' + lowerCaseCount);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let spacedName = '';
for (let i = 0; i < kalvian1.length; i++) {
  spacedName += kalvian1[i] + ' ';
}
console.log(spacedName.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
let reversedName = '';
for (let i = kalvian2.length - 1; i >= 0; i--) {
  reversedName += kalvian2[i];
}
console.log(reversedName);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let mergedNames = kalvian2 + ' ' + kalvian1;
console.log(mergedNames);

if (kalvian1.localeCompare(kalvian2) < 0) {
  console.log("The driver's name goes first.");
} else if (kalvian1.localeCompare(kalvian2) > 0) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus Time!
// Bonus 1:

// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat libero at ligula congue, vel suscipit ligula lacinia. Integer a accumsan neque. Etiam eu dui eget justo dictum sollicitudin. Suspendisse vel bibendum justo. Nulla facilisi. In hac habitasse platea dictumst. Etiam fermentum tristique vehicula. Suspendisse potenti. Sed egestas tellus nec rhoncus. Vivamus nec odio dolor. Sed venenatis in justo et finibus. Etiam sed bibendum tortor. Curabitur tincidunt purus a dui viverra luctus.
`;

function countWords(text) {
  // Split the text into words using whitespace as a delimiter.
  const words = text.split(/\s+/);
  return words.length;
}

const Countword = countWords(loremIpsum);
console.log(`Word count in the lorem ipsum text: ${Countword} words`);

function LatinWord(text, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'g');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

const latinWordCount = LatinWord(loremIpsum, 'et');
console.log(
  `Count of the Latin word "et" in the lorem ipsum text: ${latinWordCount} times`
);

// Bonus 2:

// Create a new variable phraseToCheck and have it contain some string value.

const phraseToCheck = 'A man, a plan, a canal, Panama!';

function isPalindrome(phrase) {
  const cleanedPhrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedPhrase = cleanedPhrase.split('').reverse().join('');
  return cleanedPhrase === reversedPhrase;
}

if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
