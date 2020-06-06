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
    return 100*classe*lieu*jours;
}
