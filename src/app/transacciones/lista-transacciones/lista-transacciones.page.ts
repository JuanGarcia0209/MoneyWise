import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../../core/services/transaccion.service';
import { Transaccion } from '../../core/models/transaccion.model';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormularioTransaccionModal } from '../formulario-transaccion-modal/formulario-transaccion-modal.component';

@Component({
  selector: 'app-lista-transacciones',
  standalone: false,
  templateUrl: './lista-transacciones.page.html',
  styleUrls: ['./lista-transacciones.page.scss']
})
export class ListaTransaccionesPage implements OnInit {
  transacciones: Transaccion[] = [];
  tipoFiltro: string = 'todos';
  categoriaFiltro: string = '';
  busqueda: string = '';

  constructor(private transaccionService: TransaccionService, private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    this.transaccionService.transacciones$.subscribe(list => this.transacciones = list);
  }

  async abrirFormulario(transaccion?: Transaccion) {
    const modal = await this.modalCtrl.create({
      component: FormularioTransaccionModal,
      componentProps: { transaccion }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data?.saved) {
      await this.router.navigate(['/tabs/tabs/transacciones']);
    }
  }

  async verDetalle(transaccion: Transaccion) {
    // Usar navegación a página de detalles que ya implementa la vista y acciones.
    await this.router.navigate(['/tabs/tabs/transacciones/detalle', transaccion.id]);
  }

  async eliminar(id: string) {
    if (confirm('¿Deseas eliminar esta transacción?')) {
      await this.transaccionService.delete(id);
    }
  }
}
