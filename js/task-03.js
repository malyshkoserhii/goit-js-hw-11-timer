const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minutesRef = document.querySelector('span[data-value="mins"]');
const secondsRef = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = new Date(targetDate);
  }

  countdown() {
    const targetDateInMs = this.targetDate.getTime();

    this.updateTimer(0);

    setInterval(() => {
      const currentDate = Date.now();
      const time = targetDateInMs - currentDate;
      this.updateTimer(time);
    }, 1000);
  }

  updateTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minutesRef.textContent = `${mins}`;
    secondsRef.textContent = `${secs}`;
  }

  pad(value) {
    if (value >= 100) {
      return String(value).padStart(3, "0");
    }
    return String(value).padStart(2, "0");
  }
}

const newYearTimer = new CountdownTimer("Jan 01, 2021");

newYearTimer.countdown();
