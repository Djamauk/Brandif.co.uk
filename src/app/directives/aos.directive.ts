import { Directive, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Directive({
  selector: '[appAos]',
  standalone: true
})
export class AosDirective implements OnInit, OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      return; // leave content visible, no animation
    }
    document.documentElement.classList.add('aos-ready');
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      anchorPlacement: 'top-bottom'
    });
    AOS.refresh();
  }

  ngOnDestroy() {
    // AOS doesn't have a formal destroy
  }
}
