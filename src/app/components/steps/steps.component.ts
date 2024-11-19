import { Component } from '@angular/core';
import { Estep } from '../../models/step.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css',
})
export class StepsComponent {
  Steps: Estep[] = [
    { text: 'Texto 1', value: 'descr' },
    { text: 'Texto 2', value: 'descr' },
    { text: 'Texto 3', value: 'descr' },
  ];
}
