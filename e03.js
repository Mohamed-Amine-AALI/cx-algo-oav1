function marsos(str) {

    let sosCompteur = str.length / 3;
    let correct_str = "SOS".repeat(sosCompteur);
    let diff = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] != correct_str[i])
            diff++;
    }

    return diff;
}

console.log(marsos("SCFSOSSISSOW"));