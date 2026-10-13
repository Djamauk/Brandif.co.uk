import { RenderMode, ServerRoute } from '@angular/ssr';

// Every article page is prerendered to its own HTML file at build time.
const ARTICLE_IDS = [
  'ai-voice-agents-transforming',
  'choosing-right-ecommerce-platform',
  'ppc-vs-seo-investment',
  'seo-in-2026-changes',
  'roi-chatbot-implementation'
];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'insights/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => ARTICLE_IDS.map((id) => ({ id }))
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
