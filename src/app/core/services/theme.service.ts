import { Injectable } from '@angular/core';

import { THEME } from 'src/app/shared/utility/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = THEME.default;

  loadTheme(firstLoad = true) {
    this.currentTheme = localStorage.getItem('theme') || THEME.default;
    const theme = this.currentTheme;
    if (firstLoad) document.documentElement.classList.add(theme);

    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        e => {
          if (!firstLoad) document.documentElement.classList.add(theme);
          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(e);
        },
        e => reject(e)
      );
    });
  }

  toggleTheme() {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    return this.loadTheme(false);
  }

  private loadCss(href: string, id: string) {
    return new Promise<Event>((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  private reverseTheme(theme: string) {
    return theme === THEME.dark ? THEME.default : THEME.dark;
  }

  private removeUnusedTheme(theme: string) {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) document.head.removeChild(removedThemeStyle);
  }
}
