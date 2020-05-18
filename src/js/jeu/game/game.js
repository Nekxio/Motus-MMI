//focus sur le champ texte pour éviter un clic inutile !
document.getElementById('mot_user').focus();

//Un peu de musique pour se mettre dans l'ambiance Motus !
var motus_sound = new Audio();
motus_sound.src = "src/sounds/jingle_motus.mp3";
motus_sound.volume = 0.3;

//Pour écrire que du texte de A à Z !
function blocage(){	
    //blocage caractère code 47 à 58 +backspace
    if(( event.keyCode<65 || event.keyCode>90)&&(event.keyCode!=8)){
        event.returnValue = false;
    }
}

//DICTIONNAIRE MOTUS
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


window.onload = function generer() {                                            //Fonction permettant de choisir un mot aléatoirement dans la liste
    random = Math.ceil(Math.random()*199);                      //On stocke le code permettant la selection aléatoire d'un mot
    var mots_aleatoire = liste[random];                         //On l'applique au dictionnaire de mots
            
    var caractere1 = mots_aleatoire.charAt(1);                  //Les variables caractere1 et caractere2 servent à prendre que le deuxième et et quatrième caractère du mot aléatoire
    var caractere2 = mots_aleatoire.charAt(3);
        
    document.getElementById("l1_c2").innerHTML = caractere1;    //On affiche les 2 caractères du mot à la bonne place dans le tableau 
    document.getElementById("l1_c4").innerHTML = caractere2;
            
    document.getElementById("mot_genere").innerHTML = mots_aleatoire;


    var aleatoire = document.getElementById('mot_genere').innerHTML;

    var res = aleatoire.charAt(0);
    document.getElementById("l0_c1").innerHTML = res;

    var res = aleatoire.charAt(1);
    document.getElementById("l0_c2").innerHTML = res;

    var res = aleatoire.charAt(2);
    document.getElementById("l0_c3").innerHTML = res;

    var res = aleatoire.charAt(3);
    document.getElementById("l0_c4").innerHTML = res;

    var res = aleatoire.charAt(4);
    document.getElementById("l0_c5").innerHTML = res;

    var res = aleatoire.charAt(5);
    document.getElementById("l0_c6").innerHTML = res;
}


function comparer() {
    var utilisateur = document.getElementById('mot_user').value;

    var ras = utilisateur.charAt(0);
    document.getElementById("l1_c1").innerHTML = ras;

    var ras = utilisateur.charAt(1);
    document.getElementById("l1_c2").innerHTML = ras;

    var ras = utilisateur.charAt(2);
    document.getElementById("l1_c3").innerHTML = ras;

    var ras = utilisateur.charAt(3);
    document.getElementById("l1_c4").innerHTML = ras;

    var ras = utilisateur.charAt(4);
    document.getElementById("l1_c5").innerHTML = ras;

    var ras = utilisateur.charAt(5);
    document.getElementById("l1_c6").innerHTML = ras;


    if (document.getElementById('l0_c1').innerHTML == document.getElementById('l1_c1').innerHTML) {
        document.getElementById('l1_c1').style.backgroundColor = "rgb(92, 202, 40)";
        document.getElementById('l1_c1').style.color = "white";
    } else {
        document.getElementById('l1_c1').style.backgroundColor = "rgb(252, 50, 50)";
        document.getElementById('l1_c1').style.color = "white";
    }

    if (document.getElementById('l0_c2').innerHTML == document.getElementById('l1_c2').innerHTML) {
        document.getElementById('l1_c2').style.backgroundColor = "rgb(92, 202, 40)";
        document.getElementById('l1_c2').style.color = "white";
    } else {
        document.getElementById('l1_c2').style.backgroundColor = "rgb(252, 50, 50)";
        document.getElementById('l1_c2').style.color = "white";
    }

    if (document.getElementById('l0_c3').innerHTML == document.getElementById('l1_c3').innerHTML) {
        document.getElementById('l1_c3').style.backgroundColor = "rgb(92, 202, 40)";
        document.getElementById('l1_c3').style.color = "white";
    } else {
        document.getElementById('l1_c3').style.backgroundColor = "rgb(252, 50, 50)";
        document.getElementById('l1_c3').style.color = "white";
    }

    if (document.getElementById('l0_c4').innerHTML == document.getElementById('l1_c4').innerHTML) {
        document.getElementById('l1_c4').style.backgroundColor = "rgb(92, 202, 40)";
        document.getElementById('l1_c4').style.color = "white";
    } else {
        document.getElementById('l1_c4').style.backgroundColor = "rgb(252, 50, 50)";
        document.getElementById('l1_c4').style.color = "white";
    }

    if (document.getElementById('l0_c5').innerHTML == document.getElementById('l1_c5').innerHTML) {
        document.getElementById('l1_c5').style.backgroundColor = "rgb(92, 202, 40)";
        document.getElementById('l1_c5').style.color = "white";
    } else {
        document.getElementById('l1_c5').style.backgroundColor = "rgb(252, 50, 50)";
        document.getElementById('l1_c5').style.color = "white";
    }

    if (document.getElementById('l0_c6').innerHTML == document.getElementById('l1_c6').innerHTML) {
        document.getElementById('l1_c6').style.backgroundColor = "rgb(92, 202, 40)";
        document.getElementById('l1_c6').style.color = "white";
    } else {
        document.getElementById('l1_c6').style.backgroundColor = "rgb(252, 50, 50)";
        document.getElementById('l1_c6').style.color = "white";
    }


    if((document.getElementById('l0_c1').innerHTML == document.getElementById('l1_c1').innerHTML) && (document.getElementById('l0_c2').innerHTML == document.getElementById('l1_c2').innerHTML) && (document.getElementById('l0_c3').innerHTML == document.getElementById('l1_c3').innerHTML) && (document.getElementById('l0_c4').innerHTML == document.getElementById('l1_c4').innerHTML) && (document.getElementById('l0_c5').innerHTML == document.getElementById('l1_c5').innerHTML) && (document.getElementById('l0_c6').innerHTML == document.getElementById('l1_c6').innerHTML)){
        swal("C'est gagné !", "Vous avez trouvé le mot !", "success");
    }else{
        swal ( "Oops" ,  "Vous n'avez pas trouvé le bon mot !" ,  "error" )
    }
}