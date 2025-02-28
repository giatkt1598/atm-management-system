import { Component } from '@angular/core';
import { AppBaseComponent } from '../app-base.component';
@Component({
  template: `
    <div class="relative">
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  standalone: false,
})
export class MainLayoutComponent extends AppBaseComponent {}
