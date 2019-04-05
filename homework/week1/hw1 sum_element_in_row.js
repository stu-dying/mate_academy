function rowSumOddNumbers(n) {
    var progressionStep = 2;
    var firstElement = 1;
    // Finds index for first position in specified line
    function findFirstNumberInRow(rowNumber){
        var index = 0;
        for (var i = 0; i < rowNumber; i++){
            index += i;
        }
        return index;
    }
    // Calculates final number for specified index
    function numberAtIndex(m){
        var position = firstElement + progressionStep * (m - 1);
        return position;
    }
    //calculates sum for range of elements
    function sumForNElements(begin){
        var sum = (numberAtIndex(begin) + numberAtIndex(begin + n - 1)) / 2 * n;
        return sum;
    }
    var indexOfNewLine = findFirstNumberInRow(n) + 1;
    return sumForNElements(indexOfNewLine);
}

rowSumOddNumbers(2)