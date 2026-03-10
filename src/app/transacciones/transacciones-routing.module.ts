import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTransaccionesPage } from './lista-transacciones/lista-transacciones.page';
import { DetalleTransaccionPage } from './detalle-transaccion/detalle-transaccion.page';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: ListaTransaccionesPage, canActivate: [AuthGuard] },
  { path: 'detalle/:id', component: DetalleTransaccionPage, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesRoutingModule {}
