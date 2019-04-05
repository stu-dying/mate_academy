function amIWilson(p) {
    return Number.isInteger((toFactorial(p - 1) + 1) / (p * p));
}
function toFactorial(n){
    if (n != 0){
        var result = 1;
        for (var i = 1; i <= n; i++){
            result *= i;
        }
        return result;
    } else {
        return false;
    }
}

amIWilson(567)