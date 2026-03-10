import { Component, Input } from '@angular/core';
import { CATEGORIAS } from '../../../../core/constants/categorias.constant';

@Component({
  selector: 'app-category-icon',
  standalone: false,
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.scss']
})
export class CategoryIconComponent {
  @Input() categoria: string = '';
  @Input() size: 'small' | 'medium' = 'medium';

  get categoriaInfo() {
    return CATEGORIAS.find(c => c.key === this.categoria);
  }
}
