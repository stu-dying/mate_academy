var limit = 100;
while (true) {
    var userInput = prompt("Enter the number higher than 100");
    if (userInput > limit || userInput === null) {
        if (userInput === null) {
            console.log("you pressed ESC key, next time try to enter any number higher than 100");
        } else {
            console.log("your input was: " + userInput);
        }
        break;
    }
}