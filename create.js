document.getElementById("topic-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegar os valores do formulário
    const title = document.getElementById("title").value;
    const tags = document.getElementById("tags").value.split(",").map(tag => tag.trim());
    const content = document.getElementById("content").value;
    const date = new Date().toLocaleDateString();

    // Criar um objeto de tópico
    const topic = { title, tags, content, date };

    // Recuperar tópicos existentes do localStorage
    let topics = JSON.parse(localStorage.getItem("topics")) || [];
    topics.push(topic);

    // Salvar no localStorage
    localStorage.setItem("topics", JSON.stringify(topics));

    // Redirecionar para a página inicial
    window.location.href = "index.html";
});
