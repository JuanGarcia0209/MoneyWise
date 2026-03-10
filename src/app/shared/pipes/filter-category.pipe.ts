import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from '../../core/models/transaccion.model';

@Pipe({ name: 'filterByCategory', standalone: false })
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: Transaccion[] | null | undefined, categoria: string | null): Transaccion[] {
    if (!items) return [];
    if (!categoria || categoria === 'todos') return items;
    return items.filter(i => i.categoria === categoria);
  }
}
// import { Pipe, PipeTransform } from '@angular/core';
// import { Transaccion } from '../../core/models/transaccion.model';

// @Pipe({
//   name: 'filterByCategory',
//   standalone: false
// })
// export class FilterByCategoryPipe implements PipeTransform {
//   transform(transacciones: Transaccion[], categoria: string): Transaccion[] {
//     if (!transacciones || !categoria || categoria === 'todos') return transacciones;
//     return transacciones.filter(t => t.categoria === categoria);
//   }
// }
