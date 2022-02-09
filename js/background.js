const fontBgInput = document.querySelector('#fontBgInput');
const fontBgContainer = document.querySelector('#fontBgContainer');

localStorage.setItem('fontBgColor', '#414b57');
localStorage.setItem('frameBgColor', '#414b57');

const alignmentBox = document.querySelector('.alignment-preview-box');
function handleFontBgChange() {
  fontBgInput.addEventListener('change', ({ target: { value } }) => {
    fontBgContainer.style.backgroundColor = value;
    alignmentBox.style.backgroundColor = value;
    localStorage.setItem('fontBgColor', value);
  });
}

const frameBgInput = document.querySelector('#frameBgInput');
const frameBgContainer = document.querySelector('#frameBgContainer');

function handleFrameBgChange() {
  frameBgInput.addEventListener('change', ({ target: { value } }) => {
    frameBgContainer.style.backgroundColor = value;
    localStorage.setItem('frameBgColor', value);
  });
}

export { handleFontBgChange, handleFrameBgChange };
