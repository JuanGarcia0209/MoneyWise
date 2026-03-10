import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateFormat', standalone: false })
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date | null | undefined) {
    if (!value) return '';
    const d = typeof value === 'string' ? new Date(value) : value;
    const now = new Date();
    const diff = Math.floor((+now - +d) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'hoy';
    if (diff === 1) return 'ayer';
    return d.toLocaleDateString();
  }
}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'dateFormat',
//   standalone: false
// })
// export class DateFormatPipe implements PipeTransform {

//   transform(value: string | Date): string {
//     if (!value) return '';
//     const date = new Date(value);
//     const today = new Date();
//     const yesterday = new Date();
//     yesterday.setDate(today.getDate() - 1);

//     if (date.toDateString() === today.toDateString()) return 'Hoy';
//     if (date.toDateString() === yesterday.toDateString()) return 'Ayer';

//     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
//     return date.toLocaleDateString('es-ES', options);
//   }

// }
