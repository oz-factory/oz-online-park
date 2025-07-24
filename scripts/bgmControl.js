// 배경음악 토글 함수
function toggleBGM() {
  const bgm = document.getElementById("bgm");
  const btn = document.querySelector(".bgm-toggle");

  if (bgm.paused) {
    bgm.play();
    btn.textContent = "🎵 음악 끄기";
    localStorage.setItem("bgmMuted", "false");
  } else {
    bgm.pause();
    btn.textContent = "🎵 음악 켜기";
    localStorage.setItem("bgmMuted", "true");
  }
}

// 로딩 후 자동 재생 시도 및 상태 복원
window.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const btn = document.querySelector(".bgm-toggle");
  const isMuted = localStorage.getItem("bgmMuted") === "true";

  // 자동재생 시도 (브라우저 정책 대응: 첫 클릭 후 재생)
  document.addEventListener(
    "click",
    () => {
      if (!isMuted && bgm.paused) {
        bgm.volume = 0.5;
        bgm.play().catch((err) => {
          console.warn("자동 재생 차단됨:", err);
        });
      }
    },
    { once: true }
  );

  // 버튼 텍스트 초기화
  if (isMuted) {
    btn.textContent = "🎵 음악 켜기";
  } else {
    btn.textContent = "🎵 음악 끄기";
  }
});