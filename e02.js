function IsAPangrams(string) {
    var tableau = string.replace(/ /g, "").split('');
    var set = new Set();
    tableau.forEach(char => {
        set.add(char.toLowerCase());
    });
    if (set.size == 26)
        return true;
    return false;
}

console.log(IsAPangrams("The quick brown fox jumpsover the laz dog"))