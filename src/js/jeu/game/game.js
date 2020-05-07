function playsound(sound) {
	if (playsound_enabled == true) {
		switch (sound) {
			case "letter_ok":
				$.playSound("src/sounds/lettre_ok.mp3");
				break;
			case "letter_bad":
				$.playSound("src/sounds/lettre_mauvaise.mp3");
				break;
			case "letter_missing":
				$.playSound("src/sounds/lettre_absente.mp3");
				break;
			case "error":
				$.playSound("src/sounds/lettre_absente.mp3");
				break;
			case "letter_bonus":
				$.playSound("src/sounds/lettre_bonus.mp3");
				break;
			case "wrong":
				$.playSound("src/sounds/erreur.mp3");
				break;
			case "victory":
				$.playSound("src/sounds/victory.mp3");
				break;
			case "temps_ecoule":
				$.playSound("src/sounds/temps_ecoule.mp3");
				break;
			case "loose":
				$.playSound("src/sounds/loose.mp3");
				break;
			case "grille_creation":
				$.playSound("src/sounds/grille_creation.mp3");
				break;
			case "grille_numero":
				$.playSound("src/sounds/grille_numero.mp3");
				break;
			case "grille_boule_noire":
				$.playSound("src/sounds/grille_boule_noire.mp3");
				break;
			case "grille_numero_tire":
				$.playSound("src/sounds/grille_numero_tire.mp3");
				break;
			case "motus":
				$.playSound("src/sounds/motus.mp3");
				break;
			case "boule_magique":
				$.playSound("src/sounds/boule_magique.mp3");
				break;
			case "jingle":
				$.playSound("src/sounds/jingle_motus.mp3");
				break;
			default:
				break;
		}
	}
}


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