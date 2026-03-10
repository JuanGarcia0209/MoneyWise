import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaccion } from '../../../../core/models/transaccion.model';
import { CATEGORIAS } from '../../../../core/constants/categorias.constant';

@Component({
  selector: 'app-transaction-detail',
  standalone: false,
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent {
  @Input() transaccion!: Transaccion;
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  get categoriaInfo() {
    return CATEGORIAS.find(c => c.key === this.transaccion.categoria);
  }

  edit() { this.onEdit.emit(); }
  delete() { this.onDelete.emit(); }
}
