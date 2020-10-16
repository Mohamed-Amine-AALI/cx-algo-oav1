function HowManyCamelCase(chaine) {
    var tableau = chaine.split('');
    var compteur = 0;
    tableau.forEach(char => {
        if(char.toUpperCase() == char)
            compteur++;
    });
    return compteur;
}

console.log(HowManyCamelCase("bonjourJeSuisUnPeuMalade"));