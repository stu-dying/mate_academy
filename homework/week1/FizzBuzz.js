var limit = prompt("input upper limit: ");
for (var i = 1; i <= limit; i++){
    var multipleFive = i % 5;
    if (i % 3 === 0) {
        if (multipleFive === 0) {
            console.log("fizzBuzz");
        } else {
            console.log("Fizz");
        }
    } else if (multipleFive === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

