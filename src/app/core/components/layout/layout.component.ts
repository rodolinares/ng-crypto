import { Component } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private themeService: ThemeService) {}

  async onToggle() {
    await this.themeService.toggleTheme();
  }
}
