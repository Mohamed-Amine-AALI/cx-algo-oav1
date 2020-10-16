function marsos(string) {
    var compteur = 0;
    var tableau = string.split('');
    for (let index = 0; index < tableau.length; index = index+3) {
        var str = tableau[index] + tableau[index+1] + tableau[index+2];
        if (str != "SOS")
            compteur++;
    }
    return compteur;
}

console.log(marsos("SOFSOSSISSOW"));