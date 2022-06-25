// Assignment Code

var cH = ["*", "$", "@", "#", ":", "&", "?", "!", ".", "+", "?", "-", "^"];
var uC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//variables for all possible combo of passwords
function generatePassword() {

    numberOfCharacters = prompt("How many characters do you want your password to contain? You are allowed a minimum of 8 and a maximum of 128 characters.");
    //pop up once button is clicked.
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        return alert("invalid input of characters. Try agaim");
    } else {
        alert("Congrats, your password will contain " + numberOfCharacters + " characters. ");

    }
    if (numberOfCharacters >= 8 || numberOfCharacters <= 128) {
        numbers = confirm("Do you want to contain numbers?");
        cH = confirm("Do you want to contain special characters?");
        uC = confirm("Do you want to contain uppercase letters?");
        lowC = confirm("Do you want to contain lowercase letters?");


    }
    if (numbers === false || cH === false || uC === false || lowC === false) {

        return alert(" Choose at least one character type.");
    }
};





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);