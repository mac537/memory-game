export default class Card {
  constructor (id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
  create () {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.setAttribute('data-id', this.id);
    card.innerHTML = `
      <div class="memory-card__inner">
        <div class="memory-card__back">
          <i class="fas fa-question-circle fa-6x" style="color:#2193b0"></i>
        </div>
        <div class="memory-card__front">
          <i class="fab fa-${this.name} fa-6x" style="color:${this.color}"></i>
        </div>
      </div>
    `;
    return card;
  }
};