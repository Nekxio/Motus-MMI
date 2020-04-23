function generer() {
    random = Math.ceil(Math.random()*199);
    var mots_aleatoire = mot[random];

    document.getElementById('affichage_mot').innerHTML = mots_aleatoire
}

function validation() {
	let b =document.body;
	var mots_user = document.getElementById("champ_entree").value;
	var mots_aleatoire = document.getElementById('affichage_mot').innerHTML;
		for (let i = 0; i < mots_aleatoire.length; i++) {
  			if (mots_aleatoire[i].toLowerCase() == mots_user[i]) {
				console.log(mots_aleatoire[i].toLowerCase());
			} else if(mots_aleatoire[i].toLowerCase() != mots_user[i]) {
				console.log(".");
			}
		}
		if (mots_aleatoire.toLowerCase() == mots_user) {
			alert("Win !");
			}
}