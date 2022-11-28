import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResalePage } from './resale.page';

const routes: Routes = [
  {
    path: '',
    component: ResalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResalePageRoutingModule {}
