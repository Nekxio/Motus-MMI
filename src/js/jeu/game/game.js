//Un peu de musique pour se mettre dans l'ambiance Motus !
var motus_sound = new Audio();
motus_sound.src = "src/sounds/jingle_motus.mp3";
motus_sound.volume = 0.3;

function generer() { //Fonction permettant de prendre au hasard un mot dans le dictionnaire.js et d'en afficher 2 caractères
	random = Math.ceil(Math.random()*199); //On stocke le code permettant la selection aléatoire d'un mot
	var mot_aleatoire = dico[random]; //On l'applique au dictionnaire de mots
    var caractere1 = mot_aleatoire.charAt(1); //Les variables caractere1 et caractere2 servent à prendre que le deuxième et et quatrième caractère du mot aléatoire
    var caractere2 = mot_aleatoire.charAt(3);
    document.getElementById("affichage_mot1").innerHTML = caractere1; //On affiche les 2 caractères du mot à la bonne place dans le tableau 
    document.getElementById("affichage_mot3").innerHTML = caractere2;
    document.getElementById("affiche").innerHTML = mot_aleatoire;
}

function validation() {
	var mot_user = document.getElementById("champ_entree").value;
    var mot_aleatoire = document.getElementById("affiche").innerHTML;
    var points = 0;    

	for (var i = 0; i < mot_user.length; i++) {
        if(mot_user.charAt(i) === mot_aleatoire.charAt(i));
        points = points + 1;
    }
    if (points == 6) {
        alert('win');
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

/*
	var tab_mot = new Array();
	for(var i=0; i<6; i++){
		tab_mot[i] = mots_aleatoire.substr(i,1);
	}
	var longueur = 6; // A modifier si les mots du dico ne font pas 6 lettres
	var lettres_ok = new Array(tab_mot[0],'.','.','.','.','.');
	var placements = new Array(0,0,0,0,0,0); // 0 pour pas dans le mot, 1 pour bien placée, 2 pour mal placée
	var nb_coups = 0; // Nombre de coups
	var nb_coups_max=6; // Nombre de coups autorisés
	var table_html="<table id=\"motus\">";
	for (var j=0; j<=nb_coups_max; j++){
		table_html +="<tr>";
		for (var i=0; i<longueur; i++){
			table_html += "<td id="+j+"_"+i+">.</td>";
		}
		table_html += "</tr>";
	}
	table_html += "</table>";
	document.write(table_html);
	document.getElementById(0+'_'+0).innerHTML = tab_mot[0];
	document.getElementById('champ_entree').focus();


function affich_prop(lettre){
var mot_prop = document.getElementById('champ_entree').value;
var lg = mot_prop.length;
if(lg<longueur){
    document.getElementById('champ_entree').value += lettre;
}
document.getElementById('champ_entree').focus();
}

function suppr_lettre(){
var mot_prop = document.getElementById('champ_entree').value;
var lg = mot_prop.length-1;
mot_prop = mot_prop.substr(0,lg);
document.getElementById('champ_entree').value = mot_prop;
}

function verif_presence(mot){
var presence = false;
for(i=0; i<nb_mots; i++){
    if (mot == dico[i]){
        presence = true;
    }
}
return presence;

}

function compare(){			
var proposition = document.getElementById('champ_entree').value; //mot proposé
if (proposition.length != 6){
    alert("Votre mot doit faire 6 lettres.");
}
else{
    proposition = proposition.toUpperCase();
    if(!verif_presence(proposition)){
        alert("Ce mot est absent du dictionnaire.");
        document.getElementById('champ_entree').value = "";
    }
    else{
        var tab_proposition = new Array(); // tableau pour stocker les lettres proposées
        for(var k=0; k<longueur; k++){
            tab_proposition[k] = proposition.substr(k,1);
        }
        for(var i=0; i<longueur; i++){
            if(tab_mot[i] == tab_proposition[i]){ 
                lettres_ok[i]=tab_mot[i];
                placements[i] = 1;
                document.getElementById(nb_coups+'_'+i).style.backgroundColor = 'rgb(250,50,50)';	
                document.getElementById(nb_coups+'_'+i).style.color = 'rgb(0,0,0)';								
            }
        }								
        for(var i=0; i<longueur; i++){	
            if(placements[i] != 1){
                for(var j=0; j<longueur; j++){
                    if((tab_proposition[i] == tab_mot[j]) && (placements[j] == 0)){
                        placements[j] = 2;
                        document.getElementById(nb_coups+'_'+i).style.backgroundColor = 'rgb(250,250,120)';
                        j=longueur;
                    }
                }
            }
        }
        for(var i=0; i<longueur; i++){
            placements[i] = 0;
            document.getElementById(nb_coups+'_'+i).innerHTML = tab_proposition[i];
            if((nb_coups < nb_coups_max) && (mots_aleatoire != proposition)){
                document.getElementById(nb_coups+1+'_'+i).innerHTML = lettres_ok[i];
            }
        }
        
        if(mots_aleatoire == proposition){
            alert("Bravo !\nLe mot à trouver était bien "+mots_aleatoire+".");
            
        }
        else{
            if((nb_coups == nb_coups_max) && (mots_aleatoire != proposition)){
                alert("Dommage :(\nLe mot à trouver était "+mots_aleatoire+".");
                
            }
        }
        nb_coups++;
        document.getElementById('champ_entree').value = "";
        document.getElementById('champ_entree').focus();
    }
}
}*/