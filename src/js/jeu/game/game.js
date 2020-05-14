liste = ['CHIITE','MOTEUR','BATEAU','MIKADO','ANNEXE','TOMATE','BLEUET','MANOIR','RENARD','ZOMBIE','BOUTON','MAGNUM','ABROGE','ZOOMER','BUFFET','MENTON','ABUSER','TOMBER','EMBOUT','MULOTS',
        'ACCORE','TOMBES','YOURTE','MOLLET','BATTRE','SOMBRE','TUTEUR','MODELE','CIGALE','AVENUE','MOTEUR','PEDALE','CARAFE','LEVURE','URGENT','PANINI','BUREAU','VISEUR','DURITE','PIMENT',
        'CANCER','VISUEL','RAGOUT','RICTUS','CADRER','VOLEUR','NEUTRE','RUMEUR','CAMPER','VOLUTE','DONUTS','SCOTCH','FADEUR','FLEUVE','TOUPET','RYTHME','FRAISE','CUIVRE','NOUGAT','SOMMET',
        'HARDER','VASQUE','UTOPIE','SUIVRE','COMMIS','VAGUES','MOUTON','TERRIL','PARIER','SURVIE','MOUFLE','VIVANT','RAPIDE','ABOLIR','MOULIN','SORTIE','REGGAE','ABSOLU','LOURDE','POTAGE',
        'REGATE','ALCOOL','LOUVRE','PIERRE','REGARD','ALIGOT','COUPLE','PERSIL','RATINE','BALCON','COULIS','PIGEON','RADOTE','BALLON','COULER','RAPACE','RACLER','BLASON','CONSUL','PUTSCH',
        'PAREIL','CHLORE','PILOTE','REBOND','RAFLES','GALOPS','PLUTON','ROMPRE','PAUVRE','GALION','CIPRES','SEISME','RIVAGE','VOLCAN','POSTAL','SEJOUR','ROSAGE','VALOIR','COUPLE','TITANE',
        'ROSACE','SPOLIA','FEINTE','TENACE','RETARD','SOLDAT','ZYKLON','VOLUME','SALEUR','SOCIAL','VALVES','PARLER','SABRES','SLOGAN','TAQUIN','MOUFLE','PETARD','PELOTE','SOUCHE','MAUDIT',
        'ATOMES','LARDON','SUSHIS','HOMARD','BEMOLS','LAITON','SAVEUR','ETOILE','BOHEME','LAVABO','SAPHIR','DOSAGE','COMBLE','LAVOIR','REVERS','DEFUNT','DEMONS','LAGONS','RAMEAU','DROGUE',
        'HOMMES','JOVIAL','ROTULE','ECURIE','FEMMES','GALLON','ROSEAU','EPONGE','MORALE','FLACON','RONFLE','FANION','MEULON','FLORAL','MUGUET','FAILLE','POMMES','ECOPER','MALADE','GARDER',
        'MIJOTE','FROLER','LAVAGE','TEMOIN','BOMBES','DOLLAR','GENOUX','SODIUM','CHROME','JALOUX','GIBIER','SENIOR','COMPTE','TURBAN','FLOTTE','REFLEX','MOTELS','TRIBUT','DISQUE','CENTRE'];
//DICTIONNAIRE MOTUS


//Un peu de musique pour se mettre dans l'ambiance Motus !
var motus_sound = new Audio();
motus_sound.src = "src/sounds/jingle_motus.mp3";
motus_sound.volume = 0.3;


window.onload = function generer() {                                            //Fonction permettant de choisir un mot aléatoirement dans la liste
    random = Math.ceil(Math.random()*199);                      //On stocke le code permettant la selection aléatoire d'un mot
    var mots_aleatoire = liste[random];                         //On l'applique au dictionnaire de mots
            
    var caractere1 = mots_aleatoire.charAt(1);                  //Les variables caractere1 et caractere2 servent à prendre que le deuxième et et quatrième caractère du mot aléatoire
    var caractere2 = mots_aleatoire.charAt(3);
        
    document.getElementById("affichage_mot1").innerHTML = caractere1;    //On affiche les 2 caractères du mot à la bonne place dans le tableau 
    document.getElementById("affichage_mot3").innerHTML = caractere2;
            
    document.getElementById("affiche").innerHTML = mots_aleatoire;

    var aleatoire = document.getElementById('affiche').innerHTML;

    var res = aleatoire.charAt(0);
    document.getElementById("resultat0").innerHTML = res;

    var res = aleatoire.charAt(1);
    document.getElementById("resultat1").innerHTML = res;

    var res = aleatoire.charAt(2);
    document.getElementById("resultat2").innerHTML = res;

    var res = aleatoire.charAt(3);
    document.getElementById("resultat3").innerHTML = res;

    var res = aleatoire.charAt(4);
    document.getElementById("resultat4").innerHTML = res;

    var res = aleatoire.charAt(5);
    document.getElementById("resultat5").innerHTML = res;
}


function comparer() {
    var utilisateur = document.getElementById('champ_utilisateur').value;

    var ras = utilisateur.charAt(0);
    document.getElementById("affichage_mot0").innerHTML = ras;

    var ras = utilisateur.charAt(1);
    document.getElementById("affichage_mot1").innerHTML = ras;

    var ras = utilisateur.charAt(2);
    document.getElementById("affichage_mot2").innerHTML = ras;

    var ras = utilisateur.charAt(3);
    document.getElementById("affichage_mot3").innerHTML = ras;

    var ras = utilisateur.charAt(4);
    document.getElementById("affichage_mot4").innerHTML = ras;

    var ras = utilisateur.charAt(5);
    document.getElementById("affichage_mot5").innerHTML = ras;


    if (document.getElementById('resultat0').innerHTML == document.getElementById('affichage_mot0').innerHTML) {
        document.getElementById('affichage_mot0').style.backgroundColor = "green";
    } else {
        document.getElementById('affichage_mot0').style.backgroundColor = "red";
    }

    if (document.getElementById('resultat1').innerHTML == document.getElementById('affichage_mot1').innerHTML) {
        document.getElementById('affichage_mot1').style.backgroundColor = "green";
    } else {
        document.getElementById('affichage_mot1').style.backgroundColor = "red";
    }

    if (document.getElementById('resultat2').innerHTML == document.getElementById('affichage_mot2').innerHTML) {
        document.getElementById('affichage_mot2').style.backgroundColor = "green";
    } else {
        document.getElementById('affichage_mot2').style.backgroundColor = "red";
    }

    if (document.getElementById('resultat3').innerHTML == document.getElementById('affichage_mot3').innerHTML) {
        document.getElementById('affichage_mot3').style.backgroundColor = "green";
    } else {
        document.getElementById('affichage_mot3').style.backgroundColor = "red";
    }

    if (document.getElementById('resultat4').innerHTML == document.getElementById('affichage_mot4').innerHTML) {
        document.getElementById('affichage_mot4').style.backgroundColor = "green";
    } else {
        document.getElementById('affichage_mot4').style.backgroundColor = "red";
    }

    if (document.getElementById('resultat5').innerHTML == document.getElementById('affichage_mot5').innerHTML) {
        document.getElementById('affichage_mot5').style.backgroundColor = "green";
    } else {
        document.getElementById('affichage_mot5').style.backgroundColor = "red";
    }
}