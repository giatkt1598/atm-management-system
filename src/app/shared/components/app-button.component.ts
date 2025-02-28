import { Component } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
@Component({
  selector: 'app-button',
  template: `
    <button class="btn-primary text-red-400 bg-violet-300 px-2 py-1 rounded-md">
      <ng-content />
    </button>
  `,
  standalone: false,
})
export class AppButtonComponent extends AppBaseComponent {}
