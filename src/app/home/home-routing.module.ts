import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedDataPointsComponent } from '../components/selected-data-points/selected-data-points.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'embedView/:ids', component: SelectedDataPointsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
