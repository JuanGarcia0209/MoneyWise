import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar-category',
  standalone: false,
  templateUrl: './progress-bar-category.component.html',
  styleUrls: ['./progress-bar-category.component.scss']
})
export class ProgressBarCategoryComponent {
  @Input() categoria: string = '';
  @Input() porcentaje: number = 0; // 0 a 100
  @Input() color: string = '#3880ff';
  @Input() monto: number = 0;
}
