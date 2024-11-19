// algebra.service.ts
import { Injectable } from '@angular/core';
import Algebrite from 'algebrite';
import { Estep } from '../models/step.model';

@Injectable({
  providedIn: 'root',
})
export class AlgebraService {
  Steps: Estep[] = [];

  solve(expression: string): Estep[] {
    const steps: Estep[] = [];
    try {
      if (expression.includes('=')) {
        steps.push({ text: 'Ecuación inicial:', value: expression });

        const [lhs, rhs] = expression.split('=');
        const equation = `(${lhs}) - (${rhs})`;
        const simplifiedEquation = Algebrite.simplify(equation).toString();
        steps.push({ text: 'Mover todo al lado izquierdo:', value: `${simplifiedEquation} = 0` });

        let a, b, c;
        try {
          a = parseFloat(Algebrite.coeff(simplifiedEquation, 'x', 2).toString());
          b = parseFloat(Algebrite.coeff(simplifiedEquation, 'x', 1).toString());
          c = parseFloat(Algebrite.coeff(simplifiedEquation, 'x', 0).toString());
          steps.push({
            text: 'Coeficientes identificados:',
            value: `a = ${a}, b = ${b}, c = ${c}`
          });
        } catch {
          steps.push({
            text: 'Error al extraer los coeficientes. Verifica el formato de la ecuación.'
          });
          return steps;
        }

        if (a !== 0) {
          const discriminant = b ** 2 - 4 * a * c;
          steps.push({ text: 'Discriminante (b² - 4ac):', value: `${discriminant}` });

          if (discriminant < 0) {
            steps.push({ text: 'La ecuación no tiene soluciones reales.' });
          } else {
            const sqrtDiscriminant = Math.sqrt(discriminant);
            const root1 = (-b + sqrtDiscriminant) / (2 * a);
            const root2 = (-b - sqrtDiscriminant) / (2 * a);

            steps.push({ text: 'Solución 1:', value: `x = ${root1}` });
            steps.push({ text: 'Solución 2:', value: `x = ${root2}` });
          }
        } else {
          steps.push({ text: 'No es una ecuación cuadrática.' });
        }
      } else {
        steps.push({ text: 'Expresión inicial:', value: expression });

        const groupedTerms = Algebrite.simplify(expression).toString();
        steps.push({ text: 'Agrupar términos semejantes:', value: groupedTerms });

        const expandedExpression = Algebrite.run(`expand(${groupedTerms})`).toString();
        steps.push({ text: 'Expresión expandida:', value: expandedExpression });

        const finalSimplification = Algebrite.simplify(expandedExpression).toString();
        steps.push({ text: 'Expresión simplificada:', value: finalSimplification });
      }
    } catch (error) {
      steps.push({
        text: 'Error al procesar la expresión. Por favor, verifica el formato.'
      });
    }
    return steps;
  }
}
