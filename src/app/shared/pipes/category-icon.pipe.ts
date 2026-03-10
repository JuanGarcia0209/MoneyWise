import { Pipe, PipeTransform } from '@angular/core';

const ICON_MAP: Record<string,string> = {
  Alimentación: 'restaurant-outline',
  Transporte: 'bus-outline',
  Vivienda: 'home-outline',
  Salud: 'medkit-outline',
  Ocio: 'game-controller-outline',
  Salario: 'wallet-outline',
  Otros: 'ellipsis-horizontal'
};

@Pipe({ name: 'categoryIcon', standalone: false })
export class CategoryIconPipe implements PipeTransform {
  transform(categoria: string): string { return ICON_MAP[categoria] || 'pricetag-outline'; }
}
