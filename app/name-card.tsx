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
type Language = 'en' | 'fr';

const content = {
  en: {
    nav: { about: 'About', services: 'Services', rates: 'Rates', terms: 'Terms', contact: 'Contact' },
    brand: 'aplevelup',
    brandTag: 'Product consultancy by G',
    availability: 'Available for select projects',
    heroPrefix: 'I help products',
    heroMain: 'level',
    heroAccent: 'up.',
    heroFooter: 'Product strategy · Experience design · Team advisory',
    aboutKicker: 'Independent product consultant',
    aboutTitle: 'Twenty years of product judgment, applied where it matters.',
    aboutLead: 'G works with founders and product leaders to turn ambiguity into useful decisions—and useful decisions into better apps.',
    years: 'years in product',
    languages: 'English / Français',
    counsel: 'direct senior counsel',
    servicesKicker: 'How G helps',
    servicesTitle: 'A senior partner for the moments that matter.',
    services: [
      ['Product clarity', 'A sharper product story and a roadmap your team can act on.'],
      ['Experience review', 'Find the friction and make the app feel simpler, faster, and more useful.'],
      ['Team momentum', 'Align product, design, and engineering around clear decisions.'],
    ],
    ratesKicker: 'Simple pricing · USD',
    ratesTitle: 'Senior product advice, billed clearly.',
    rateName: 'Product consulting',
    ratePeriod: 'per hour',
    rateDescription: 'Direct senior support for product decisions, experience reviews, and team alignment.',
    rateNote: 'US$150 per hour · Minimum two-hour engagement · Final scope agreed in writing.',
    termsKicker: 'Good agreements make good work',
    termsTitle: 'Simple, professional terms.',
    terms: [
      ['Scope & payment', 'Written scope for every engagement. Invoices are due within 14 days.'],
      ['Confidentiality', 'Your product information stays confidential. Mutual NDAs are welcome.'],
      ['Ownership', 'Paid project deliverables belong to you; G retains pre-existing methods and tools.'],
      ['Changes & cancellation', 'Scope changes are agreed in writing. Sessions need 48 hours’ notice.'],
    ],
    termsNote: 'Demo terms only—not legal advice. Final agreements should be reviewed for the laws that apply.',
    contactKicker: 'Let’s talk',
    contactTitle: 'Have an app that could be better?',
    contactLead: 'Tell G what’s working, what isn’t, and where you want to go next.',
    whatsapp: 'Message G',
    intro: 'Book a conversation',
    quick: 'Ready when you are.',
    contactG: 'Contact G',
  },
  fr: {
    nav: { about: 'À propos', services: 'Services', rates: 'Tarifs', terms: 'Conditions', contact: 'Contact' },
    brand: 'aplevelup',
    brandTag: 'Conseil produit par G',
    availability: 'Disponible pour certains projets',
    heroPrefix: 'J’aide les produits à',
    heroMain: 'passer',
    heroAccent: 'un cap.',
    heroFooter: 'Stratégie produit · Design d’expérience · Conseil d’équipe',
    aboutKicker: 'Consultant produit indépendant',
    aboutTitle: 'Vingt ans de discernement produit, là où cela compte.',
    aboutLead: 'G accompagne les fondateurs et les responsables produit pour transformer l’ambiguïté en décisions utiles—et ces décisions en meilleures applications.',
    years: 'ans dans le produit',
    languages: 'English / Français',
    counsel: 'conseil senior direct',
    servicesKicker: 'Comment G aide',
    servicesTitle: 'Un partenaire senior aux moments décisifs.',
    services: [
      ['Clarté produit', 'Une proposition produit plus nette et une feuille de route que votre équipe peut suivre.'],
      ['Revue d’expérience', 'Repérer les frictions et rendre votre application plus simple, rapide et utile.'],
      ['Élan d’équipe', 'Aligner produit, design et ingénierie autour de décisions claires.'],
    ],
    ratesKicker: 'Tarification simple · USD',
    ratesTitle: 'Conseil produit senior, facturé clairement.',
    rateName: 'Conseil produit',
    ratePeriod: 'par heure',
    rateDescription: 'Un accompagnement senior direct pour les décisions produit, les revues d’expérience et l’alignement des équipes.',
    rateNote: '150 $US par heure · Engagement minimum de deux heures · Périmètre final validé par écrit.',
    termsKicker: 'De bons accords créent du bon travail',
    termsTitle: 'Des conditions simples et professionnelles.',
    terms: [
      ['Périmètre & paiement', 'Chaque mission commence par un périmètre écrit. Les factures sont dues sous 14 jours.'],
      ['Confidentialité', 'Vos informations produit restent confidentielles. Les accords de confidentialité réciproques sont bienvenus.'],
      ['Propriété', 'Les livrables réglés vous appartiennent ; G conserve ses méthodes et outils préexistants.'],
      ['Changements & annulation', 'Les changements de périmètre sont confirmés par écrit. Les séances demandent un préavis de 48 heures.'],
    ],
    termsNote: 'Ces conditions sont une démonstration et ne constituent pas un avis juridique.',
    contactKicker: 'Parlons-en',
    contactTitle: 'Une application qui pourrait être meilleure ?',
    contactLead: 'Dites à G ce qui fonctionne, ce qui bloque et où vous souhaitez aller ensuite.',
    whatsapp: 'Écrire à G',
    intro: 'Réserver un échange',
    quick: 'Quand vous êtes prêt.',
    contactG: 'Contacter G',
  },
} as const;

