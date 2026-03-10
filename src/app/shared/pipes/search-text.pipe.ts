import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from '../../core/models/transaccion.model';

@Pipe({ name: 'searchByText', standalone: false })
export class SearchByTextPipe implements PipeTransform {
  transform(items: Transaccion[] | null | undefined, texto: string | null): Transaccion[] {
    if (!items) return [];
    if (!texto) return items;
    const t = texto.toLowerCase();
    return items.filter(i => (i.descripcion || '').toLowerCase().includes(t));
  }
}
// import { Pipe, PipeTransform } from '@angular/core';
// import { Transaccion } from '../../core/models/transaccion.model';

// @Pipe({
//   name: 'searchByText',
//   standalone: false
// })
// export class SearchByTextPipe implements PipeTransform {
//   transform(transacciones: Transaccion[], texto: string): Transaccion[] {
//     if (!transacciones || !texto) return transacciones;
//     const tLower = texto.toLowerCase();
//     return transacciones.filter(t =>
//       t.descripcion?.toLowerCase().includes(tLower) || ''
//     );
//   }
// }
