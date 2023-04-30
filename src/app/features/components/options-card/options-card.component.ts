import { Component } from '@angular/core';

import { NzSelectOptionInterface } from 'ng-zorro-antd/select';

import { ALGORITHM_OPTIONS } from 'src/app/shared/utility/constants';

@Component({
  selector: 'app-options-card',
  templateUrl: './options-card.component.html',
  styleUrls: ['./options-card.component.scss']
})
export class OptionsCardComponent {
  algorithmOptions: NzSelectOptionInterface[] = ALGORITHM_OPTIONS;
}
