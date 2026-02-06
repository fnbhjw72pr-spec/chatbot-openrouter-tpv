function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value;
    if (message === "") return;

    addMessage("user", message);
    input.value = "";

    let response = getBotResponse(message);
    setTimeout(() => {
        addMessage("bot", response);
    }, 500);
}

function addMessage(sender, text) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("bonjour")) {
        return "Bonjour 😊 Comment puis-je vous aider ?";
    }
    if (message.includes("openrouter")) {
        return "OpenRouter est une plateforme qui permet d’accéder à plusieurs modèles d’IA via une seule API.";
    }
    if (message.includes("chatbot")) {
        return "Un chatbot est un programme qui simule une conversation avec un utilisateur.";
    }
    if (message.includes("merci")) {
        return "Avec plaisir 😄";
    }

    return "Désolé, je n’ai pas compris votre question.";
}

