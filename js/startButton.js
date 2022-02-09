const button = document.querySelector('#startButton');

function handleStartClick() {
  button.addEventListener('click', e => {
    window.location = './secondaryScreen.html';
  });
}

export default handleStartClick;
