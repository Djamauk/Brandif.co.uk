import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'brandif-theme';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    this.updateTheme();
    if (this.isBrowser) {
      localStorage.setItem(this.THEME_KEY, this.isDarkMode() ? 'dark' : 'light');
    }
  }

  private getInitialTheme(): boolean {
    if (!this.isBrowser) {
      return false; // prerendered HTML is light; the browser applies the saved theme on load
    }
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private updateTheme() {
    if (!this.isBrowser) {
      return;
    }
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
