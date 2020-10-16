function count(array, charToCount) {
    var compteur = 0;
    array.forEach(element => {
        if (element == charToCount)
            compteur++;
    });
    return compteur;
}

/* console.log(count(['a', 'a', 'b', 'c'], 'a'));   */

function average(array) {

}