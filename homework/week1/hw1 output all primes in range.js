function getPrimes(){
    var limit = prompt("Enter number: ");
    var primes = [];
    for (var i = 2; i <= limit; i++){
        var isPrime = true;
        for (var j = 2; j < i; j++){
            if (i % j === 0){
                isPrime = false;
            }
        }
        if (isPrime === true){
            primes.push(i);
        }
    }
    return primes;
}

getPrimes();