import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResalePageRoutingModule } from './resale-routing.module';

import { ResalePage } from './resale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResalePageRoutingModule
  ],
  declarations: [ResalePage]
})
export class ResalePageModule {}
