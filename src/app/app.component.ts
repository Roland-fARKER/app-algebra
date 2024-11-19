import { Component } from '@angular/core';
import { AlgebraService } from './services/algebra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  expression = '';
  steps: string[] = [];

  constructor(private algebraService: AlgebraService) {}

  solve() {
    this.steps = this.algebraService.solve(this.expression);
  }
}
