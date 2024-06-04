function startCountdown(endDate) {
  const countdownElement = document.getElementById('countdown');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.innerHTML = days;
      hoursElement.innerHTML = hours;
      minutesElement.innerHTML = minutes;
      secondsElement.innerHTML = seconds;

      if (distance < 0) {
          clearInterval(interval);
          countdownElement.innerHTML = "EXPIRED";
      }
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

let endDate = localStorage.getItem('endDate');

if (!endDate) {
  endDate = new Date('2024-06-08T23:59:59').getTime();
  localStorage.setItem('endDate', endDate);
} else {
  endDate = parseInt(endDate, 10);
}

startCountdown(endDate);
