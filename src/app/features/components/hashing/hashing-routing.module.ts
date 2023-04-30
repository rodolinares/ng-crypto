import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HashingComponent } from './hashing.component';

const routes: Routes = [{ path: '', component: HashingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashingRoutingModule {}
