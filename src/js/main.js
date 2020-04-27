import '../styles/index.scss';
import data from '../js/data/cards.json';
import Game from '../js/classes/Game';
import Card from '../js/classes/Card';
import Timer from '../js/classes/Timer';

const container = document.querySelector('.memory-cards');

Game.shuffle(data.concat(data)).forEach(el => {
  const card = new Card(el.id, el.name, el.color);
  container.appendChild(card.create());
});

const timer = new Timer(document.querySelector('#container'), container);
timer.create();

new Game(container, document.querySelectorAll('.memory-card')).init();
document.addEventListener('timer', (e) => {
  if (e.detail) {
    timer.startTimer();
  } else {
    timer.stopTimer();
  }
});