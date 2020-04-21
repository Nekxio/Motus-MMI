function generer() {
    random = Math.ceil(Math.random()*199);
    var mots_aleatoire = mot[random];

    document.getElementById('affichage_mot').innerHTML = mots_aleatoire
}