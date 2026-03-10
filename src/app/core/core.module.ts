import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [
    // servicios y guards
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) throw new Error('CoreModule ya está cargado. Importar solo en AppModule.');
  }
}

// import { NgModule, Optional, SkipSelf } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { HttpClientModule } from '@angular/common/http';
// import { AuthGuard } from './guards/auth.guard';

// @NgModule({
//   imports: [
//     CommonModule,
//     IonicModule,
//     HttpClientModule
//   ],
//   providers: [
//     AuthGuard
//     // los servicios usan providedIn: 'root'
//   ]
// })
// export class CoreModule {
//   constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
//     if (parentModule) {
//       throw new Error('CoreModule already loaded. Import it in the AppModule only.');
//     }
//   }
// }
