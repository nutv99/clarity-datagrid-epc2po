import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ClarityIcons } from 'clarity-icons';
import { AllShapes } from 'clarity-icons/shapes/all-shapes';
// import { EssentialShapes } from 'clarity-icons/shapes/essential-shapes';
// import { TechnologyShapes } from 'clarity-icons/shapes/technology-shapes';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));