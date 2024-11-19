// algebra.service.ts
import { Injectable } from '@angular/core';
import Algebrite from 'algebrite';
import { Estep } from '../models/step.model';

@Injectable({
  providedIn: 'root',
})
export class AlgebraService {
  Steps: Estep[] = [];

  solve(expression: string): string[] {
    //agregar array tipado

    //eliminar
    const steps: string[] = [];
    try {
      // Verificar si es una ecuación (contiene '=')
      if (expression.includes('=')) {
        steps.push(`Ecuación inicial: ${expression}`);

        // Paso 1: Mover todos los términos al lado izquierdo
        const [lhs, rhs] = expression.split('=');
        const equation = `(${lhs}) - (${rhs})`;
        const simplifiedEquation = Algebrite.simplify(equation).toString();
        steps.push(`Mover todo al lado izquierdo: ${simplifiedEquation} = 0`);

        // Paso 2: Detectar si es cuadrática y extraer coeficientes
        let a, b, c;
        try {
          a = parseFloat(
            Algebrite.coeff(simplifiedEquation, 'x', 2).toString()
          );
          b = parseFloat(
            Algebrite.coeff(simplifiedEquation, 'x', 1).toString()
          );
          c = parseFloat(
            Algebrite.coeff(simplifiedEquation, 'x', 0).toString()
          );
          steps.push(
            `Coeficientes identificados: a = ${a}, b = ${b}, c = ${c}`
          );
        } catch {
          steps.push(
            'Error al extraer los coeficientes. Verifica el formato de la ecuación.'
          );
          return steps;
        }

        if (a !== 0) {
          // Paso 3: Calcular el discriminante
          const discriminant = b ** 2 - 4 * a * c;
          steps.push(`Discriminante (b² - 4ac): ${discriminant}`);

          if (discriminant < 0) {
            steps.push('La ecuación no tiene soluciones reales.');
          } else {
            // Paso 4: Calcular las raíces
            const sqrtDiscriminant = Math.sqrt(discriminant);
            const root1 = (-b + sqrtDiscriminant) / (2 * a);
            const root2 = (-b - sqrtDiscriminant) / (2 * a);

            steps.push(`Solución 1: x = ${root1}`);
            steps.push(`Solución 2: x = ${root2}`);
          }
        } else {
          steps.push('No es una ecuación cuadrática.');
        }
      } else {
        // Paso 1: Expresiones algebraicas (sin ecuación)
        steps.push(`Expresión inicial: ${expression}`);

        // Paso 2: Agrupar términos semejantes
        const groupedTerms = Algebrite.simplify(expression).toString();
        steps.push(`Agrupar términos semejantes: ${groupedTerms}`);

        // Paso 3: Expandir para evitar factorización automática
        const expandedExpression = Algebrite.run(
          `expand(${groupedTerms})`
        ).toString();
        steps.push(`Expresión expandida: ${expandedExpression}`);

        // Paso 4: Resultado final simplificado
        const finalSimplification =
          Algebrite.simplify(expandedExpression).toString();
        steps.push(`Expresión simplificada: ${finalSimplification}`);
      }
    } catch (error) {
      steps.push(
        'Error al procesar la expresión. Por favor, verifica el formato.'
      );
    }
    return steps;
  }
}
