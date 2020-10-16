function count(array, charToCount) {
    var compteur = 0;
    array.forEach(element => {
        if (element == charToCount)
            compteur++;
    });
    return compteur;
}

/* console.log(count(['a', 'a', 'b', 'c'], 'a')); */

function average(array) {
    let sum = 0;
    array.forEach(element => {
        sum+= element;
    });
    return sum/array.length;
}

/* console.log(average(['15', '11', '9', '12', '19'])); */

function min(array) {
    let min = array.sort((a, b) => a-b)[0]
    return min;
}

/* console.log(min(['15', '11', '9', '12', '19'])); */

function max(array) {
    let max = array.sort((a, b) => a-b)[array.length-1];
    return max;
}

/* console.log(max(['15', '11', '9', '12', '19'])); */