// Créez un article ayant comme id “citation” et contenant le texte suivant :
// "La vie a beaucoup plus d’imagination que nous”. Créez un button ayant
// comme id “button”. Lorsque l’on clique sur le bouton, récupérez le contenu
// de l’élément ayant comme id “citation” et affichez le contenu dans la
// console de développement. La fonction de récupération et d’affichage doit
// se nommer “citation()”.

document.addEventListener('DOMContentLoaded', function loaded()
{
    var bouton = document.getElementById('button');
    var article = document.getElementById('citation');

    bouton.addEventListener('click', function onClickchangemeHTML(){
        var contenue = article.innerHTML;
        console.log(contenue);
    })
});
