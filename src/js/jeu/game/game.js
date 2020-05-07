var motus_sound = new Audio();
motus_sound.src = "src/sounds/jingle_motus.mp3";
motus_sound.volume = 0.3;

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
	var mot_user = document.getElementById("champ_entree").value;
	var mot_aleatoire = document.getElementById('affiche').value;

		for (let i = 0; i < mot_aleatoire.length; i++) {
  			if (mot_aleatoire == mot_user) {
				console.log(mot_aleatoire);

			} else if(mot_aleatoire != mot_user) {
				console.log(".");

				document.getElementById('affichage_mot').style.color='#801b0f';
			}
		}

		if (mot_aleatoire == mot_user) {
			alert("Win !");

			document.getElementById('mybutton').style.color='#3d9939';
		}
}

function ecrire() {
    var mot_user = document.getElementById("champ_entree").value;

	var res0 = mot_user.charAt(0);
	document.getElementById("affichage_mot0").style.textTransform = "uppercase";
    document.getElementById("affichage_mot0").innerHTML = res0;

	var res1 = mot_user.charAt(1);
	document.getElementById("affichage_mot1").style.textTransform = "uppercase";
    document.getElementById("affichage_mot1").innerHTML = res1;

	var res2 = mot_user.charAt(2);
	document.getElementById("affichage_mot2").style.textTransform = "uppercase";
    document.getElementById("affichage_mot2").innerHTML = res2;

	var res3 = mot_user.charAt(3);
	document.getElementById("affichage_mot3").style.textTransform = "uppercase";
    document.getElementById("affichage_mot3").innerHTML = res3;

	var res4 = mot_user.charAt(4);
	document.getElementById("affichage_mot4").style.textTransform = "uppercase";
    document.getElementById("affichage_mot4").innerHTML = res4;

	var res5 = mot_user.charAt(5);
	document.getElementById("affichage_mot5").style.textTransform = "uppercase";
    document.getElementById("affichage_mot5").innerHTML = res5;
}