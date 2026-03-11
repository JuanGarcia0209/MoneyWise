import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Transaccion } from '../../core/models/transaccion.model';
import { TransaccionService } from '../../core/services/transaccion.service';

@Component({
  selector: 'app-formulario-transaccion-modal',
  standalone: false,
  templateUrl: './formulario-transaccion-modal.component.html',
  styleUrls: ['./formulario-transaccion-modal.component.scss']
})
export class FormularioTransaccionModal {
  @Input() transaccion?: Transaccion;

  tipo: 'ingreso' | 'gasto' = 'gasto';
  categoria: string = '';
  fecha: string = new Date().toISOString();
  monto: number = 0;
  descripcion: string = '';
  comprobante: string = '';

  constructor(private modalCtrl: ModalController, private transaccionService: TransaccionService, private router: Router) {}

  ngOnInit() {
    if (this.transaccion) {
      this.tipo = this.transaccion.tipo;
      this.categoria = this.transaccion.categoria;
      this.fecha = this.transaccion.fecha;
      this.monto = this.transaccion.monto;
      this.descripcion = this.transaccion.descripcion || '';
      this.comprobante = this.transaccion.comprobante || '';
    }
  }

  async guardar(data?: Transaccion) {
    const payload = data ?? {
      id: this.transaccion?.id,
      tipo: this.tipo,
      categoria: this.categoria,
      fecha: this.fecha,
      monto: this.monto,
      descripcion: this.descripcion,
      comprobante: this.comprobante
    };

    //let wasNew = !this.transaccion?.id;
    if (payload.id) await this.transaccionService.update(payload);
    else await this.transaccionService.add(payload);

    await this.modalCtrl.dismiss({ saved: true, transaccion: payload });

    // if (wasNew) {
    //   await this.router.navigate(['/tabs/transacciones']);
    // }
  }

  cancelar() { this.modalCtrl.dismiss({ saved: false }); }

  onFotoSeleccionada(foto: string) { this.comprobante = foto; }
  onFotoEliminada() { this.comprobante = ''; }
}
