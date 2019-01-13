/**
 * @param target {Element} The target element
 * @param elementType {string} The element type, (e.g. H3 or BUTTON)
 * @param text {string|null|boolean} The text for our text node
 * @param {function} callback
 */
function createTextElement (target, elementType, text, callback = null) {

  const element = document.createElement(elementType);

  text ? element.appendChild(document.createTextNode(text)) : null;

  'function' === typeof callback ? callback(element) : console.warn('callback expected to be a function');

  target.appendChild(element);

  return element;
}

export { createTextElement };