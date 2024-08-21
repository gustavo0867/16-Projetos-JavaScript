const targetDate = new Date('2024-09-07T00:00:00');

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const years = Math.floor(days / 365); // Calcula os anos
  const remainingDays = days % 365; // Dias restantes após considerar os anos

  document.getElementById("years").innerText = years;
  document.getElementById("days").innerText = remainingDays;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("time").innerText = `Para: ${targetDate.toLocaleString()}`;
}


const interval = setInterval(updateCountdown, 1000);