import { collapseAllSubDropdowns } from './dropdown';

const textAlignment = {
  horizontal: 'full',
  vertical: 'full',
};

localStorage.setItem('frameAlignX', 'full');
localStorage.setItem('frameAlignY', 'full');

const alignXh3s = document.querySelectorAll('.horizontalAlignh3');

function handleAlignX() {
  alignXh3s.forEach(h3 =>
    h3.addEventListener('click', e => {
      const alignment = e.target.innerText.toLowerCase();
      localStorage.setItem('frameAlignX', alignment);
      changeAlignment();
      collapseAllSubDropdowns();
    })
  );
}

const alignYh3s = document.querySelectorAll('.verticalAlignH3');

function handleAlignY() {
  alignYh3s.forEach(h3 =>
    h3.addEventListener('click', e => {
      const alignment = e.target.innerText.toLowerCase();
      localStorage.setItem('frameAlignY', alignment);
      changeAlignment();
      collapseAllSubDropdowns();
    })
  );
}

const container = document.querySelector('.alignment-preview-box');

function changeAlignment() {
  // ** HORIZONTAL ALIGNMENT
  resetAlignmentX();
  container.classList.add(getAlignmentXClass());

  // ** VERTIAL ALIGNMENT
  resetAlignmentY();
  container.classList.add(getAlignmentYClass());
}

function resetAlignmentX() {
  container.classList.remove(
    'img-align-x-center',
    'img-align-x-left',
    'img-align-x-right',
    'img-align-x-full'
  );
}

function resetAlignmentY() {
  container.classList.remove(
    'img-align-y-middle',
    'img-align-y-top',
    'img-align-y-bottom',
    'img-align-y-full'
  );
}

function getAlignmentXClass() {
  switch (localStorage.getItem('frameAlignX')) {
    case 'center':
      return 'img-align-x-center';

    case 'left':
      return 'img-align-x-left';

    case 'right':
      return 'img-align-x-right';

    default:
      return 'img-align-x-full';
  }
}

function getAlignmentYClass() {
  switch (localStorage.getItem('frameAlignY')) {
    case 'middle':
      return 'img-align-y-middle';

    case 'top':
      return 'img-align-y-top';

    case 'bottom':
      return 'img-align-y-bottom';

    default:
      return 'img-align-y-full';
  }
}

const getTextAlignment = () => textAlignment;

export { handleAlignX, handleAlignY, getTextAlignment };
