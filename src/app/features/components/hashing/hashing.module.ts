import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HashingRoutingModule } from './hashing-routing.module';
import { HashingComponent } from './hashing.component';

@NgModule({
  declarations: [HashingComponent],
  imports: [CommonModule, HashingRoutingModule]
})
export class HashingModule {}
