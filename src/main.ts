import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as $ from 'jquery';

environment.production && enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error);
