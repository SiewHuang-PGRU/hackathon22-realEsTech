import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLaunchPage } from './new-launch.page';

const routes: Routes = [
  {
    path: '',
    component: NewLaunchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLaunchPageRoutingModule {}
