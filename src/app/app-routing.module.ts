import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirige a tabs por defecto; AuthGuard dentro de tabs redirige a login si es necesario
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },

  // Lazy loading del módulo de autenticación
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  // Lazy loading de Tabs
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
  },

  // Ruta comodín (opcional)
  { path: '**', redirectTo: 'tabs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
