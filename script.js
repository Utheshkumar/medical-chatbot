const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", `👤 ${message}`);
  userInput.value = "";
  setTimeout(() => botReply(message.toLowerCase()), 600);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(msg) {
  let reply = getTraditionalAdvice(msg);
  appendMessage("bot", `🤖 ${reply}`);
}

function getTraditionalAdvice(message) {
  message = message.toLowerCase().trim();

  // Greetings handling
  const greetings = ["hi", "hello", "hey", "hai", "good morning", "good evening"];
  if (greetings.includes(message)) {
    return "Hello! 👋 I’m your traditional health buddy. Ask me about symptoms and I’ll suggest natural care based on Siddha, Unani, or Ayurvedic systems 🌿";
  }

  if (message.includes("fever")) {
    return "Mild fever? Try Nilavembu Kudineer, a powerful Siddha herbal drink. Also take rest and drink warm fluids often 🌡️🌿";
  } else if (message.includes("cold") || message.includes("runny nose")) {
    return "For a cold or runny nose, Tulsi tea with honey and steam inhalation works great. Use natural oils like eucalyptus 🌿💧";
  } else if (message.includes("cough")) {
    return "A dry or wet cough can ease with a warm mix of ginger and honey. Traditional tip: Try pepper + turmeric in hot water 🌶️🫖";
  } else if (message.includes("headache")) {
    return "For headaches, apply sandalwood paste or use Brahmi oil. Try to stay relaxed and hydrated 🧘‍♂️💆‍♀️";
  } else if (message.includes("stomach") || message.includes("pain")) {
    return "Warm jeera water or hing buttermilk is great for stomach pain. Traditional systems always go natural for digestion support 🍵🧂";
  } else if (message.includes("acidity") || message.includes("gas")) {
    return "Cold milk, fennel seeds, or ajwain water after meals are perfect to reduce acidity or bloating in natural medicine 🌿🥛";
  } else if (message.includes("sore throat")) {
    return "Gargle salt water, and drink turmeric milk or warm honey tea. Works like a charm and keeps the throat calm 🎤💛";
  } else if (message.includes("diarrhea")) {
    return "Nutmeg in warm water or pomegranate peel decoction are known natural remedies. Stay hydrated with coconut water 🥥🚰";
  } else if (message.includes("tired") || message.includes("weak")) {
    return "Try dry ginger coffee (Sukku coffee) or herbal tonic like Ashwagandha. Stay nourished and rest well 💪☕";
  } else if (message.includes("stress") || message.includes("anxiety")) {
    return "Brahmi tea or meditation with tulsi aroma can calm your mind. Nature has solutions for mental peace too 🧘‍♀️🪔";
  } else if (message.includes("bye") || message.includes("thank")) {
    return "You're most welcome! Stay healthy with natural care 🌿😊 Come back anytime for more traditional tips.";
  }

  // Default fallback
  return "Hmm... I didn’t catch that fully. Can you describe your symptoms more clearly? Try things like: 'I have a cold' or 'my stomach hurts'.";
}