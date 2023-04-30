import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CiphersComponent } from './ciphers.component';

const routes: Routes = [{ path: '', component: CiphersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiphersRoutingModule {}
