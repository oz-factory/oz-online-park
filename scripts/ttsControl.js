let currentUtterance = null;

function toggleSpeech(button) {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    button.textContent = "📢 읽어주기";
    return;
  }

  const post = button.closest(".post-item");
  const title = post.querySelector(".post-title").innerText;
  const preview = post.querySelector(".post-preview").innerText;
  const text = `${title}. ${preview}`;

  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = "ko-KR";
  currentUtterance.pitch = 1;
  currentUtterance.rate = 1;

  speechSynthesis.speak(currentUtterance);
  button.textContent = "⏹️ 머지기";

  currentUtterance.onend = () => {
    button.textContent = "📢 읽어주기";
  };
}

function speakSelected() {
  const selectedText = window.getSelection().toString();
  if (selectedText.trim() === "") {
    alert("읽을 텍스트를 먼저 선택해주세요.");
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(selectedText);
  utterance.lang = "ko-KR";
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}
