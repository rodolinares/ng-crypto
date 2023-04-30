import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EncodersRoutingModule } from './encoders-routing.module';
import { EncodersComponent } from './encoders.component';

@NgModule({
  declarations: [EncodersComponent],
  imports: [CommonModule, EncodersRoutingModule]
})
export class EncodersModule {}
