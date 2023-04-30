import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BulbOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const icons = [BulbOutline];

@NgModule({
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  exports: [
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzLayoutModule,
    NzListModule,
    NzTypographyModule
  ]
})
export class SharedModule {}
