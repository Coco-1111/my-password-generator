var generateBtn = document.querySelector("#generate");
  var numbers = "0123456789".split("")
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
  var symbols = "@#$%^&*()-+?><:{}[]'".split("")
  var chosenCharacters = []
function generatePassword(){

var string = "Generate Password";
let passwordLength = 8;
  if(string.length > 8 && string.length < 128) {
    for (var i = string.length -1; i >=0; i--) {
      
    }
  }
return userPassword
  
}


  function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
generateBtn.addEventListener("click", writePassword);
  