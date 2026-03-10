import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

@Pipe({ name: 'monthName', standalone: false })
export class MonthNamePipe implements PipeTransform {
  transform(month: number): string { return MONTHS[(month - 1) % 12] ?? '' }
}
