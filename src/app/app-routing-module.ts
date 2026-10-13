import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AiVoiceAgentsComponent } from './pages/services/ai-voice-agents/ai-voice-agents';
import { AiChatbotsComponent } from './pages/services/ai-chatbots/ai-chatbots';
import { WebAppDevelopmentComponent } from './pages/services/web-app-development/web-app-development';
import { SocialMediaMarketingComponent } from './pages/services/social-media-marketing/social-media-marketing';
import { SeoServicesComponent } from './pages/services/seo-services/seo-services';
import { PpcAdvertisingComponent } from './pages/services/ppc-advertising/ppc-advertising';
import { EcommerceSolutionsComponent } from './pages/services/ecommerce-solutions/ecommerce-solutions';
import { DesignBrandingComponent } from './pages/services/design-branding/design-branding';
import { DigitalConsultancyComponent } from './pages/services/digital-consultancy/digital-consultancy';
import { WorkComponent } from './pages/work/work';
import { AboutComponent } from './pages/about/about';
import { InsightsComponent } from './pages/insights/insights';
import { ArticleDetailComponent } from './pages/insights/article-detail/article-detail';
import { ContactComponent } from './pages/contact/contact';
import { GetQuoteComponent } from './pages/contact/get-quote/get-quote';
import { BookConsultationComponent } from './pages/contact/book-consultation/book-consultation';
import { PrivacyComponent } from './pages/legal/privacy/privacy';
import { CookiesComponent } from './pages/legal/cookies/cookies';
import { TermsComponent } from './pages/legal/terms/terms';
import { ServicesListComponent } from './pages/services/services-list/services-list';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Brandif | AI Chatbots, Voice Agents & Web Design in London', description: 'Brandif is a Greater London digital agency building AI chatbots, AI voice agents, websites and digital marketing for UK businesses.' } },
  { path: 'services', component: ServicesListComponent, data: { title: 'Digital Services | Brandif', description: 'AI chatbots, AI voice agents, web development, SEO, PPC, social media, eCommerce and branding from Brandif, a Greater London digital agency.' } },
  { path: 'services/ai-voice-agents', component: AiVoiceAgentsComponent, data: { title: 'AI Voice Agents for Business | Brandif', description: 'AI voice agents that answer calls, qualify enquiries and book appointments for your business, built by Brandif in Greater London.' } },
  { path: 'services/ai-chatbots', component: AiChatbotsComponent, data: { title: 'AI Chatbots for Business | Brandif', description: 'Custom AI chatbots that answer customer questions, capture leads and support your team around the clock, built by Brandif.' } },
  { path: 'services/web-app-development', component: WebAppDevelopmentComponent, data: { title: 'Web and App Development | Brandif', description: 'Website and web app development for UK businesses, from design to launch, by the Brandif team.' } },
  { path: 'services/social-media-marketing', component: SocialMediaMarketingComponent, data: { title: 'Social Media Marketing | Brandif', description: 'Social media marketing that builds your audience and brings in enquiries, planned and managed by Brandif.' } },
  { path: 'services/seo-services', component: SeoServicesComponent, data: { title: 'SEO Services | Brandif', description: 'SEO services covering technical fixes, content and search visibility for UK businesses, from Brandif.' } },
  { path: 'services/ppc-advertising', component: PpcAdvertisingComponent, data: { title: 'PPC Advertising | Brandif', description: 'PPC advertising managed by Brandif: campaign setup, targeting and tracking focused on enquiries and sales.' } },
  { path: 'services/ecommerce-solutions', component: EcommerceSolutionsComponent, data: { title: 'eCommerce Solutions | Brandif', description: 'eCommerce store design, build and growth support for UK online sellers, from Brandif.' } },
  { path: 'services/design-branding', component: DesignBrandingComponent, data: { title: 'Design and Branding | Brandif', description: 'Brand identity and design for businesses that want a clear, consistent look across web and print, by Brandif.' } },
  { path: 'services/digital-consultancy', component: DigitalConsultancyComponent, data: { title: 'Digital Consultancy | Brandif', description: 'Digital consultancy from Brandif: practical advice on strategy, tools and technology for growing UK businesses.' } },
  { path: 'work', component: WorkComponent, data: { title: 'Our Work | Brandif', description: 'A look at the kinds of projects Brandif takes on, and how to become a foundation client.' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Brandif | Greater London Digital Agency', description: 'Brandif is a Greater London digital agency, trading name of Enatingal Ltd. Meet the team and see how we work.' } },
  { path: 'insights', component: InsightsComponent, data: { title: 'Insights on AI, SEO and Digital Growth | Brandif', description: 'Articles from Brandif on AI chatbots, voice agents, SEO, PPC and eCommerce for UK businesses.' } },
  { path: 'insights/:id', component: ArticleDetailComponent },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Brandif | Book a Consultation or Get a Quote', description: 'Contact Brandif to book a free consultation, request a quote or send a message. We reply within 24 hours.' } },
  { path: 'contact/get-quote', component: GetQuoteComponent, data: { title: 'Request a Quote | Brandif', description: 'Tell Brandif about your project and request a quote.' } },
  { path: 'contact/book-consultation', component: BookConsultationComponent, data: { title: 'Book a Free Consultation | Brandif', description: 'Book a free 30-minute consultation with Brandif to discuss your goals and options.' } },
  { path: 'privacy', component: PrivacyComponent, data: { title: 'Privacy Policy | Brandif', description: 'How Brandif, a trading name of Enatingal Ltd, collects and uses your personal data.' } },
  { path: 'privacy/cookies', component: CookiesComponent, data: { title: 'Cookie Policy | Brandif', description: 'How Brandif uses cookies on this website.' } },
  { path: 'terms', component: TermsComponent, data: { title: 'Terms of Service | Brandif', description: 'The terms that apply when you use the Brandif website or work with Brandif.' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
