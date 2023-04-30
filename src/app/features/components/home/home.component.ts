import { Component } from '@angular/core';

import { HOME_CARDS } from 'src/app/shared/utility/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = HOME_CARDS;
}
