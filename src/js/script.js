document.getElementById("propos").focus();

var nb_mots = dico.length; // Nb mots contenus dans la table dico
var tirage = Math.floor(Math.random()*nb_mots); // Tirer aléatoirement un nombre inférieur à dico.length
var mot_a_trouver = dico[tirage]; // Stocker le mot tiré

var tab_mot = new Array();

	for(var i=0; i<8; i++) {
		tab_mot[i] = mot_a_trouver.substr(i,1);
	}
                
var longueur = 6;
var lettres_ok = new Array(tab_mot[0],'.','.','.','.','.','.');
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
	document.getElementById('propos').focus();
					
                    
//LES FONCTIONS
function affich_prop (lettre) {
                        
    var mot_prop = document.getElementById('propos').value;
    var lg = mot_prop.length;
        
    if(lg<longueur) {
		document.getElementById('propos').value += lettre;
    }
        document.getElementById('propos').focus();
}
					
function suppr_lettre() {
    
    var mot_prop = document.getElementById('propos').value;
	var lg = mot_prop.length-1;
                        
    mot_prop = mot_prop.substr(0,lg);
	document.getElementById('propos').value = mot_prop;

}
					
function verif_presence (mot) {
    
    var presence = false;
    
    for (i=0; i<nb_mots; i++) {
        
        if (mot == dico[i]) {
			presence = true;
		}
	}
    
    return presence;
						
}
                    
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
				document.getElementById(nb_coups+'_'+i).style.backgroundColor = 'rgb(112,255,107)';	
				document.getElementById(nb_coups+'_'+i).style.color = 'rgb(0,0,0)';								
            
            }		
        }								
                                
        for (var i=0; i<longueur; i++) {	
		    if(placements[i] != 1) {
                for(var j=0; j<longueur; j++){
					if ((tab_proposition[i] == tab_mot[j]) && (placements[j] == 0)) {
						placements[j] = 2;
						document.getElementById(nb_coups+'_'+i).style.backgroundColor = 'rgb(255,241,48)';
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
			alert("Bravo !\nLe mot à trouver était bien "+mot_a_trouver+".");
			location.reload(true);
		} else {
            
            if ((nb_coups == nb_coups_max) && (mot_a_trouver != proposition)) {
				alert("Dommage :(\nLe mot à trouver était "+mot_a_trouver+".");
				location.reload(true);
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