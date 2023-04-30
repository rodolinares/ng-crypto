import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, NzLayoutModule],
  exports: [LayoutComponent]
})
export class CoreModule {}
