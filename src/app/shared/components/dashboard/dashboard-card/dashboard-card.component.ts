import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone:false,
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input() titulo: string = '';
  @Input() monto: number = 0;
  @Input() tipo: 'ingreso' | 'gasto' | 'saldo' = 'saldo';
  @Input() icono: string = 'wallet-outline';

  get color() {
    switch (this.tipo) {
      case 'ingreso': return 'success';
      case 'gasto': return 'danger';
      default: return 'medium';
    }
  }
}
