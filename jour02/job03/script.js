'use strict';

// <!-- Créez un button ayant comme id “button”. Créez une balise <p> ayant
// comme id “compteur” et contenant “0”. Ce contenu doit évoluer
// proportionnellement au nombre d'événements click reçu par le bouton.
// Vous ne devez pas utiliser “onclick()” dans votre html. La fonction -->
// <!-- permettant d’effectuer la modification doit s'appeler “addone()”. -->


document.addEventListener('DOMContentLoaded', function loaded()
{
    var button = document.getElementById('button')
    var counteur = document.getElementById('compteur')

        function addone()
        {
            var click = counteur.innerHTML
            click++
            counteur.innerHTML = click
        }
        button.addEventListener('click' , addone)
        
})

