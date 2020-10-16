function HowManyCamelCase(chaine) {
    let compteur = 0;
    chaine.forEach(char => {
        if(char.toUpperCase() == char)
            compteur++;
    });
    return compteur;
}

console.log(HowManyCamelCase("bonjourJeSuisUnPeuMalade"));