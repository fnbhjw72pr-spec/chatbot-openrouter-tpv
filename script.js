function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if(message === "") return;

    addMessage("user", message);
    input.value = "";

    // Simulation d'une réponse "IA"
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage("bot", response);
    }, 500);
}

function addMessage(sender, text){
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fonction améliorée pour répondre à plus de phrases
function getBotResponse(message){
    message = message.toLowerCase();

    // Salutations
    if(message.includes("bonjour") || message.includes("salut")) return "Bonjour 😊 ! Comment puis-je vous aider ?";

    // OpenRouter
    if(message.includes("openrouter")) {
        return "OpenRouter est une plateforme qui permet d'utiliser plusieurs modèles d'IA via une seule API.";
    }

    // Modèles simulés
    if(message.includes("mistral")) {
        return "Le modèle Mistral est rapide et suit bien les instructions.";
    }
    if(message.includes("gpt")) {
        return "Le modèle GPT produit des réponses naturelles et créatives.";
    }
    if(message.includes("claude")) {
        return "Claude est précis et poli, parfait pour la conversation.";
    }
    if(message.includes("llama")) {
        return "LLaMA est léger et rapide pour des petites tâches.";
    }

    // Questions sur le chatbot
    if(message.includes("chatbot")) {
        return "Un chatbot est un programme qui simule une conversation avec un utilisateur.";
    }
    if(message.includes("github")) {
        return "GitHub permet d’héberger et de partager du code en ligne.";
    }
    if(message.includes("merci")) {
        return "Avec plaisir 😄";
    }

    // Si la question ne correspond à rien
    return "Désolé, je n'ai pas compris votre question. Vous pouvez demander par exemple : 'OpenRouter', 'Mistral', 'GPT', 'Claude'.";
}
