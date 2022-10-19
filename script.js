///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

var numberList = "0123456789";
var symbolList = "!@#$%^&*()";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
 


var userInput = window.prompt("Choose your password length bewteen 8 - 128 characters")
var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert("That's not the right number, must be 8 - 128")
  return
  
}
if (passwordLength < 8 || passwordLength > 128) {
  window.alert ("Password length must be between 8 to 128 characters")
  
  
}
var useLowercaseChar = window.confirm("Lower Case??");
var useUppercaseChar = window.confirm("You'd like upper case?");
var useNumericalChar = window.confirm("Shall we include numbers?");
var useSpecialChar = window.confirm("Shall we include symbols?");

  //setting up the character requirements so that they must choose at least one of types of characters
if( 
  useLowercaseChar === false &&
  useUppercaseChar === false &&
  useNumericalChar === false &&
  useSpecialChar === false
) {
  window.alert("Must select at least on of the character types offered!")
}
var charChoice = "";
if (useLowercaseChar) {
  charChoice +=
  lowercaseList
}

if (useUppercaseChar) {
  charChoice +=
uppercaseList
}
if (useNumericalChar) {
 charChoice +=
  numberList
}
if (useSpecialChar){
 charChoice +=
  symbolList
}

  var password = ""
for(var i = 0; i <passwordLength; i++) {
 var index = Math.floor(Math.random()*(charChoice.length -1))
 console.log (index)
  var element = charChoice[index]
  console.log (element)
  password += element
}
console.log (password)
  return password;
}
 
  

  