function IsAPangrams(str) {
    let str_no_space = str.toLowerCase().replace(/ /g, "");
    let set = new Set(str_no_space);
    return (set.size == 26 ? true : false);
}

console.log(IsAPangrams("The quick brown fox jumpsover the lazy dog"));