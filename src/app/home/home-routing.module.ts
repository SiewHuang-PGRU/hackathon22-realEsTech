import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../components/loading/loading.component';
import { SelectedDataPointsComponent } from '../components/selected-data-points/selected-data-points.component';
import { NewLaunchPage } from '../new-launch/new-launch.page';
import { ResalePage } from '../resale/resale.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'embedView/:ids', component: SelectedDataPointsComponent},
  { path: 'loading/:ids', component: LoadingComponent },
  { path: 'new-launch/:ids', component: NewLaunchPage },
  { path: 'resale/:ids', component: ResalePage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
