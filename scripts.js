//Crie Um algoritmo que pegue o título, o conteúdo, guarde e depois que guardado, mostre a prévia na página principal, a prévia deve conter apenas as 6 primeiras letras do conteúdo.

function createThread(){

let titleInput   = document.getElementById("thread-title").value
let contentInput = document.getElementById("content-text").value
const post = {titleInput, contentInput}

let currentValues = JSON.parse(localStorage.getItem('posts')) || []
currentValues.push(post)

//Criar a Prévia no  index.html
localStorage.setItem('posts',JSON.stringify(currentValues));
if (titleInput == "" || contentInput == "" ){
alert("Você Não Escreveu Nada, Não Há o Que Postar")
} 

else{
//alert("Tópico Postado!")
window.open("index.html");
}
}
