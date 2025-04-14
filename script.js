const now = new Date().getTime();
const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
const countDownDate = now + sevenDaysMs;

function updateCountdown() {
  const currentTime = new Date().getTime();
  const distance = countDownDate - currentTime;

  if (distance <= 0) {
    document.getElementById('days').textContent = 0;
    document.getElementById('hours').textContent = "00";
    document.getElementById('minutes').textContent = "00";
    document.getElementById('seconds').textContent = "00";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualizamos en pantalla
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();
