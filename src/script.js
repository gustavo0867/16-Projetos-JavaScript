let countdown;

document.getElementById('start-button').addEventListener('click', function() {
  const dateInput = document.getElementById('date-input').value;
  if (dateInput) {
    const targetDate = new Date(dateInput);
    startCountdown(targetDate);
  }
});

function startCountdown(targetDate) {
  if (countdown) {
    clearInterval(countdown); // Limpa o intervalo existente
  }

  countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('years').innerHTML = years;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }, 1000);
}
