'use strict';

function MaBoite()
{
let condition=false;
do 
{
    let annee =prompt("entrer une date sous forme de YYYY:")
    if((isNaN(annee) === true) || (annee.length!=4) || (annee.length<=0))
    {

    }else 
    {
        condition=true;
        Estbissextile(annee);
    }
    
}while(condition===false);
}

function Estbissextile(annee)
{
    if((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0))
    {
         document.getElementById('zonesaisie').innerHTML="<p style='color:green;'>L'année "+annee+ " : est une année bissextile </p>";
    }else 
    {
        
        document.getElementById('zonesaisie').innerHTML="<p style='color:green;'>L'année "+annee+ " : n'est pas une année bissextile </p>";
    }
}
