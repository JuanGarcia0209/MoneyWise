import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ListaTransaccionesPage } from './lista-transacciones/lista-transacciones.page';
import { DetalleTransaccionPage } from './detalle-transaccion/detalle-transaccion.page';
import { FormularioTransaccionModal } from './formulario-transaccion-modal/formulario-transaccion-modal.component';
import { TransaccionesRoutingModule } from './transacciones-routing.module';

@NgModule({
  declarations: [
    ListaTransaccionesPage,
    DetalleTransaccionPage,
    FormularioTransaccionModal
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TransaccionesRoutingModule
  ]
})
export class TransaccionesModule {}
