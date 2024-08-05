function darkToggle() {
    const element = document.body;
    element.classList.toggle('dark-mode');
}

function addHumor() {
  const button = document.getElementById('dark-button');
  const originalText = 'Shield your eyes';
  const newText = 'I choose pain';
  button.textContent = (button.textContent === originalText) ? newText : originalText;
  }
