/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Cette fonction permet de calculer les jours entre une date de fin et une date initiale. 
 * @param {integer} jour_ini entre 1 et 31
 * @param {integer} jour_fin entre 1 et 31
 * @param {integer} mois_ini entre 1 et 12
 * @param {integer} mois_fin entre 1 et 12
 * @param {integer} an_ini entre 0000 et 9999
 * @param {integer} an_fin entre 0000 et 9999
 * @returns {integer} nombre de jours d'une date
 */
function getJours(jour_ini,jour_fin,mois_ini,mois_fin,an_ini,an_fin)
{
    var jours=0;
    var joursmois=0;
    var joursan=0;
     if(jour_fin>jour_ini)
         jours=(jour_fin-jour_ini);
    else 
        jours=(jour_ini-jour_fin);
    if(mois_fin>mois_ini)
         joursmois=(mois_fin-mois_ini)*31;
    else 
        joursmois=(mois_ini-mois_fin)*31;
    if(an_fin>an_ini)
         joursan=(an_fin-an_ini)*365;
    else 
        joursan=(an_ini-an_fin)*365;
    
    return jours+joursmois+joursan<=31?jours+joursmois+joursan:0;   
}
/**
 * Permet de faire le calcul des nuits dans une certaine plage de jours. 
 * @param {integer} jours entre 1 et 31
 * @returns {integer} nombre de nuits 
 */
function getNuits(jours)
{
    return jours-1;
}
/**
 * Permet de calculer le prix de l'hôtel en fonction du lieu où la personne souhaite séjourner
 * @param {integer} lieu Correspond à la destination d'un vol identifié par un nombre entier 
 * @param {integer} nuits nombre de nuits 
 * @returns {integer} prix de l'hôtel
 */
function getPrixHotel(lieu,nuits)
{
    return 500*lieu*nuits;
}
/**
 * Permet de calculer le prix du transport en fonction du lieu où la personne souhaite séjourner, pour chaque trajet
 * @param {integer} lieu Correspond à la destination d'un vol identifié par un nombre entier 
 * @returns {integer} prix du transport
 */
function getTransport(lieu)
{
    return 100*lieu;
}
/**
 * Permet de calculer le prix d'un billet d'avion 
 * @param {integer} classe entre 1 et 3
 * @param {integer} lieu Correspond à la destination d'un vol identifié par un nombre entier 
 * @param {integer} jours entre 1 et 31
 * @returns {integer} prix du vol
 */
function getPrixVol(classe,lieu,jours)
{
    return jours<=9? 100*classe*lieu*jours:100*classe*lieu*9;
}


/**
 * Avoir le jour d'une date
 * @param {string} id
 * @returns {integer} jour 1 -31
 */
function getJour(id)
{
     var date1=new Date(window.document.querySelector(id).value);
     return date1.getDate();
}
/**
 * Avoir le mois d'une date
 * @param {string} id
 * @returns {integer} mois entre 1-12
 */
function getMois (id)
{
     var date1=new Date(window.document.querySelector(id).value);
     return date1.getMonth()+1;
}
/**
 * Avoir l'an d'une date
 * @param {string} id
 * @returns {integer} year 0000 a 9999
 */
function getAn(id)
{
     var date1= window.document.querySelector(id).value.split("-");
     return  parseInt(date1[0]) ;
}
/**
 * Retourne un entier en fonction d'une option saisie du control de form
 * @param {string} id
 * @returns {integer} 
 */
