function IsAPangrams(str) {
    var tab = str.toLowerCase().replace(/ /g, "").split('');
    var set = new Set(tab);
    return (set.size == 26 ? true : false);
}

console.log(IsAPangrams("The quick brown fox jumpsover the lazy dog"));