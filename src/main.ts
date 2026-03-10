import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Register Ionic PWA elements (used by Capacitor Camera on web)
import { defineCustomElements as definePWAElements } from '@ionic/pwa-elements/loader';
definePWAElements(window);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
