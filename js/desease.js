const radioSim = document.getElementById('inlineRadio1');
const radioNao = document.getElementById('inlineRadio2');
const inputDisease = document.querySelector('.desease-control');

inputDisease.style.display = 'none';

radioSim.addEventListener('click', function() {
  if (this.checked) {
    inputDisease.style.display = 'block';
  } else {
    inputDisease.style.display = 'none';
  }
});

radioNao.addEventListener('click', function() {
  if (this.checked) {
    inputDisease.style.display = 'none';
  }
});

