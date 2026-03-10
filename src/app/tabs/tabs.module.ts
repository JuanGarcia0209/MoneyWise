import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TabsPage } from './tabs/tabs.page';
import { TabsRoutingModule } from './tabs-routing.module';

@NgModule({
  declarations: [TabsPage],
  imports: [
    CommonModule,
    IonicModule,
    TabsRoutingModule
  ]
})
export class TabsModule {}
