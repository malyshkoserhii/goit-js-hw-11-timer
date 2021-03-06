class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.selector = document.querySelector(`${selector}`);
    this.daysRef = this.selector.querySelector('span[data-value="days"]');
    this.hoursRef = this.selector.querySelector('span[data-value="hours"]');
    this.minutesRef = this.selector.querySelector('span[data-value="mins"]');
    this.secondsRef = this.selector.querySelector('span[data-value="secs"]');
  }

  countdown() {
    const targetDateInMs = this.targetDate.getTime();

    this._updateTimer(0);

    setInterval(() => {
      const currentDate = Date.now();
      const time = targetDateInMs - currentDate;
      this._updateTimer(time);
    }, 1000);
  }

  _updateTimer(time) {
    const days = this._pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this._pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this._pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this._pad(Math.floor((time % (1000 * 60)) / 1000));

    this._markup(days, hours, mins, secs);
  }

  _markup(days, hours, mins, secs) {
    this.daysRef.textContent = `${days}`;
    this.hoursRef.textContent = `${hours}`;
    this.minutesRef.textContent = `${mins}`;
    this.secondsRef.textContent = `${secs}`;
  }

  _pad(value) {
    if (value >= 100) {
      return String(value).padStart(3, "0");
    }
    return String(value).padStart(2, "0");
  }
}

const newYearTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "Jan 01, 2021",
});

newYearTimer.countdown();
