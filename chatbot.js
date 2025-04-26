// Get elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Predefined responses from the bot
const botResponses = {
  "hi": "Hello! How can I assist you today? 😊",
  "hey": "Hey! How's it going? 😊",
  "very well": "That's awesome! 😄 What's on your mind today?",
  "good": "That's awesome! 😄 What's on your mind today?",
  "hii": "Hello! How Can I help you",
  "did you know your birthday": "Yeah, My birthday is on 23rd November",
  "did you know your birth date": "Yeah, My birthday is on 23rd November",
  "hello": "Hey there! How can I help you?",
  "how are you": "I'm doing great, thank you for asking ❤️!",
  "bye": "Goodbye! Have a great day!",
  "what's your name": "My name is Saisha, I'm your AI assistant, here to help you!",
  "what is your name": "My name is Saisha, I'm your AI assistant, here to help you!",
  "who made you": "Samir Dhanegave, He maded me",
  "what can you do": "I can help you with a wide range of tasks",
  "help": "Sure! What do you need assistance with?",
  "who is samir dhanegave": "Samir Dhanegave is my creator and a Student of BCA",
};

// Function to add a new message to the chat
function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender, "fade-in");
  messageElement.innerHTML = `<p>${message}</p>`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle the user's message
function handleUserMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  addMessage("user-message", userMessage);
  userInput.value = "";

  // Bot's response logic
  const botMessage = botResponses[userMessage.toLowerCase()] || "I'm sorry, I didn't understand that. Can you rephrase?";
  setTimeout(() => addMessage("bot-message", botMessage), 1000);
}

// Event listener for the "Send" button
sendButton.addEventListener("click", handleUserMessage);

// Optional: Allow pressing "Enter" to send the message
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleUserMessage();
  }
});
