import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ArrowLeftOutline, BulbOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const icons = [ArrowLeftOutline, BulbOutline];

@NgModule({
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  exports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzListModule,
    NzPageHeaderModule,
    NzTypographyModule
  ]
})
export class SharedModule {}
