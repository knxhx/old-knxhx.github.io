import Typed from 'typed.js';
import { countdown } from './countdown';

function hero () {
  new Typed('#heroTyped', {
    stringsElement: '#heroTypedStrings',
    typeSpeed: 50,
    cursorChar: '_',
  });

  countdown('#countdown', {
    startDate: Date.now(),
    endDate: new Date(2019, 2, 2)
  });

}

export { hero };