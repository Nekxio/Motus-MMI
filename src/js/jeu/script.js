//Pour éviter un clic inutile
document.getElementById("propos").focus();

//Un peu de musique pour se mettre dans l'ambiance Motus !
var motus_sound = new Audio();
motus_sound.src = "src/sounds/jingle_motus.mp3";
motus_sound.volume = 0.3;

//Pour écrire que du texte de A à Z !
function blocage(){	
    //blocage caractère code 47 à 58 + backspace
    if(( event.keyCode<65 || event.keyCode>90)&&(event.keyCode!=8)){
        event.returnValue = false;
    }
}

var nb_mots = dico.length; // Nb mots contenus dans la table dico
var tirage = Math.floor(Math.random()*nb_mots); // Tirer aléatoirement un nombre inférieur à dico.length
var mot_a_trouver = dico[tirage]; // Stocker le mot tiré

var tab_mot = new Array();

	for(var i=0; i<8; i++) {
		tab_mot[i] = mot_a_trouver.substr(i,1);
	}
                
var longueur = 6; //Nombre de caractères du mot
var lettres_ok = new Array(tab_mot[0],'.','.','.','.','.','.');
var placements = new Array(0,0,0,0,0,0);
var nb_coups = 0; // Nombre de coups
var nb_coups_max=6; // Nombre de coups autorisés
var table_html="<table id=\"motus\">"; //Génération du tableau en fonction du nombre de coups max
                    
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
	document.getElementById('propos').focus();
					
                    
//LES FONCTIONS

//Pour afficher la proposition dans le tableau
function affich_prop (lettre) {
                        
    var mot_prop = document.getElementById('propos').value;
    var lg = mot_prop.length;
        
    if(lg<longueur) {
		document.getElementById('propos').value += lettre;
    }
        document.getElementById('propos').focus();
}

//Fonction principale permettant de comparer le mot aléatoire à la proposition de l'utilisateur                    
function compare() {			
	var proposition = document.getElementById('propos').value; //mot proposé
                        
    if (proposition.length != 6){
		alert("Votre mot doit faire 6 lettres.");
	} else {
    
        var tab_proposition = new Array(); // tableau pour stocker les lettres proposées
        
        for(var k=0; k<longueur; k++) {
			tab_proposition[k] = proposition.substr(k,1);
		}
                                
        for(var i=0; i<longueur; i++) {
            if (tab_mot[i] == tab_proposition[i]) { 
				lettres_ok[i]=tab_mot[i];
				placements[i] = 1;
				document.getElementById(nb_coups+'_'+i).style.backgroundColor = 'rgb(92, 202, 40)';	
				document.getElementById(nb_coups+'_'+i).style.color = 'rgb(0,0,0)';								
            
            }		
        }								
                                
        for (var i=0; i<longueur; i++) {	
		    if(placements[i] != 1) {
                for(var j=0; j<longueur; j++){
					if ((tab_proposition[i] == tab_mot[j]) && (placements[j] == 0)) {
						placements[j] = 2;
						document.getElementById(nb_coups+'_'+i).style.backgroundColor = 'rgb(255, 234, 43)';
						j=longueur;
					}
				}
			}
		}
                                
        for (var i=0; i<longueur; i++) {
			placements[i] = 0;
			document.getElementById(nb_coups+'_'+i).innerHTML = tab_proposition[i];
                                    
            if ((nb_coups < nb_coups_max) && (mot_a_trouver != proposition)) {
				document.getElementById(nb_coups+1+'_'+i).innerHTML = lettres_ok[i];
			}
		}
								
		if (mot_a_trouver == proposition) {
			swal ( "C'est gagné !" ,  "Vous avez trouvé le bon mot ! ", "success" )
			setTimeout(function(){ location.reload(true); }, 5500);

		} else {
            
            if ((nb_coups == nb_coups_max) && (mot_a_trouver != proposition)) {
				swal ( "Oops" ,  "Vous n'avez pas trouvé le bon mot ! "+mot_a_trouver, "error" )
				setTimeout(function(){ location.reload(true); }, 5500);
			}
		}
        
        nb_coups++;
		document.getElementById('propos').value = "";
		document.getElementById('propos').focus();
	}
}


function majuscule(propos) {
    let temp = propos.toUpperCase();
    document.getElementById("propos").value = temp;
}