//Crie Um algoritmo que pegue o título, o conteúdo, guarde e depois que guardado, mostre a prévia na página principal, a prévia deve conter apenas as 6 primeiras letras do conteúdo.
function createThread(){

let titleInput   = document.getElementById("thread-title").value
let contentInput = document.getElementById("content-text").value

alert("Tópico Postado")
//Criar a Prévia no  index.html
localStorage.setItem('tituloDoPost', titleInput)
localStorage.setItem('conteudoPost', contentInput)

window.open("index.html", "_blank");
}