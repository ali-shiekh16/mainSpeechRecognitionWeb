const minimizeIcon = document.querySelector('#minimizeIcon');
const closeIcon = document.querySelector('#closeIcon');

function handleMinimizeClick() {
  minimizeIcon.addEventListener('click', e => alert('Are you serious?'));
}

function handleCloseClick() {
  closeIcon.addEventListener('click', e => alert('Are you serious?'));
}

export { handleCloseClick, handleMinimizeClick };
