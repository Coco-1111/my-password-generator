var generateBtn = document.querySelector("#generate");
  var numbers = "0123456789".split("")
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
  var symbols = "@#$%^&*()-+?><:{}[]'".split("")
  var chosenCharacters = []
function generatePassword(){

function = "Generate Password";
let passwordLength = '';
for (var i = 0; i < num; i++) {
  password += getPasswordCharacter();
}
return password;
  }
  
  function writePassword(){
  var password = Password();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
generateBtn.addEventListener("click", writePassword);
  }