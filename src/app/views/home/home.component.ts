import { Component } from '@angular/core';
import { AlgebraService } from '../../services/algebra.service';
import { Estep } from '../../models/step.model';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  expression = '';
  steps: Estep[] = [];

  messages: Message[] = [];

  constructor(private algebraService: AlgebraService) {}

  solve() {
    if (!this.expression.trim()) {
      // Si la expresión está vacía, mostrar el mensaje de error
      this.addMessageWithTimeout(
        'error',
        'Error',
        'Debe existir una expresión para resolver.',
        5000
      );
      return; // Evitar llamar al servicio si está vacío
    }

    // Si la expresión no está vacía, continuar con la llamada al servicio
    this.steps = this.algebraService.solve(this.expression);
    console.log(this.steps);
  }

  addMessageWithTimeout(
    severity: string,
    summary: string,
    detail: string,
    life: number
  ) {
    // Agregar el mensaje a la lista
    this.messages = [{ severity, summary, detail }];

    // Configurar el tiempo de vida con setTimeout
    setTimeout(() => {
      this.clearMessages(); // Eliminar el mensaje después del tiempo de vida
    }, life);
  }

  clearMessages() {
    this.messages = [];
  }
}
