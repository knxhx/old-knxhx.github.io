import { debounce } from 'debounce';

function resize (e) {
  const documentMeasurements = document.body.getBoundingClientRect();
  const { top }              = documentMeasurements;
  const distanceFromTop      = Math.abs(top);
  300 > distanceFromTop ?
    document.documentElement.setAttribute('data-navigation', 'top') :
    document.documentElement.setAttribute('data-navigation', 'scrolling');
}

function navigation () {
  window.onscroll = debounce(resize, 100);
}

export { navigation };