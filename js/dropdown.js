function determineDropdown(element) {
  const elementName = element.nodeName.toLowerCase();
  if (elementName === 'span' || elementName === 'img')
    element = element.parentElement;

  return element;
}

function collapseOtherSubDropdowns(currentDropdownItems) {
  const allDropdownItems = [...document.querySelectorAll('.subdropdown-items')];

  const otherDropdownItems = allDropdownItems.filter(
    items => items !== currentDropdownItems
  );

  otherDropdownItems.forEach(
    item =>
      item.classList.contains('subdropdown-items-expanded') &&
      item.classList.remove('subdropdown-items-expanded')
  );
}

function toggleSubDropdown(target) {
  target = determineDropdown(target);

  const subDropdownId = target.getAttribute('data-js-subdropdown-id');
  const subDropdownItems = document.querySelector(`#${subDropdownId}`);

  subDropdownItems.classList.toggle('subdropdown-items-expanded');

  collapseOtherSubDropdowns(subDropdownItems);
}

// ***         TOGETHER        ***
const dropdowns = [...document.querySelectorAll('#dropdown')];
function collapseAllSubDropdowns() {
  const subDropdowns = document.querySelectorAll('.subdropdown-items');

  subDropdowns.forEach(dropdown =>
    dropdown.classList.remove('subdropdown-items-expanded')
  );
}

function collapseOtherDropdowns(currentDropdown) {
  const otherDropdowns = dropdowns.filter(
    dropdown => dropdown !== currentDropdown
  );

  collapseAllSubDropdowns();

  otherDropdowns.forEach(dropdown => {
    const nextSibling = dropdown.nextElementSibling;
    dropdown.classList.contains('btn-primary-clicked') &&
      dropdown.classList.remove('btn-primary-clicked');
    nextSibling.classList.contains('dropdown-items-expanded') &&
      nextSibling.classList.remove('dropdown-items-expanded');
  });
}
// ***				TOGETHER				***

export {
  determineDropdown,
  collapseOtherSubDropdowns,
  toggleSubDropdown,
  collapseAllSubDropdowns,
  collapseOtherDropdowns,
};
