'use strict';

function check(str) {
    let result = [];
    let count = 1;
    let pointerInResult = 0;
    let encodedString = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result.push(str[i]);
            result.push(count);
            pointerInResult += 2;
            count = 1;
        }
    }

    for (let k = 0; k < result.length; k += 2){
        if (result[k + 1] === 1){
            encodedString += result[k];
        } else {
            encodedString = encodedString + result[k] + result[k + 1];
        }
    }
    console.log(encodedString);
    return encodedString;

}
check("aaaabcddfdddffff");
check("ABBBAABBAABB");


