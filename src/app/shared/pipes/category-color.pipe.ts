import { Pipe, PipeTransform } from '@angular/core';

const COLOR_MAP: Record<string,string> = {
  Alimentación: '#F39C12',
  Transporte: '#3498DB',
  Vivienda: '#9B59B6',
  Salud: '#E74C3C',
  Ocio: '#1ABC9C',
  Salario: '#2ECC71',
  Otros: '#95A5A6'
};

@Pipe({ name: 'categoryColor', standalone: false })
export class CategoryColorPipe implements PipeTransform {
  transform(categoria: string): string { return COLOR_MAP[categoria] || '#000000'; }
}
