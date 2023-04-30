import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconDefinition } from '@ant-design/icons-angular';
import { BulbOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { LayoutComponent } from './components/layout/layout.component';

const icons: IconDefinition[] = [BulbOutline];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzLayoutModule,
    NzTypographyModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule {}