type Copy = (typeof content)[Language];

function AboutPanel({ copy }: { copy: Copy }) {
  return <div className="panel-content about-panel">
    <span className="panel-kicker">{copy.aboutKicker}</span>
    <h2>{copy.aboutTitle}</h2>
    <p className="panel-lead">{copy.aboutLead}</p>
    <div className="facts">
      <div><strong>20+</strong><span>{copy.years}</span></div>
      <div><Languages size={24} /><span>{copy.languages}</span></div>
      <div><strong>1:1</strong><span>{copy.counsel}</span></div>
    </div>
  </div>;
}

function ServicesPanel({ copy }: { copy: Copy }) {
  return <div className="panel-content">
    <span className="panel-kicker">{copy.servicesKicker}</span>
    <h2>{copy.servicesTitle}</h2>
    <div className="service-list">
      {copy.services.map(([title, text], index) => <article key={title}>
        <span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={18} />
      </article>)}
    </div>
  </div>;
}

function RatesPanel({ copy }: { copy: Copy }) {
  return <div className="panel-content">
    <span className="panel-kicker">{copy.ratesKicker}</span>
    <h2>{copy.ratesTitle}</h2>
    <div className="single-rate">
      <div><span>{copy.rateName}</span><strong>US$150</strong><small>{copy.ratePeriod}</small></div>
      <p><Check size={17} /> {copy.rateDescription}</p>
    </div>
    <p className="fine-print">{copy.rateNote}</p>
  </div>;
}

function TermsPanel({ copy }: { copy: Copy }) {
  return <div className="panel-content">
    <span className="panel-kicker">{copy.termsKicker}</span>
    <h2>{copy.termsTitle}</h2>
    <div className="terms-list">
      {copy.terms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
    </div>
    <p className="fine-print">{copy.termsNote}</p>
  </div>;
}

function ContactPanel({ copy }: { copy: Copy }) {
  return <div className="panel-content contact-panel">
    <span className="panel-kicker">{copy.contactKicker}</span>
    <h2>{copy.contactTitle}</h2>
    <p className="panel-lead">{copy.contactLead}</p>
    <div className="contact-list">
      <a href="mailto:hello@g.consulting"><Mail size={21} /><span><small>Email</small>hello@g.consulting</span><ArrowUpRight size={18} /></a>
      <a href="tel:+15550142080"><Phone size={21} /><span><small>Phone</small>+1 555 014 2080</span><ArrowUpRight size={18} /></a>
      <a href="https://wa.me/15550142080" target="_blank" rel="noreferrer"><MessageCircle size={21} /><span><small>WhatsApp</small>{copy.whatsapp}</span><ArrowUpRight size={18} /></a>
      <a href="mailto:hello@g.consulting?subject=Book%20a%2020-minute%20intro"><CalendarDays size={21} /><span><small>20-minute intro</small>{copy.intro}</span><ArrowUpRight size={18} /></a>
    </div>
  </div>;
}

export default function NameCard() {
  const [activePanel, setActivePanel] = useState<Panel>('about');
  const [language, setLanguage] = useState<Language>('en');
  const copy = content[language];
  const panel = {
    about: <AboutPanel copy={copy} />,
    services: <ServicesPanel copy={copy} />,
    rates: <RatesPanel copy={copy} />,
    terms: <TermsPanel copy={copy} />,
    contact: <ContactPanel copy={copy} />,
  }[activePanel];

  return <main className="site-shell">
    <header className="site-header">
      <button className="brand" onClick={() => setActivePanel('about')} aria-label="Show about aplevelup">
        <span>a</span><span className="brand-copy"><strong>{copy.brand}</strong>{copy.brandTag}</span>
      </button>
      <nav aria-label="Information sections">
        {(Object.keys(copy.nav) as Panel[]).map((item) => <button key={item} className={activePanel === item ? 'active' : ''} onClick={() => setActivePanel(item)} aria-pressed={activePanel === item}>{copy.nav[item]}</button>)}
      </nav>
      <div className="header-actions">
        <div className="language-switcher" aria-label="Language selector">
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
          <span>/</span>
          <button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')} aria-pressed={language === 'fr'}>FR</button>
        </div>
        <button className="header-cta" onClick={() => setActivePanel('contact')}>{copy.contactG} <ArrowUpRight size={16} /></button>
      </div>
    </header>

    <div className="card-layout">
      <section className="identity-panel" aria-label={`${copy.brand} profile`}>
        <div className="availability"><span /> {copy.availability}</div>
        <div className="identity-copy"><p>{copy.heroPrefix}</p><h1>{copy.heroMain}<br /><em>{copy.heroAccent}</em></h1></div>
        <div className="identity-bottom"><p>{copy.heroFooter}</p><p>{copy.languages}</p></div>
      </section>
      <section className="information-panel" aria-live="polite">
        <div className="panel-frame" key={`${activePanel}-${language}`}>{panel}</div>
        <div className="quick-contact"><span>{copy.quick}</span><a href="mailto:hello@g.consulting"><Mail size={15} /> hello@g.consulting</a></div>
      </section>
    </div>
  </main>;
}
