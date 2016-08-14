import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { HttpModule } from '@angular/http';

platformBrowserDynamic().bootstrapModule(AppModule, [HttpModule]);

