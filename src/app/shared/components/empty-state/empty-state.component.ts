import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: false,
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() mensaje: string = 'No hay datos';
  @Input() icono: string = 'alert-circle-outline';
  @Input() accion: string = 'Agregar';

  @Output() onAccion = new EventEmitter<void>();

  handleClick() {
    this.onAccion.emit();
  }
}
