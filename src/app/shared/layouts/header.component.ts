import { Component } from '@angular/core';
import { environment } from 'src/environments';
import { AppBaseComponent } from '../app-base.component';

@Component({
  selector: 'app-header',
  styleUrl: 'header.component.scss',
  template: `
    <div class="app-header">
      <img class="app-logo" src="./assets/logo.png" />
      <div class="app-title">{{ title }}</div>
    </div>
    <div class="app-header-spacing"></div>
  `,
  standalone: false,
})
export class HeaderComponent extends AppBaseComponent {
  title = environment.application.name;
}
