import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaccion } from '../../../../core/models/transaccion.model';
import { CATEGORIAS } from '../../../../core/constants/categorias.constant';

@Component({
  selector: 'app-transaction-item',
  standalone: false,
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent {
  @Input() transaccion!: Transaccion;
  @Output() onClick = new EventEmitter<void>();

  get categoriaInfo() {
    return CATEGORIAS.find(c => c.key === this.transaccion.categoria);
  }

  handleClick() {
    this.onClick.emit();
  }
}
