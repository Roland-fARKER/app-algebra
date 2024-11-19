import { Component } from '@angular/core';
import { AlgebraService } from './services/algebra.service';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; flex-direction: column; width: 100%; min-height: 100dvh;">
      <div style="flex: 1;">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  expression = '';
  steps: string[] = [];

  constructor(private algebraService: AlgebraService) {}
}
