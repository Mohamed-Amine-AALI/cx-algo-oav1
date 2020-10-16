function count(array, charToCount) {
    let compteur = 0;
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

function diff(array) {
    let largest_deviation = 0;
    array.forEach((element, i) => {
        for (let index = i+1; index < array.length; index++) {
            if (largest_deviation < Math.abs(element - array[index]))
                largest_deviation = Math.abs(element - array[index]);
        }
    });
    return largest_deviation;
}

console.log(diff([1, 3, 50, 100, 1000, 10000]));