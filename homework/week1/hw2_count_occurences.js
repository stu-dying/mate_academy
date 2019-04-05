function numJewelsInStones(J, S) {
    var count = 0;
    for (let each of J){
        count += countOccurrences (S, each);
    }
    countOccurrences('Abrakadabra', 'a');
    return count;
}
function countOccurrences (word, letter){
    var found = 0;
    for (let each of word){
        if (each === letter){
            found++;
        }
    }
    return found;
}
numJewelsInStones("x", "zzzZxxxxxZZaxxxAAbzxxxzbbbxx  xxz");