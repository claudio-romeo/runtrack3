'use strict';

// <!-- Créez un button ayant comme id “button”. Créez une balise <p> ayant
// comme id “compteur” et contenant “0”. Ce contenu doit évoluer
// proportionnellement au nombre d'événements click reçu par le bouton.
// Vous ne devez pas utiliser “onclick()” dans votre html. La fonction -->
// <!-- permettant d’effectuer la modification doit s'appeler “addone()”. -->


document.addEventListener('DOMContentloaded', function loaded()
{
    var button = document.getElementById('button')
    var p = document.getElementById('compteur')

        function addone()
        {
            var click = p.innerHTML
            click++
            p.innerHTML = click
        }
        button.addEventListener('click' , addone)
        
})

