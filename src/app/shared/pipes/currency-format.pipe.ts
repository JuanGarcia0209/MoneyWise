import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyFormat', standalone: false })
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | null | undefined, locale = 'es-CO', currency = 'COP') {
    if (value == null) return '';
    try {
      return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
    } catch {
      return value.toString();
    }
  }
}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'currencyFormat',
//   standalone: false
// })
// export class CurrencyFormatPipe implements PipeTransform {

//   transform(value: number, currency: string = '$', decimals: number = 2): string {
//     if (value == null) return '';
//     return currency + value.toFixed(decimals).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   }

// }
