import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageSeo {
  title: string;
  description: string;
  /** Path such as '/about'. Used for the canonical URL and og:url. */
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

const SITE_URL = 'https://brandif.co.uk';
const DEFAULT_IMAGE = `${SITE_URL}/images/brandif-logo-light.png`;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  set(page: PageSeo) {
    const url = this.absoluteUrl(page.path);
    const image = page.image ?? DEFAULT_IMAGE;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });

    this.meta.updateTag({ property: 'og:site_name', content: 'Brandif' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_GB' });
    this.meta.updateTag({ property: 'og:type', content: page.type ?? 'website' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private absoluteUrl(path: string): string {
    const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
    return clean ? `${SITE_URL}${clean}/` : `${SITE_URL}/`;
  }

  private setCanonical(url: string) {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
