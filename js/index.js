import {
  determineDropdown,
  toggleSubDropdown,
  collapseAllSubDropdowns,
  collapseOtherDropdowns,
} from './dropdown';

import {
  populateFontStyles,
  handleColorChange,
  handleFontSizeChange,
} from './fonts.js';

import { handleFontBgChange, handleFrameBgChange } from './background';

import { handleFrameSizeClick, handleCustomFrameChange } from './frameSize';

import { handleAlignX, handleAlignY } from './alignment';
import { handleCloseClick, handleMinimizeClick } from './icon';

import handleStartClick from './startButton';

// ** DROPDOWNS

const dropdowns = [...document.querySelectorAll('#dropdown')];

dropdowns.forEach(currentDropdown => {
  currentDropdown.addEventListener('click', ({ target }) => {
    collapseOtherDropdowns(currentDropdown);

    target = determineDropdown(target);
    target.classList.toggle('btn-primary-clicked');
    currentDropdown.nextElementSibling.classList.toggle(
      'dropdown-items-expanded'
    );

    if (!target.classList.contains('btn-primary-clicked'))
      collapseAllSubDropdowns();
  });
});

// ** SUB-DROPDOWNS

const subDropdowns = [...document.querySelectorAll('.subdropdown')];

subDropdowns.forEach(dropdown =>
  dropdown.addEventListener('click', ({ target }) => toggleSubDropdown(target))
);

// ** FONT EVENTS
// **  POPULATE FONT STYLE DROPDOWN
populateFontStyles();

// ** ADD COLOR CHANGE EVENT
handleColorChange();

// ** ADD FONT SIZE CHANGE EVENT
handleFontSizeChange();

// ** BACKGROUND EVENTS
// ** ADD FONT BACKGROUND CHANGE EVENT
handleFontBgChange();

// ** ADD FRAME BACKGROUND CHANGE EVENT
handleFrameBgChange();

// ** FRAME SIZE EVENTS

// ** HANDLE FRAME SIZE CLICK
handleFrameSizeClick();

// ** HANDLE CUSTOM FRAME CHANGE
handleCustomFrameChange();

// ** ALIGNMENT CHANGE EVENTS
// ** HANDLE HORIZONTAL ALIGNMENT CHANGE
handleAlignX();

// ** HANDLE VERTICAL ALIGNMENT CHANGE
handleAlignY();

// ** HANDLE CLOSE EVENT
handleCloseClick();
// ** HANDLE MINIMIZE EVENT
handleMinimizeClick();

// ** StartClick
handleStartClick();
