import { collapseAllSubDropdowns } from './dropdown';

localStorage.setItem('frameWidth', 850);
localStorage.setItem('frameHeight', 800);

const frameSizeH3s = document.querySelectorAll('.frameSizeH3');

function handleFrameSizeClick() {
  frameSizeH3s.forEach(element => {
    element.addEventListener('click', ({ target }) => {
      const [width, height] = target
        .getAttribute('data-js-frame')
        .split('-')
        .map(n => +n);

      localStorage.setItem('frameWidth', width);
      localStorage.setItem('frameHeight', height);

      collapseAllSubDropdowns();
    });
  });
}

const frameSizeInput1 = document.querySelector('.frame-size-input-1');

const frameSizeInput2 = document.querySelector('.frame-size-input-2');

function handleCustomFrameChange() {
  frameSizeInput1.addEventListener('change', ({ target }) => {
    localStorage.setItem('frameWidth', +target.value);
  });

  frameSizeInput2.addEventListener('change', ({ target }) => {
    localStorage.setItem('frameHeight', +target.value);
  });
}

export { handleFrameSizeClick, handleCustomFrameChange };
