'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Languages,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';

type Panel = 'about' | 'services' | 'rates' | 'terms' | 'contact';

const navigation: { id: Panel; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'rates', label: 'Rates' },
  { id: 'terms', label: 'Terms' },
  { id: 'contact', label: 'Contact' },
];

const services = [
  ['01', 'Product clarity', 'A sharper product story and a roadmap your team can act on.'],
  ['02', 'Experience review', 'Find the friction and make the app feel simpler, faster, and more useful.'],
  ['03', 'Team momentum', 'Align product, design, and engineering around clear decisions.'],
];

function AboutPanel() {
  return (
    <div className="panel-content about-panel">
      <span className="panel-kicker">Independent product consultant</span>
      <h2>Twenty years of product judgment, applied where it matters.</h2>
      <p className="panel-lead">
        G works with founders and product leaders to turn ambiguity into useful
        decisions—and useful decisions into better apps.
      </p>
      <div className="facts">
        <div><strong>20+</strong><span>years in product</span></div>
        <div><Languages size={24} /><span>English / Français</span></div>
        <div><strong>1:1</strong><span>direct senior counsel</span></div>
      </div>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="panel-content">
      <span className="panel-kicker">How G helps</span>
      <h2>A senior partner for the moments that matter.</h2>
      <div className="service-list">
        {services.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
            <ArrowUpRight size={18} />
          </article>
        ))}
      </div>
    </div>
  );
}

function RatesPanel() {
  return (
    <div className="panel-content">
      <span className="panel-kicker">Sample pricing · USD</span>
      <h2>Start small. Go deeper when it’s useful.</h2>
      <div className="rate-list">
        <article>
          <div><span>Product review</span><small>90 minutes</small></div>
          <strong>$650</strong>
          <p><Check size={15} /> Review, working session, written priorities</p>
        </article>
        <article className="rate-featured">
          <div><span>Focused sprint</span><small>2 weeks</small></div>
          <strong>$8,500</strong>
          <p><Check size={15} /> Interviews, diagnosis, actionable direction</p>
        </article>
        <article>
          <div><span>Ongoing counsel</span><small>per month</small></div>
          <strong>$6,000</strong>
          <p><Check size={15} /> Weekly session and async decision support</p>
        </article>
      </div>
      <p className="fine-print">Final scope and fee are agreed in writing before work begins.</p>
    </div>
  );
}

function TermsPanel() {
  const terms = [
    ['Scope & payment', 'Written scope for every engagement. Invoices are due within 14 days.'],
    ['Confidentiality', 'Your product information stays confidential. Mutual NDAs are welcome.'],
    ['Ownership', 'Paid project deliverables belong to you; G retains pre-existing methods and tools.'],
    ['Changes & cancellation', 'Scope changes are agreed in writing. Sessions need 48 hours’ notice.'],
  ];
  return (
    <div className="panel-content">
      <span className="panel-kicker">Good agreements make good work</span>
      <h2>Simple, professional terms.</h2>
      <div className="terms-list">
        {terms.map(([title, text], index) => (
          <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
      <p className="fine-print">Demo terms only—not legal advice. Final agreements should be reviewed for the laws that apply.</p>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="panel-content contact-panel">
      <span className="panel-kicker">Let’s talk</span>
      <h2>Have an app that could be better?</h2>
      <p className="panel-lead">Tell G what’s working, what isn’t, and where you want to go next.</p>
      <div className="contact-list">
        <a href="mailto:hello@g.consulting">
          <Mail size={21} /><span><small>Email</small>hello@g.consulting</span><ArrowUpRight size={18} />
        </a>
        <a href="tel:+15550142080">
          <Phone size={21} /><span><small>Phone</small>+1 555 014 2080</span><ArrowUpRight size={18} />
        </a>
        <a href="https://wa.me/15550142080" target="_blank" rel="noreferrer">
          <MessageCircle size={21} /><span><small>WhatsApp</small>Message G</span><ArrowUpRight size={18} />
        </a>
        <a href="mailto:hello@g.consulting?subject=Book%20a%2020-minute%20intro">
          <CalendarDays size={21} /><span><small>20-minute intro</small>Book a conversation</span><ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}

const panels: Record<Panel, () => React.ReactNode> = {
  about: AboutPanel,
  services: ServicesPanel,
  rates: RatesPanel,
  terms: TermsPanel,
  contact: ContactPanel,
};

export default function Home() {
  const [activePanel, setActivePanel] = useState<Panel>('about');
  const ActivePanel = panels[activePanel];

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="brand" onClick={() => setActivePanel('about')} aria-label="Show about G">
          <span>G</span>
          <span className="brand-copy">Independent product consultant</span>
        </button>
        <nav aria-label="Information sections">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={activePanel === item.id ? 'active' : ''}
              onClick={() => setActivePanel(item.id)}
              aria-pressed={activePanel === item.id}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => setActivePanel('contact')}>
          Contact G <ArrowUpRight size={16} />
        </button>
      </header>

      <div className="card-layout">
        <section className="identity-panel" aria-label="G profile">
          <div className="availability"><span /> Available for select projects</div>
          <div className="identity-copy">
            <p>I help make</p>
            <h1>better<br /><em>apps.</em></h1>
          </div>
          <div className="identity-bottom">
            <p>Product strategy · Experience design · Team advisory</p>
            <p>English / Français</p>
          </div>
        </section>

        <section className="information-panel" aria-live="polite">
          <div className="panel-frame" key={activePanel}>
            <ActivePanel />
          </div>
          <div className="quick-contact">
            <span>Ready when you are.</span>
            <a href="mailto:hello@g.consulting"><Mail size={15} /> hello@g.consulting</a>
          </div>
        </section>
      </div>
    </main>
  );
}
