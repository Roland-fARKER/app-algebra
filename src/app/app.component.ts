import { Component } from '@angular/core';
import { AlgebraService } from './services/algebra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expression = '';
  steps: string[] = [];

  constructor(private algebraService: AlgebraService) {}

}
