import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiraLetraMaiuscula',
})
export class PrimeiraLetraMaiusculaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
