import { pipe } from 'ramda';
import scrollDir from 'scrolldir';
import { navigation } from './features/navigation';
import { mobileMenu } from './features/mobileMenu';
import { hero } from './features/hero';
import { smoothScrolling } from './features/smoothScrolling';

pipe(
  navigation,
  smoothScrolling,
  mobileMenu,
  scrollDir,
  hero,
)();