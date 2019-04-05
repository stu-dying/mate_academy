const ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function isPangram(string){
    string = string.toUpperCase();
    for (var each of ABC){
        if (!string.includes(each)){
            return false;
        }
    }
    return true;
}