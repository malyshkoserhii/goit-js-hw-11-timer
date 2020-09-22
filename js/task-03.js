const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minutesRef = document.querySelector('span[data-value="mins"]');
const secondsRef = document.querySelector('span[data-value="secs"]');

const timer = {
  targetDate: new Date("Jan 01, 2021"),

  newYearTimer() {
    const targetDateInMs = this.targetDate.getTime();

    updateTimer(0);

    setInterval(() => {
      const currentDate = Date.now();
      const time = targetDateInMs - currentDate;
      updateTimer(time);
    }, 1000);
  },
};

timer.newYearTimer();

function updateTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${mins}`;
  secondsRef.textContent = `${secs}`;
}

function pad(value) {
  if (value >= 100) {
    return String(value).padStart(3, "0");
  }
  return String(value).padStart(2, "0");
}
