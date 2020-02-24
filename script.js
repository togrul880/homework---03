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

// creat a generate-password function
function generatePassword() {
  var pLength = prompt("how long do you want the password to be? choose between 8-128")
  var valid = false;

  while (!valid) {
      if ( pLength <= 8 || pLength >= 128 || isNaN(parseInt(pLength))) {
          pLength = prompt("Invalid choise try again. choose between 8-128")
      }
      else {
          valid = true;
      }
  }
  //console.log(pLength);
   var specialCharacters = confirm("Do you want special characters?");
   var upperCaseCharacters = confirm("Do you want Upper case letters?");
   var lowerCaseCharacters = confirm("Do you want use lower case letters?");
   var numberCharacters = confirm("Do you want use numbers?");

   if (specialCharacters) {
     var symbols = "!#$%&'()*+,-./:;<=>?@^[]^_`{|}~";
   }
   if (upperCaseCharacters) {
     var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   if (lowerCaseCharacters) {
     var lowercase = "abcdefghijklmnopqrstuvwxyz";
   }
   if (numberCharacters) {
     var numbers = "0123456789";
   }
   var all = uppercase + lowercase + numbers + symbols;
    //console.log(all);
    var password = "";
    for (var i = 0; i < pLength; i++) {
       var randomNumber = Math.floor(Math.random() * all.length);
       //console.log(randomNumber);
       password += all.substring(randomNumber,randomNumber + 1);
       //console.log(password)
    }
    return password;
}
