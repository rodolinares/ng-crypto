import { NgModule } from '@angular/core';

import { HashingRoutingModule } from './hashing-routing.module';
import { HashingComponent } from './hashing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HashingComponent],
  imports: [HashingRoutingModule, SharedModule]
})
export class HashingModule {}
