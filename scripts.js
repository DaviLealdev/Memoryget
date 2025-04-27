//Crie Um algoritmo que pegue o título, o conteúdo, guarde e depois que guardado, mostre a prévia na página principal, a prévia deve conter apenas as 6 primeiras letras do conteúdo.

let homeBody = document.getElementById("home")
let createBody =document.getElementById("create")






function createThread(){
let title   = document.getElementById("thread-title").value
let content = document.getElementById("content-area").value
let topSect = document.getElementById("topics-section")

//Criar a Prévia no  index.html
localStorage.setItem('tituloDoPost', title)

/*
`<br>
      <div id="topic">

          <h2 id="topic-title">${title}</h2>
          <h5 id="topic-prev"${content}</h5>

          <button type="button" class="btn btn-warning">Ver Tudo</button>

          <button type="button" class="btn btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
          </button> 

          <button type="button" class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
      </div>
  <br>
  `

  */
}