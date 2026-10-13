import { Component, signal } from '@angular/core';

// Messages are delivered by FormSubmit (formsubmit.co) to this address.
// The first submission after deploy sends an activation email to it; click the link once.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@brandif.co.uk';
const FALLBACK_EMAIL = 'info@brandif.co.uk';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  standalone: false
})
export class ContactComponent {
  faqs = [
    {
      question: 'How quickly can you respond to enquiries?',
      answer: 'We typically respond to all enquiries within 24 hours during business days, often much faster.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes. Initial 30-minute consultations are always free with no obligation.'
    },
    {
      question: 'What information should I prepare before contacting you?',
      answer: "Just a general idea of what you're trying to achieve. We'll guide the conversation from there."
    },
    {
      question: 'Do you require contracts or deposits?',
      answer: 'Yes, all projects proceed under clear written agreements. Deposits vary by project size, typically 30-50% to commence work.'
    },
    {
      question: 'Can you work with clients outside Greater London?',
      answer: 'Absolutely. We work with clients throughout the UK and internationally.'
    }
  ];

  processSteps = [
    {
      title: 'We Review Your Enquiry',
      description: "We'll read your message carefully and prepare relevant questions or recommendations."
    },
    {
      title: 'Initial Conversation',
      description: "We'll schedule a call to discuss your needs in detail and determine if we're a good fit."
    },
    {
      title: 'Proposal & Next Steps',
      description: "If it makes sense to work together, we'll provide a clear proposal outlining approach, timeline, and investment."
    }
  ];

  status = signal<'idle' | 'sending' | 'sent' | 'email' | 'error'>('idle');

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    if (data.get('_honey')) {
      return; // honeypot filled: treat as spam
    }

    if (!FORM_ENDPOINT) {
      const subject = `Website enquiry from ${data.get('name')}`;
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone') || '-'}`,
        `Interest: ${data.get('interest') || '-'}`,
        '',
        `${data.get('message')}`
      ].join('\n');
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.status.set('email');
      return;
    }

    data.append('_subject', `Website enquiry from ${data.get('name')}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    this.status.set('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && String(result.success) !== 'false') {
        form.reset();
        this.status.set('sent');
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }

  openFaq: number | null = null;

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
