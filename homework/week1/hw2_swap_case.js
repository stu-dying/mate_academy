function swapCase(str){
    var reverse = "";
    for (var letter of str){
        if (letter === letter.toUpperCase()){
            reverse += letter.toLowerCase();
        } else {
            reverse += letter.toUpperCase();
        }
    }
    return reverse;
}
swapCase("SDFSEdfsdfsSDFSDFSFdsfsdfdsSDFDFS");