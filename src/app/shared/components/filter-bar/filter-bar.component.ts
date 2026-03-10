import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CATEGORIAS } from '../../../core/constants/categorias.constant';
import { TIPOS_TRANSACCION } from 'src/app/core/constants/tipo-transaccion.constant';

@Component({
  selector: 'app-filter-bar',
  standalone: false,
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  @Input() tipoSeleccionado: string = 'todos';
  @Input() categoriaSeleccionada: string = 'todos';
  @Input() buscarTexto: string = '';

  @Output() tipoSeleccionadoChange = new EventEmitter<string>();
  @Output() categoriaSeleccionadaChange = new EventEmitter<string>();
  @Output() onBuscarChange = new EventEmitter<string>();

  tipos = [{ key: 'todos', label: 'Todos' }, ...TIPOS_TRANSACCION];
  categorias = [{ key: 'todos', label: 'Todas' }, ...CATEGORIAS];

  tipoChanged(event: any) {
    this.tipoSeleccionado = event.detail.value;
    this.tipoSeleccionadoChange.emit(event.detail.value);
  }

  categoriaChanged(event: any) {
    this.categoriaSeleccionada = event.detail.value;
    this.categoriaSeleccionadaChange.emit(event.detail.value);
  }

  buscarChanged(event: any) {
    this.onBuscarChange.emit(event.detail.value);
  }
}
