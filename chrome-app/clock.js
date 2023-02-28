const $clock = document.querySelector('#clock');

function getClock() {
  const clock = new Date();
  const clockHour = String(clock.getHours());
  const clockMinute = String(clock.getMinutes());
  const clockSeconds = String(clock.getSeconds());

  $clock.textContent = `${clockHour}:${clockMinute}:${clockSeconds}`;
}

getClock();

setInterval(getClock, 1000);
