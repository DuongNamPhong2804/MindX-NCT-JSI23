document.addEventListener('DOMContentLoaded', function () {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF', '#FF00FF', '#FF007F', '#FF6666', '#FFB266', '#FFFF66', '#B2FF66', '#66FF66', '#66FFB2', '#66FFFF', '#66B2FF', '#6666FF', '#B266FF', '#FF66FF', '#FF66B2', '#FFCCCC', '#FFE5CC', '#FFFFCC', '#E5FFCC', '#CCFFCC', '#CCFFE5', '#CCFFFF', '#CCE5FF'];

  const shuffledColors = colors.concat(colors).sort(() => 0.5 - Math.random());

  const memoryGame = document.getElementById('memory-game');
  let flippedCards = [];
  let revealCount = 0;

  shuffledColors.forEach((color, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = color;
    card.addEventListener('click', flipCard);
    memoryGame.appendChild(card);
  });

  // Thêm nút revealAllBtn
  const revealAllBtn = document.getElementById('revealAllBtn');
  revealAllBtn.addEventListener('click', function () {
    if (revealCount < 2) {
      revealCount++;
      document.querySelectorAll('.card:not(.flipped)').forEach(card => {
        card.style.backgroundColor = card.dataset.color;
        card.classList.add('flipped');
      });
      setTimeout(() => {
        document.querySelectorAll('.card:not(.matched)').forEach(card => {
          card.style.backgroundColor = '#ccc';
          card.classList.remove('flipped');
        });
      }, 10000);
    }
  });

  function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
      this.style.backgroundColor = this.dataset.color;
      this.classList.add('flipped');
      flippedCards.push(this);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.color === card2.dataset.color) {
      card1.classList.add('matched');
      card2.classList.add('matched');
    } else {
      card1.style.backgroundColor = '#ccc';
      card2.style.backgroundColor = '#ccc';
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }

    flippedCards = [];

    if (document.querySelectorAll('.matched').length === shuffledColors.length) {
      alert('Congratulations! You won!');
    }
  }
});