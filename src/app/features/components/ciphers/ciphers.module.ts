import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CiphersRoutingModule } from './ciphers-routing.module';
import { CiphersComponent } from './ciphers.component';

@NgModule({
  declarations: [CiphersComponent],
  imports: [CommonModule, CiphersRoutingModule]
})
export class CiphersModule {}
