import Typed from 'typed.js';
import { countdown } from './countdown';

function hero () {
  new Typed('#heroTyped', {
    stringsElement: '#heroTypedStrings',
    typeSpeed: 50,
    cursorChar: '_',
  });

  countdown('#countdown', {
    startDate: new Date(2019, 2, 2),
    endDate: null
  });

}

export { hero };