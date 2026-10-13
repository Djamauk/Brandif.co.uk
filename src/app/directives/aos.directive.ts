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
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: 'top-bottom'
    });
    AOS.refresh();
  }

  ngOnDestroy() {
    // AOS doesn't have a formal destroy
  }
}
