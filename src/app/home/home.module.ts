import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SectionComponent } from '../components/section/section.component';
import { SelectedDataPointsComponent } from '../components/selected-data-points/selected-data-points.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,SectionComponent, SelectedDataPointsComponent]
})
export class HomePageModule {}
