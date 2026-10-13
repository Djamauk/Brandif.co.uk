import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  standalone: false
})
export class WorkComponent {
  selectedCategory: string = 'All';
  
  categories = [
    'All', 'AI Solutions', 'Web Development', 'eCommerce', 'Branding', 'Marketing', 'SEO'
  ];

  caseStudies = [
    {
      title: 'AI Transformation',
      category: 'AI Solutions',
      image: 'images/ai-chatbot-hero.png'
    },
    {
      title: 'eCommerce Scaling',
      category: 'eCommerce',
      image: 'images/ecommerce-hero.png'
    },
    {
      title: 'Global SEO Success',
      category: 'SEO',
      image: 'images/seo-hero.png'
    }
  ];

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredCaseStudies() {
    if (this.selectedCategory === 'All') return this.caseStudies;
    return this.caseStudies.filter(cs => cs.category === this.selectedCategory);
  }
}
