const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === '') return;

  // Display user message
  appendMessage(userMessage, 'user-message');

  // Generate bot response
  const botResponse = generateResponse(userMessage);
  appendMessage(botResponse, 'bot-message');

  // Clear input
  userInput.value = '';
}

function appendMessage(message, className) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', className);
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}

function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();

  // Predefined responses
  if (message.includes('stress')) {
    return "I'm sorry you're feeling stressed. Try deep breathing exercises or taking a short walk. Would you like more tips?";
  } else if (message.includes('anxiety')) {
    return "Anxiety can be tough. Practice grounding techniques like the 5-4-3-2-1 method. Let me know if you need more help.";
  } else if (message.includes('depression')) {
    return "Depression is challenging. Reach out to a trusted friend or professional. You're not alone. How can I support you further?";
  } else if (message.includes('help')) {
    return "I'm here to help. Let me know if you're feeling stressed, anxious, or depressed, and I'll provide some strategies.";
  } else {
    return "I'm here to support you. Can you tell me more about how you're feeling?";
  }
}