function valuetoInt(id)
{
    var name= window.document.querySelector(id).value;
    var ret=0;
    switch(name)
    {
        case "Athénes": ret=1; break;
        case "Barcelone":ret=2; break;
        case "Capadoce":ret=3; break;
        case "Florence": ret=4; break; 
        case "Hyeres": ret=1; break;
        case "Îles Lofote": ret=6;break;
        case "Marseille":ret=2;break;
        case "Rome":ret=8; break;
        case "Nice": ret=3; break;
        case "Première classe": ret=3; break;
        case "Classe affaire": ret=2; break;
         case "Classe économique": ret=1; break;
           
    }
    return ret;
}
//Fonction principale qui sera exécutée lorsque la page sera chargée et que le bouton de réservation sera cliqué
window.addEventListener("load", function() {
window.document.querySelector("#send").addEventListener("click", function() {
           
          
          let jour_ini=getJour("#datedepart"); //Avoir le jour de la date de depart
          let mois_ini= getMois ("#datedepart");//Avoir le mois de la date de depart
          let an_ini=getAn("#datedepart");//Avoir l'an de la date de depart
          let jour_fin=getJour("#dateretour");//Avoir le jour de la date de retour
          let mois_fin=getMois ("#dateretour");//Avoir  le mois de la date de retour
          let an_fin=getAn("#dateretour");//Avoir  l'an de la date de retour
          let jours= getJours(jour_ini,jour_fin,mois_ini,mois_fin,an_ini,an_fin); //Avoir le nombre des jours total
          if(jours!==0)
          {  
              /* Il rendra la fenêtre pop-up visible */
                document.getElementById("cont").style.opacity="1";
                document.getElementById("cont").style.visibility="visible";
                /*Il rendra visible le bouton permettant de fermer la pop-up */
                document.getElementById("btn_close").style.opacity="1";
                document.getElementById("btn_close").style.visibility="visible";
                               window.document.querySelector("#jours").innerHTML = jours;//affiche le résultat des jours calculés avec la fonction getJours
                  let nuits=getNuits(jours); //calculer le nombre de nuits avec la fonction getNuits
                     window.document.querySelector("#nuits").innerHTML = nuits; //affiche le résultat des nuits calculées avec la fonction getNuits
                     /*A partir de maintenant, la même procédure est suivie les résultats sont affichés dans la fenêtre pop-up*/
                  let lieu=window.document.querySelector("#arrivees").value;
                      window.document.querySelector("#lieu").innerHTML = lieu;
                      window.document.querySelector("#arrivee").innerHTML = lieu;
                  let prixhotel =getPrixHotel(valuetoInt("#arrivees"),nuits);
                      window.document.querySelector("#prixhotel ").innerHTML =  prixhotel +" €";
                  let transport= getTransport(valuetoInt("#arrivees"));
                      window.document.querySelector("#prixtrans ").innerHTML = transport +" €";
                  let prixvol=getPrixVol(valuetoInt("#classe"),valuetoInt("#arrivees"),jours);
                  let depart=window.document.querySelector("#departs").value;
                      window.document.querySelector("#depart ").innerHTML = depart;
                      window.document.querySelector("#prixvol ").innerHTML = prixvol +" €";
                   let adultes=parseInt(window.document.querySelector("#adultes").value);
                   let enfants=parseInt(window.document.querySelector("#enfants").value);
                  var prix= prixhotel +transport+prixvol;
                        window.document.querySelector("#adulte").innerHTML = prix+" €";
                        if(enfants!==0)
                        window.document.querySelector("#enfant").innerHTML = ( prix*0.7) +" €";
                    else 
                         window.document.querySelector("#enfant").innerHTML = 0;
                        window.document.querySelector("#prixtotal").innerHTML = ( (prix*0.7*enfants)+(prix*adultes)) +" €";
                      
                        
          } else 
          {
              /*Si le format de la date est incorrect, créera un objet HTML de type h2 dans la section date pour indiquer à l'utilisateur qu'il a fait une erreur. */
              const datesform=document.getElementById("datesform");
              let newH2Item=document.createElement('h2');
              /*Contenu du message*/
              newH2Item.textContent= 'Date non valable, ne peut pas dépasser 31 jours, essayez à nouveau. ';
              datesform.appendChild(newH2Item);
    
    }
   }); 
   
});