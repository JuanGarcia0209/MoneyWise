import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Transaccion } from '../../../../core/models/transaccion.model';
import { CATEGORIAS } from '../../../../core/constants/categorias.constant';
import { TIPOS_TRANSACCION } from 'src/app/core/constants/tipo-transaccion.constant';

@Component({
  selector: 'app-transaction-form',
  standalone: false,
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  @Input() transaccion?: Transaccion;

  @Output() onSave = new EventEmitter<Transaccion>();
  @Output() onCancel = new EventEmitter<void>();

  form: FormGroup;

  categorias = CATEGORIAS;
  tipos = TIPOS_TRANSACCION;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      tipo: ['gasto', Validators.required],

      categoria: [null, Validators.required],

      fecha: [new Date().toISOString(), Validators.required],

      monto: ['', [
        Validators.required,
        Validators.min(0.01)
      ]],

      descripcion: [
        null,
        Validators.maxLength(250)
      ],

      comprobante: [null]

    });

  }

  ngOnInit() {
    if (this.transaccion) {
      this.form.patchValue(this.transaccion);
    }
  }

  save() {

    if (this.form.invalid) return;

    const data: Transaccion = {
      ...this.transaccion,
      ...this.form.value,
      monto: Number(this.form.value.monto)
    };

    this.onSave.emit(data);

  }

  cancel() {
    this.onCancel.emit();
  }

  onFotoSeleccionada(foto: string) {
    this.form.patchValue({ comprobante: foto });
  }

  onFotoEliminada() {
    this.form.patchValue({ comprobante: null });
  }

}
