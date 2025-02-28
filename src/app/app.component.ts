import { Component } from '@angular/core';
import { AppBaseComponent } from './shared/app-base.component';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class AppComponent extends AppBaseComponent {}
