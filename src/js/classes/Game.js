export default class Game {
  #counter;
  #started;
  constructor (container, cards) {
    this.container = container;
    this.cards = cards;
    this.#counter = 0;
    this.#started = false;
  }

  static shuffle (data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  }

  init () {
    for (const card of this.cards) {
      card.addEventListener('click', (e) => {
        if (!this.#started) {
          this.#started = true;
          this._handleTimer(true);
        }
        this._handleCards(card);
      }, false);
    }
  }

  _handleTimer (value) {
    const event = new CustomEvent('timer', { detail: value });
    document.dispatchEvent(event);
  }

  _handleCards (card) {
    if (!this.container.classList.contains('memory-cards--paused')) {
      card.classList.add('memory-card--flipped');
      const activeCards = Array.from(this.cards).filter(card => card.classList.contains('memory-card--flipped'));
      if (activeCards.length == 2) {
        this.container.classList.add('memory-cards--paused');
        if (activeCards[0].dataset.id === activeCards[1].dataset.id) {
          this.#counter++;
          activeCards[0].classList.add('memory-card--matched');
          activeCards[1].classList.add('memory-card--matched');
          activeCards[0].classList.remove('memory-card--flipped');
          activeCards[1].classList.remove('memory-card--flipped');
          this.container.classList.remove('memory-cards--paused');
        } else {
          setTimeout(() => {
            activeCards[0].classList.remove('memory-card--flipped');
            activeCards[1].classList.remove('memory-card--flipped');
            this.container.classList.remove('memory-cards--paused');
          }, 600);
        }
      }
      if (this.#counter === this.cards.length / 2) {
        setTimeout(() => {
          this._handleTimer(false);
        }, 1000); 
      }
    }
  }
}
