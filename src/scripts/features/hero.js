import Typed from 'typed.js';
import { countdown } from './countdown';

function hero () {
  new Typed('#heroTyped', {
    stringsElement: '#heroTypedStrings',
    typeSpeed: 50,
    cursorChar: '_',
  });

  countdown('#countdown', {
    startDate: new Date(2019, 3, 2),
    endDate: null
  });

}

export { hero };