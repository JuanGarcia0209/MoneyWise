import { Component, Input } from '@angular/core';
import { CATEGORIAS } from '../../../../core/constants/categorias.constant';

@Component({
  selector: 'app-category-badge',
  standalone: false,
  templateUrl: './category-badge.component.html',
  styleUrls: ['./category-badge.component.scss']
})
export class CategoryBadgeComponent {
  @Input() categoria: string = '';
  @Input() mostrarIcono: boolean = true;

  get categoriaInfo() {
    return CATEGORIAS.find(c => c.key === this.categoria);
  }
}
