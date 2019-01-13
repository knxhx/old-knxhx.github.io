import smoothScroll from 'smoothscroll-polyfill';
import { noop } from '../utils/general';

function linkEventHandler (ev, el) {
  const {
          srcElement
        } = ev;

  const hrefString = srcElement.getAttribute('href');
  if (!hrefString) {
    console.warn(`No href for:`, srcElement);
    return;
  }
  const targetElement = document.querySelector(`${hrefString}`);

  if (!targetElement) {
    console.warn(`No matching element for ${hrefString}`);
    return;
  }

  targetElement.scrollIntoView({ behavior: 'smooth' });
}

const linkIteration = el =>
  addEventListener('click', ev =>
    linkEventHandler(ev, el)
  );

function run () {
  // Polyfill
  smoothScroll.polyfill();
  // Get
  const links = document.querySelectorAll('a');
  // Run
  [...links].map(link => linkIteration(link));
}

function smoothScrolling () {
  // Check for "smooth-behavior" css support https://caniuse.com/#feat=css-scroll-behavior
  const isSmoothScrollSupported = document.documentElement.style.hasOwnProperty('scrollBehavior');
  isSmoothScrollSupported ? noop() : run();
}

export { smoothScrolling };