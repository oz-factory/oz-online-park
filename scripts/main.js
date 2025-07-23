// 현재 시간 업데이트 함수 (사용처 확장 가능)
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleString("ko-KR");
  // 향후 날짜 표시용 요소에 삽입 가능
}

// 페이지 로드 시 인사말 텍스트 삽입
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
    blossomText.textContent = `${greeting}! 탑골공원에 오신 것을 환영합니다 😊`;
  }

  // ✅ 배경음 자동 재생
  const bgm = document.getElementById("bgm");
  const playPromise = bgm.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.log("자동 재생 차단됨: 사용자 상호작용 필요", error);
    });
  }
};

// ✅ 음악 켜기/끄기 토글 함수
function toggleBGM() {
  const bgm = document.getElementById("bgm");
  const btn = document.querySelector(".bgm-toggle");

  if (bgm.paused) {
    bgm.play();
    btn.textContent = "🎵 음악 끄기";
  } else {
    bgm.pause();
    btn.textContent = "🎵 음악 켜기";
  }
}

// 바로가기 버튼 경고창 예시 (더 정교한 라우팅으로 확장 가능)
function showAlert(msg) {
  alert(msg);
}
window.addEventListener("DOMContentLoaded", function () {
  const bgm = document.getElementById("bgm");

  function playBGM() {
    if (bgm.paused) {
      bgm.volume = 0.5; // 원하는 음량 조절 (0 ~ 1)
      bgm.play().catch((err) => {
        console.warn("BGM 재생 실패:", err);
      });
    }
    document.removeEventListener("click", playBGM);
  }

  // 사용자 첫 클릭 이후에 BGM 시작
  document.addEventListener("click", playBGM);
});
function toggleBGM() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
}
