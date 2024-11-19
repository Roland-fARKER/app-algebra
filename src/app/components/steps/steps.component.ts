import { Component, Input } from '@angular/core';
import { Estep } from '../../models/step.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css',
})
export class StepsComponent {
  @Input()  Steps : Estep[] = []
}
