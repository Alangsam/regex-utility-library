// Your functions go here!

// + ==== one or more characters
// * ==== zero or more characters

//Match Literal Strings
function wheresWaldo(string) {
   var waldoIsHiding = "Somewhere Waldo is hiding in this text.";
   let waldoRegex = /Waldo/;
   console.log(waldoRegex.test(string));
   return waldoRegex.test(string);
}

//Match Single Character with Multiple Possibilities
function matchVowels(string) {
   let vowelRegex = /[aeiou]/gi;
   return string.match(vowelRegex);
}
// let quoteSample =
// "Beware of bugs in the above code; I have only proved it correct, not tried it.";

// //Match Single Characters Not Specified
function matchNotVowels(string) {
   let myRegex = /[^0-9aeiou]/gi;
   return string.match(myRegex);
}

//let quoteSample = "3 blind mice.";

// //Match Characters that Occur One or More Times
function moreThanOnce(string) {
   let myRegex = /s+/g;
   return string.match(myRegex);
}
// let difficultSpelling = "Mississippi";

// //Find One or More Criminals in a Hunt
function findOneOrMore(string) {
   let reCriminals = /c+/gi;
   return string.match(reCriminals);
}

// // Match Beginning String Patterns
function beginningOf(string) {
   let calRegex = /^The/; // Change this line
   return calRegex.test(string);
}

// // Match Ending String Patterns
function endingOf(string) {
   let lastRegex = /end$/;
   return lastRegex.test(string);
}
// let caboose = "The last car on a train is the caboose";

// // Match All Letters and Numbers
function matchAlphaNums(string) {
   let alphabetRegexV2 = /\w/g;
   return string.match(alphabetRegexV2);
}
// let quoteSample = "The five boxing wizards jump quickly.";

// // Match Everything But Letters and Numbers
function matchNonAlphaNums(string) {
   let nonAlphabetRegex = /\W/g;
   return string.match(nonAlphabetRegex);
}
// let quoteSample = "The five boxing wizards jump quickly.";

// // Match All Numbers
function matchNums(string) {
   let numRegex = /\d/g; // Change this line
   return string.match(numRegex);
}
// let movieName = "2001: A Space Odyssey";

// // Match All Non-Numbers
function matchNonNums(string) {
   let noNumRegex = /\D/g;
   return string.match(noNumRegex);
}
// let movieName = "2001: A Space Odyssey";

// // Match Non-Whitespace Characters
function matchNoWhite(string) {
   let countNonWhiteSpace = /\S/g;
   return string.match(countNonWhiteSpace);
}
// let sample = "Whitespace is important in separating words";

// // Positive and Negative Lookahead
function posNegLookahead(string) {
   let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2,})/; // Change this line
   return pwRegex.test(string);
}
// let sampleWord = "astronaut";

// // Check For Mixed Grouping of Characters
function mixedGrouping(string) {
   let myRegex = /(Eleanor|Franklin).*Roosevelt/;
   return myRegex.test(string);
}
// let myString = "Eleanor Roosevelt";

// // Use Capture Groups to Search and Replace
function captureGroupsReplace(string) {
   let fixRegex = /^(\w+)\s(\w+)\s(\w+)/;
   let replaceText = "$3 $2 $1";
   return string.replace(fixRegex, replaceText);
}
// let str = "one two three";

// // Remove Whitespace from Start and End
function iHateWhiteSpace(string) {
   let wsRegex = /^\s+|\s+$/g;
   return string.replace(wsRegex, "");
}

// let hello = "   Hello, World!  ";
