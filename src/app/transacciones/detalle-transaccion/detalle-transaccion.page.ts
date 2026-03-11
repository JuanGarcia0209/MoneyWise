import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionService } from '../../core/services/transaccion.service';
import { Transaccion } from '../../core/models/transaccion.model';
import { ModalController } from '@ionic/angular';
import { FormularioTransaccionModal } from '../formulario-transaccion-modal/formulario-transaccion-modal.component';

@Component({
  selector: 'app-detalle-transaccion',
  standalone: false,
  templateUrl: './detalle-transaccion.page.html',
  styleUrls: ['./detalle-transaccion.page.scss']
})
export class DetalleTransaccionPage implements OnInit {
  transaccion?: Transaccion;

  constructor(
    private route: ActivatedRoute,
    private transaccionService: TransaccionService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.transaccionService.transacciones$.subscribe(list => {
      this.transaccion = list.find(t => t.id === id);
    });
  }

  async editar() {
    if (!this.transaccion) return;
    const modal = await this.modalCtrl.create({
      component: FormularioTransaccionModal,
      componentProps: { transaccion: this.transaccion }
    });
    await modal.present();
  }

  async eliminar() {
    if (!this.transaccion) return;
    if (confirm('¿Deseas eliminar esta transacción?')) {
      await this.transaccionService.delete(this.transaccion.id!);
      this.router.navigate(['/tabs/tabs/transacciones']);
    }
  }
}
