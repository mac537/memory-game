export default class Timer {
  #interval;
  constructor (container, elBefore) {
    this.container = container;
    this.elBefore = elBefore;
    this.#interval = null;
  }

  decorateNumber (value) {
    return value > 9 ? value : '0' + value;
  }

  startTimer () {
    let sec = 0;
    this.#interval = setInterval(() => {
      let seconds = ++sec % 60;
      let minutes = parseInt(sec / 60, 10);
      document.querySelector('.memory-card__timer-minutes').textContent = this.decorateNumber(minutes);
      document.querySelector('.memory-card__timer-seconds').textContent = this.decorateNumber(seconds);
    }, 1000);
  }

  stopTimer () {
    clearInterval(this.#interval);  
  }

  create () {
    const timer = document.createElement('div');
    timer.className = 'memory-card__timer';
    timer.innerHTML = `
      <label class="memory-card__timer-minutes">00</label>:
      <label class="memory-card__timer-seconds">00</label>
    `;
    this.container.insertBefore(timer, this.elBefore);
  }
}