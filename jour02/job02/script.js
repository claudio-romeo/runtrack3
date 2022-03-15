'use strict';

var bouton = document.querySelector('button');
var article = document.querySelector('citation');

bouton.addEventListener('click', () =>{
    if(article.style.display === 'none'){
        article.style.display = 'block';

    }else {
        article.style.display === 'none';
    }
    document.querySelector('button').onclick = showhide();
})