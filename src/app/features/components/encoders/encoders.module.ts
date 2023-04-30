import { NgModule } from '@angular/core';

import { EncodersRoutingModule } from './encoders-routing.module';
import { EncodersComponent } from './encoders.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EncodersComponent],
  imports: [EncodersRoutingModule, SharedModule]
})
export class EncodersModule {}
