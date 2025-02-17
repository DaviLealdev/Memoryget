document.addEventListener("DOMContentLoaded", function() {
    loadTopics();
    updateStatsDisplay();
    document.getElementById("search-bar").addEventListener("input", filterTopics);
});

function loadTopics() {
    const topicList = document.getElementById("topic-list");
    topicList.innerHTML = "";
    
    let topics = JSON.parse(localStorage.getItem("topics")) || [];
    
    topics.forEach((topic, index) => {
        const topicElement = document.createElement("div");
        topicElement.classList.add("topic");
        topicElement.setAttribute("data-title", topic.title.toLowerCase());
        
        topicElement.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.content.substring(0, 100)}...</p>
            <p class="tags">Tags: ${topic.tags.join(", ")}</p>
            <p class="date">Criado em: ${topic.date}</p>
            <button onclick="viewTopic(${index})">Ver mais</button>
            <button onclick="editTopic(${index})">Editar</button>
            <button onclick="deleteTopic(${index})">Excluir</button>
        `;
        
        topicList.appendChild(topicElement);
    });

    document.getElementById("topic-count").textContent = topics.length;
}

function filterTopics() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const topics = document.querySelectorAll(".topic");

    topics.forEach(topic => {
        const title = topic.querySelector("h3").textContent.toLowerCase();
        topic.style.display = title.includes(searchTerm) ? "block" : "none";
    });
}

// Adiciona o evento de input para chamar a função automaticamente enquanto digita
document.getElementById("search-input").addEventListener("input", filterTopics);

function viewTopic(index) {
    localStorage.setItem("currentTopic", index);
    window.location.href = "view.html";
}

function deleteTopic(index) {
    let topics = JSON.parse(localStorage.getItem("topics")) || [];
    topics.splice(index, 1);
    localStorage.setItem("topics", JSON.stringify(topics));
    loadTopics();
    updateStatsDisplay();
}

function editTopic(index) {
    let topics = JSON.parse(localStorage.getItem("topics")) || [];
    let topic = topics[index];
    
    const newTitle = prompt("Edite o título:", topic.title);
    const newContent = prompt("Edite o conteúdo:", topic.content);
    const newTags = prompt("Edite as tags (separadas por vírgula):", topic.tags.join(", "));
    
    if (newTitle && newContent) {
        topic.title = newTitle;
        topic.content = newContent;
        topic.tags = newTags.split(",").map(tag => tag.trim().toLowerCase());
        topics[index] = topic;
        localStorage.setItem("topics", JSON.stringify(topics));
        loadTopics();
        updateStatsDisplay();
    }
}

function updateStatsDisplay() {
    let stats = {
        python: 0,
        javascript: 0,
        "c/c++": 0,
        java: 0,
        other: 0
    };
    let topics = JSON.parse(localStorage.getItem("topics")) || [];
    
    topics.forEach(topic => {
        topic.tags.forEach(tag => {
            let normalizedTag = tag.toLowerCase();
            if (stats.hasOwnProperty(normalizedTag)) {
                stats[normalizedTag]++;
            } else {
                stats.other++;
            }
        });
    });
    
    document.getElementById("python-count").textContent = stats.python;
    document.getElementById("js-count").textContent = stats.javascript;
    document.getElementById("cpp-count").textContent = stats["c/c++"];
    document.getElementById("java-count").textContent = stats.java;
    document.getElementById("other-lang-count").textContent = stats.other;
}

document.addEventListener("DOMContentLoaded", function () {
    loadTopics();
    updateStatsDisplay();
    checkDarkMode();
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Salvar o estado no localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

function checkDarkMode() {
    // Verificar no localStorage se o modo escuro está ativado
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
}

// Adicionar o evento ao botão
document.getElementById("theme-toggle").addEventListener("click", toggleDarkMode);
