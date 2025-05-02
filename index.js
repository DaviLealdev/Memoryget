let posts = JSON.parse(localStorage.getItem('posts'))

window.onload = function(){
for(let i = 0; i < posts.length; i++ ){
        const post = posts[i]
        var main = document.getElementById('topicos');
        let topic =  document.createElement("div")
        let aviso = document.getElementById("aviso")
        topic.innerHTML = `  
              <div id="topic">
        
                  <h2 id="topic-title">${post.titleInput}</h2>
                  <h5 id="topic-prev">${post.contentInput.slice(0, 20)}.....</h5>
        
                  <button type="button" class="btn btn-warning" onclick="abrirTopico()">Ver Tudo</button>
        
                  <button onclick="deletarPost('${post.titleInput}')" type="button" class="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                  
              </div>
          <br>`
          let count = document.getElementById("topics-counter")
          count.innerText = posts.length
        
        let adicionaTopico = main.appendChild(topic)

        if(posts.length > 0){
          aviso.style.display = 'none'
        }
        }}
        
function abrirTopico(){
  window.open("view.html")
}

function deletarPost(title){
    const filtered = posts.filter(x => x.titleInput != title)
    localStorage.setItem("posts", JSON.stringify(filtered))
    location.reload()
}

function pesquisar(){
  let input = document.getElementById("searchbar").value
  input = input.toLowerCase()
  
}