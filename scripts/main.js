// 현재 시간 업데이트 함수
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleString("ko-KR");
  // 향후 날짜 표시용 요소에 삽입 가능
}

// ✅ 음악 버튼 상태 반영 함수
function updateBGMButton(isPlaying) {
  const btn = document.querySelector(".bgm-toggle");
  if (btn) {
    btn.textContent = isPlaying ? "🎵 음악 끄기" : "🎵 음악 켜기";
  }
}

// ✅ BGM 토글 함수
function toggleBGM() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) {
    bgm.play();
    localStorage.setItem("bgmState", "on");
    updateBGMButton(true);
  } else {
    bgm.pause();
    localStorage.setItem("bgmState", "off");
    updateBGMButton(false);
  }
}

// ✅ 인사말 + 자동 재생 시도
window.onload = function () {
  const hour = new Date().getHours();
  let greeting = "안녕하세요";

  if (hour < 12) {
    greeting = "좋은 아침입니다";
  } else if (hour < 18) {
    greeting = "점심 식사는 맛있게 하셨나요";
  } else {
    greeting = "편안한 저녁 되세요";
  }

  const entryScreen = document.getElementById("entry-screen");
  const blossomText = entryScreen.querySelector(".blossom-text");

  if (blossomText) {
    blossomText.textContent = `${greeting}! 탑골톡에 오신 것을 환영합니다 😊`;
  }

  const bgm = document.getElementById("bgm");
  bgm.volume = 0.5;

  const savedState = localStorage.getItem("bgmState");

  if (savedState === "off") {
    bgm.pause();
    updateBGMButton(false);
  } else {
    const playPromise = bgm.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateBGMButton(true);
          localStorage.setItem("bgmState", "on");
        })
        .catch((error) => {
          console.log("자동 재생 차단됨. 사용자 상호작용 필요", error);
        });
    }
  }
};

// ✅ 사용자 첫 클릭으로 재생 보장 (브라우저 자동재생 제한 대응)
window.addEventListener("DOMContentLoaded", function () {
  const bgm = document.getElementById("bgm");

  function playBGMOnce() {
    const savedState = localStorage.getItem("bgmState");
    if (savedState !== "off" && bgm.paused) {
      bgm.volume = 0.5;
      bgm
        .play()
        .then(() => updateBGMButton(true))
        .catch((err) => console.warn("BGM 재생 실패:", err));
    }
    document.removeEventListener("click", playBGMOnce);
  }

  document.addEventListener("click", playBGMOnce);
});
function speakSelected() {
  const selectedText = window.getSelection().toString();
  if (selectedText.trim() === "") {
    alert("읽을 텍스트를 먼저 선택해주세요.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(selectedText);
  utterance.lang = "ko-KR";
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}
