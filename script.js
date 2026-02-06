function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;

    addMessage("user", message);
    input.value = "";

    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage("bot", response);
    }, 600);
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("bonjour") || message.includes("salut")) {
        return "Bonjour 😊 Comment puis-je vous aider ?";
    }
    if (message.includes("openrouter")) {
        return "OpenRouter est une plateforme qui permet d’utiliser plusieurs modèles d’intelligence artificielle via une seule API.";
    }
    if (message.includes("chatbot")) {
        return "Un chatbot est un programme capable de dialoguer avec un utilisateur de manière automatique.";
    }
    if (message.includes("github")) {
        return "GitHub est une plateforme qui permet d’héberger et partager du code.";
    }
    if (message.includes("merci")) {
        return "Avec plaisir 😄";
    }

    return "Je suis désolé, je n’ai pas compris votre question.";
}
