function generer() {
    random = Math.ceil(Math.random()*199);
    var mots_aleatoire = mot[random];

    document.getElementById('affichage_mot').innerHTML = mots_aleatoire
}

/** 
function majuscule() {
	document.getElementById("champ_entree").this.value=this.value.toUpperCase();
}
**/


function validation() {
	var mots_user = document.getElementById("champ_entree").value;
	var mots_aleatoire = document.getElementById('affichage_mot').innerHTML;

		for (let i = 0; i < mots_aleatoire.length; i++) {
  			if (mots_aleatoire[i] == mots_user[i]) {
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




/** 
function choix(a,b) { //le a c'est pour this.value dans html, le b c'est le this.id dans le html
    console.log(a,b);
    
    switch(a) {
        case"Rouge": 
            console.log('couleur1');
            document.getElementById('lebouton').style.backgroundColor='#ff0000';
            break;
        case"Jaune":
            console.log('couleur2');
            document.getElementById('lebouton').style.backgroundColor='#f2ff00';
            break;
        case"Bleu":
            console.log('couleur3');
            document.getElementById('lebouton').style.backgroundColor='#1900ff';
            break;
    }
}
**/