import { Component } from '@angular/core';
import { Estep } from './models/step.model';
import { AlgebraService } from './services/algebra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expression = '';
  steps: Estep[] = [];

  constructor(private algebraService: AlgebraService) {}

  solve() {
    this.steps = this.algebraService.solve(this.expression);
  }
}
