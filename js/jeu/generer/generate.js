function focus { 
    document.getElementById('champ_entree').focus(); 
}; 

function generer() { //Fonction permettant de prendre au hasard un mot dans le dictionnaire.js et d'en afficher 2 caractères
    random = Math.ceil(Math.random()*199); //On stocke le code permettant la selection aléatoire d'un mot
    var mots_aleatoire = mot[random]; //On l'applique au dictionnaire de mots
    var caractere1 = mots_aleatoire.charAt(1); //Les variables caractere1 et caractere2 servent à prendre que le deuxième et et quatrième caractère du mot aléatoire
    var caractere2 = mots_aleatoire.charAt(3);
    document.getElementById("affichage_mot1").innerHTML = caractere1; //On affiche les 2 caractères du mot à la bonne place dans le tableau 
    document.getElementById("affichage_mot3").innerHTML = caractere2;
    
    document.getElementById("affiche").innerHTML = mots_aleatoire;
  }

function validation() {
	var mots_user = document.getElementById("champ_entree").value;
	var mots_aleatoire = document.getElementById('affichage_mot').innerHTML;

		for (let i = 0; i < mots_aleatoire.length; i++) {
  			if (mots_aleatoire.charAt[i] == mots_user.charAt[i]) {
				console.log(mots_aleatoire[i]);

			} else if(mots_aleatoire[i] != mots_user[i]) {
				console.log(".");

				document.getElementById('affichage_mot').style.color='#801b0f';
			}
		}

		if (mots_aleatoire == mots_user) {
			alert("Win !");

			document.getElementById('mybutton').style.color='#3d9939';
		}
}

function machin() {
    var mots_aleatoire = document.getElementById('affichage_mot').innerHTML; 

    
}