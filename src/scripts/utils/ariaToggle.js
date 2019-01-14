function ariaToggle (el, ariaProperty, ariaValueDefault) {
  let ariaValue = '';
  switch (el.getAttribute(ariaProperty)) {
    case 'true':
      ariaValue = 'false';
      break;
    case 'false':
      ariaValue = 'true';
      break;
    case null:
      ariaValue = ariaValueDefault ? ariaValueDefault : 'true';
      break;
  }
  el.setAttribute(ariaProperty, ariaValue);
}

export { ariaToggle };