import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amount-display',
  standalone: false,
  templateUrl: './amount-display.component.html',
  styleUrls: ['./amount-display.component.scss']
})
export class AmountDisplayComponent {
  @Input() monto: number = 0;
  @Input() tipo: 'ingreso' | 'gasto' | 'neutral' = 'neutral';
  @Input() tamaño: 'small' | 'medium' | 'large' = 'medium';

  get color() {
    switch(this.tipo) {
      case 'ingreso': return 'success';
      case 'gasto': return 'danger';
      default: return 'medium';
    }
  }

  get fontSize() {
    switch(this.tamaño) {
      case 'small': return '14px';
      case 'medium': return '18px';
      case 'large': return '24px';
      default: return '18px';
    }
  }
}
