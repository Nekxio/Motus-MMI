function focus { 
    document.getElementById('champ_entree').focus(); 
}; 

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


function machin() {
    var mots_aleatoire = document.getElementById('affichage_mot').innerHTML; 

    
}