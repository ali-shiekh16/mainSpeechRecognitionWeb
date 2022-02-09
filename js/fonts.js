import { collapseAllSubDropdowns } from './dropdown';

localStorage.setItem('fontColor', '#fff');
localStorage.setItem('fontStyle', 'Segoe UI');
localStorage.setItem('fontSize', '22');

function populateFontStyles() {
  const fonts = [
    'Arial',
    'Arial Black',
    'Bahnschrift',
    'Calibri',
    'Cambria',
    'Cambria Math',
    'Candara',
    'Comic Sans MS',
    'Consolas',
    'Constantia',
    'Corbel',
    'Courier New',
    'Ebrima',
    'Franklin Gothic Medium',
    'Gabriola',
    'Gadugi',
    'Georgia',
    'HoloLens MDL2 Assets',
    'Impact',
    'Ink Free',
    'Javanese Text',
    'Leelawadee UI',
    'Lucida Console',
    'Lucida Sans Unicode',
    'Malgun Gothic',
    'Marlett',
    'Microsoft Himalaya',
    'Microsoft JhengHei',
    'Microsoft New Tai Lue',
    'Microsoft PhagsPa',
    'Microsoft Sans Serif',
    'Microsoft Tai Le',
    'Microsoft YaHei',
    'Microsoft Yi Baiti',
    'MingLiU-ExtB',
    'Mongolian Baiti',
    'MS Gothic',
    'MV Boli',
    'Myanmar Text',
    'Nirmala UI',
    'Palatino Linotype',
    'Segoe MDL2 Assets',
    'Segoe Print',
    'Segoe Script',
    'Segoe UI',
    'Segoe UI Historic',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'SimSun',
    'Sitka',
    'Sylfaen',
    'Symbol',
    'Tahoma',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Webdings',
    'Wingdings',
    'Yu Gothic',
  ];

  const dropdown = document.querySelector('#fontStyle');

  fonts.forEach(font => {
    const item = createDropdownItem(font);

    dropdown.appendChild(item);
  });

  addClickEvents();
}

function createDropdownItem(text) {
  const item = document.createElement('div');
  item.classList.add('subdropdown-item');

  const textNode = document.createTextNode(text);
  const h3 = document.createElement('h3');
  h3.appendChild(textNode);

  item.appendChild(h3);

  return item;
}

function addClickEvents() {
  const fontStyleContainer = document.querySelector('#fontStyle');
  fontStyleContainer.addEventListener('click', handleFontClick);
}

const fontStyleText = document.querySelector('#fontStyleText');

function handleFontClick({ target }) {
  if (target.nodeName !== 'H3') return;

  fontStyleText.innerText = target.innerText;
  localStorage.setItem('fontStyle', target.innerText);

  collapseAllSubDropdowns();
}

const fontColorInput = document.querySelector('#fontColorInput');

const fontColorH3 = document.querySelector('#fontColorH3');

function handleColorChange() {
  fontColorInput.addEventListener('change', ({ target: { value } }) => {
    fontColorH3.style.color = value;
    localStorage.setItem('fontColor', value);
  });
}

const fontSizeInput = document.querySelector('#fontSizeInput');

function handleFontSizeChange() {
  fontSizeInput.addEventListener('change', e => {
    // font.size = e.target.value;
    localStorage.setItem('fontSize', e.target.value);
  });
}

const getFontData = () => font;

export {
  populateFontStyles,
  handleColorChange,
  handleFontSizeChange,
  getFontData,
};
