// const { handleCloseClick, handleMinimizeClick } = require('./icon');

// Handle Minimize and close
// handleCloseClick();
// handleMinimizeClick();

// SETTING SIZE
// const frameWidth = +localStorage.getItem('frameWidth');
// const frameHeight = +localStorage.getItem('frameHeight');

// const currentWindow = remote.getCurrentWindow();

// currentWindow.setSize(frameWidth, frameHeight);

// SETTING BACKGROUND COLORS OF FRAME AND TEXT

const bgColorFrame = localStorage.getItem('frameBgColor');
const bgColorText = localStorage.getItem('fontBgColor');

document.body.style.backgroundColor = bgColorFrame;
document.querySelector('#speechContainer').style.backgroundColor = bgColorText;

// SET ALIGNMENT

const alignmentX = localStorage.getItem('frameAlignX');
const alignmentY = localStorage.getItem('frameAlignY');

const wrapper = document.querySelector('#speechWrapper');
const textContainer = document.querySelector('#speechContainer');

switch (alignmentX) {
  case 'center':
    wrapper.style.justifyContent = 'center';
    break;

  case 'left':
    wrapper.style.justifyContent = 'start';
    break;

  case 'right':
    wrapper.style.justifyContent = 'end';
    break;

  default:
    textContainer.style.width = '100%';
    break;
}

switch (alignmentY) {
  case 'top':
    wrapper.style.alignItems = 'flex-start';
    break;

  case 'bottom':
    wrapper.style.alignItems = 'flex-end';
    break;

  case 'middle':
    wrapper.style.alignItems = 'center';
    break;

  default:
    textContainer.style.height = '100%';
    break;
}

// SET FONT
const fontColor = localStorage.getItem('fontColor');
const fontStyle = localStorage.getItem('fontStyle');
const fontSize = +localStorage.getItem('fontSize');

const speechText = document.querySelector('#speechText');
speechText.style.color = fontColor;
speechText.style.fontFamily = fontStyle;
speechText.style.fontSize = fontSize + 'px';

// SPEECH RECOGNITION STUFF
let isStarted = true;
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const speechContainer = document.querySelector('#speechContainer');

recognition.addEventListener('result', e => {
  const result = Array.from(e.results)
    .map(res => res[0])
    .map(res => res.transcript)
    .join('');

  p.innerText = result;

  if (e.results[0].isFinal) p = document.createElement('p');
  !p.classList.contains('speech-text') && p.classList.add('speech-text');
  p.style.color = fontColor;

  speechContainer.appendChild(p);
});

recognition.addEventListener('end', () => {
  if (isStarted) recognition.start();
  else window.location = '/';
});

// recognition.start();

document.querySelector('#btnStop').addEventListener('click', e => {
  isStarted = false;
  recognition.stop();
});
