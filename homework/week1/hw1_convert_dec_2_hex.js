'use strict';
function toHex(value) {
    const hexNumbers = {
        0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"};
    var base = 16;
    var remainder = 0;
    var quotient = 0;
    var resultInHex = "";

    if (value <= base){
        return lookupForHex(value);
    } else {
        return calculateHex(value);
    }

    function calculateHex(value){
        if (value > base){
            remainder = value % base;
            quotient = (value - remainder) / base;
            resultInHex = lookupForHex(remainder) + resultInHex;
            calculateHex(quotient);
        } else {
            resultInHex = lookupForHex(quotient) + resultInHex;
            return resultInHex;
        }
        return resultInHex;
    }

    function lookupForHex(num){
        return hexNumbers[num.toString()];
    }
}
toHex(50);