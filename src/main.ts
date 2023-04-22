import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import 'devextreme/dist/css/dx.light.css';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
