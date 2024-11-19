import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equationFormat'
})
export class EquationFormatPipe implements PipeTransform {

  transform(value: string | undefined): string {
    // Si el valor es undefined, retornamos un string vacío
    if (!value) return '';

    // Reemplazar las potencias de x^n (ej. x^2, x^3, ...) se convierte en x², x³, ...
    value = value.replace(/x\^(\d+)/g, (match, p1) => {
      return `x${this.convertToSuperscript(p1)}`;
    });

    // Eliminar los asteriscos en las multiplicaciones (por ejemplo "3*x" → "3x")
    value = value.replace(/\*/g, '');

    return value;
  }

  // Función que convierte números a su representación en superíndice
  private convertToSuperscript(num: string): string {
    const superscriptMap: { [key: string]: string } = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
      '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };
    return num.split('').map(digit => superscriptMap[digit] || digit).join('');
  }
}

