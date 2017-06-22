import { FormControl, ValidationErrors } from '@angular/forms';

export class Validators {

  static cpf(control: FormControl): ValidationErrors|null {
    let numeros, digitos, soma, i, resultado;
    let cpf = control.value.replace(/\D/gi, '');
    let digitosIguais = 1;

    if (cpf.length < 11) { return {'length': true}; }

    for (i = 0; i < cpf.length - 1; i++) {
      if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
        digitosIguais = 0;
        break;
      }
    }

    if (!digitosIguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;

      for (i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado.toString() !== digitos.charAt(0)) { return {'invalid': true}; }

      numeros = cpf.substring(0, 10);
      soma = 0;

      for (i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado.toString() !== digitos.charAt(1)) {
        return {'invalid': true};
      } else {
        return null;
      }
    } else {
      return {'invalid': true};
    }
  }
}
