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
/** * Fonction qui retourne un entier depuis une valeur prise dans le DOM * * 
 * @param {String} id * @return {integer} 
 * */

function recupValeur(id) 
{ 
    return parseInt(window.document.querySelector(id).value);
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
 * Retourne un entier en fonction d'une option saisie
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
        case " Florence": ret=4; break; 
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

window.addEventListener("load", function() {
window.document.querySelector("#send").addEventListener("click", function() {
           
           document.getElementbyId("containall").style.opacity="1";
           document.getElementbyId("containall").style.display="block";
           document.getElementbyId("btn_close").style.opacity="1";
           document.getElementbyId("btn_close").style.display="block";
   }); 
   
});