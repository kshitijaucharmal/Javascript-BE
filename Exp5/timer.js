let countdownInterval;

// set default value to current date/time
window.onload = function () {
  let now = new Date();
  let local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);
  document.getElementById("endtime").value = local;
};

function startCountdown() {
  clearInterval(countdownInterval); // reset if already running

  let endTimeInput = document.getElementById("endtime").value;
  if (!endTimeInput) {
    alert("Please select a valid end date and time!");
    return;
  }

  let countDownDate = new Date(endTimeInput).getTime();

  countdownInterval = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "EXPIRED";
      return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }, 1000);
}
