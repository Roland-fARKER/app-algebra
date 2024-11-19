import { Component } from '@angular/core';
import { AlgebraService } from '../../services/algebra.service';
import { Estep } from '../../models/step.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  expression = '';
  steps: Estep[] = [];

  constructor(private algebraService: AlgebraService) {}

  solve() {
    this.steps = this.algebraService.solve(this.expression);
    console.log(this.steps);
  }
}
