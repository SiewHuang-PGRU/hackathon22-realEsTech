import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLaunchPageRoutingModule } from './new-launch-routing.module';

import { NewLaunchPage } from './new-launch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLaunchPageRoutingModule
  ],
  declarations: []
})
export class NewLaunchPageModule {}
