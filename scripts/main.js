// scripts/main.js

// 현재 시간 업데이트 함수 (사용처 확장 가능)
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleString("ko-KR");
  // 향후 날짜 표시용 요소에 삽입 가능
}

// 페이지 로드 시 인사말 알림
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

  setTimeout(() => {
    alert(greeting + "! 탑골공원에 오신 것을 환영합니다 😊");
  }, 1000);
};

// 바로가기 버튼 경고창 예시 (더 정교한 라우팅으로 확장 가능)
function showAlert(msg) {
  alert(msg);
}
