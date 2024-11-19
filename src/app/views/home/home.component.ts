import { Component } from '@angular/core';
import { AlgebraService } from '../../services/algebra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  expression = '';
  steps: string[] = [];

  constructor(private algebraService: AlgebraService) {}

  solve() {
    this.steps = this.algebraService.solve(this.expression);
  }
}
