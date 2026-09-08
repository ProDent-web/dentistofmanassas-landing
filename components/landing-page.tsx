import {
  BadgeDollarSign,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  WalletCards,
} from 'lucide-react';

export type CampaignKey = 'general' | 'no-insurance' | 'insurance' | 'medicaid';

type CampaignContent = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  bullets: string[];
  formTitle: string;
  formDescription: string;
  source: string;
  service: string;
  message: string;
  offerLabel: string;
  offerValue: string;
  offerDescription: string;
  offerNote?: string;
  solutionEyebrow: string;
  solutionTitle: string;
  solutionDescription: string;
  solutionCards: Array<{ title: string; description: string; icon: 'shield' | 'wallet' | 'card' }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  showInsuranceGrid?: boolean;
  showPaymentGrid?: boolean;
};

const PHONE_DISPLAY = '(571) 293-8729';
const PHONE_LINK = 'tel:5712938729';
const ADDRESS = '9825 Liberia Ave, Suite 133, Manassas, VA 20110';
const DIRECTIONS_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=9825+Liberia+Ave,+Manassas,+VA+20110';

const campaignContent: Record<CampaignKey, CampaignContent> = {
  general: {
    eyebrow: 'Your local Manassas dentist · New patients welcome',
    headline: 'Top dentist in Manassas who makes',
    headlineAccent: 'care feel easy.',
    description:
      'Complete, modern dentistry for every stage of life—delivered by three experienced doctors in a calm, boutique setting on Liberia Avenue.',
    bullets: ['Most major insurance accepted', 'Same-day emergency appointments', 'Flexible payment options'],
    formTitle: 'Request your visit',
    formDescription: 'Tell us how to reach you and our team will help find a time that works.',
    source: 'Google Ads – General Dentist',
    service: 'New Patient Exam',
    message: 'General dentist landing page inquiry',
    offerLabel: 'New patient welcome',
    offerValue: '$79 exam',
    offerDescription: 'Full exam, digital X-rays, and a personalized care consultation for patients without dental insurance.',
    offerNote: 'Have insurance? Your plan may cover your first visit. We will verify your benefits first.',
    solutionEyebrow: 'Everything your smile needs',
    solutionTitle: 'One trusted dental home in Manassas',
    solutionDescription:
      'From cleanings and family visits to cosmetic, implant, and emergency care, your treatment can stay with a team that already knows you.',
    solutionCards: [
      { title: 'Personalized plans', description: 'Care shaped around your goals, comfort, and timeline.', icon: 'shield' },
      { title: 'Modern technology', description: 'Digital scans, 3D imaging, and same-day restorations.', icon: 'card' },
      { title: 'Comfort-first visits', description: 'A warm team and serene space designed to put you at ease.', icon: 'wallet' },
    ],
    faqTitle: 'Questions new patients ask us',
    faqs: [
      { question: 'Are you accepting new patients?', answer: 'Yes. Manassas Dental & Cosmetics is welcoming new patients for preventive, restorative, cosmetic, implant, and emergency care.' },
      { question: 'Can I get a same-day emergency appointment?', answer: 'The practice reserves same-day availability for dental pain, trauma, and unexpected concerns. Call the office so the team can guide you.' },
      { question: 'Do you treat children and adults?', answer: 'Yes. The team provides gentle, age-appropriate family dentistry for children, adults, and seniors.' },
      { question: 'Where are you located?', answer: 'The office is at 9825 Liberia Avenue, Suite 133 in Manassas, with ample free parking and easy access from I-66, Route 234, and Prince William Parkway.' },
    ],
  },
  'no-insurance': {
    eyebrow: 'No dental insurance? You still have options.',
    headline: 'See a dentist without insurance—',
    headlineAccent: 'starting at $30/month.',
    description:
      'Get the care you need without surprise pricing. Ask about our in-house membership plan, a $79 new-patient exam, and flexible monthly payment options.',
    bullets: ['$79 new-patient exam', 'Membership starts at $30/month', 'CareCredit & Cherry available'],
    formTitle: 'Explore your options',
    formDescription: 'Share your contact details and we will explain the most affordable path for your visit.',
    source: 'Google Ads – No Insurance',
    service: 'New Patient Exam',
    message: 'No insurance / payment plan landing page inquiry',
    offerLabel: 'For patients without dental insurance',
    offerValue: '$79 new-patient exam',
    offerDescription: 'Includes a full exam, digital X-rays, and a personalized care consultation with one of our doctors.',
    offerNote: 'Mention this offer when our team calls. Additional treatment is not included.',
    solutionEyebrow: 'Straightforward ways to pay',
    solutionTitle: 'No insurance. No judgment. No reason to delay care.',
    solutionDescription:
      'We will help you compare the practice membership plan, outside financing, and traditional payment options before treatment begins.',
    solutionCards: [
      { title: '$30/month membership', description: 'Preventive care plus discounts on treatment through the in-house plan.', icon: 'shield' },
      { title: 'Flexible financing', description: 'CareCredit offers eligible 6–24 month no-interest options; Cherry offers 3–24 month plans.', icon: 'card' },
      { title: 'Pay your way', description: 'HSA/FSA cards, cash, check, and major credit cards are accepted.', icon: 'wallet' },
    ],
    faqTitle: 'Paying for dental care without insurance',
    faqs: [
      { question: 'Can I visit a dentist without insurance?', answer: 'Yes. Dental insurance is not required to receive care. Manassas Dental & Cosmetics offers an in-house membership plan, a self-pay new-patient offer, and several financing options.' },
      { question: 'What does the $30/month membership include?', answer: 'The practice states that its membership plan covers preventive care and provides discounts on treatment. The office will explain current inclusions and terms before you enroll.' },
      { question: 'Do you offer monthly payment plans?', answer: 'Yes. The practice works with CareCredit and Cherry. Available terms and approval depend on the financing provider and the treatment amount.' },
      { question: 'What is included in the $79 new-patient exam?', answer: 'The offer includes a comprehensive exam, digital X-rays, and a personalized care consultation. It is designed for patients without dental insurance.' },
    ],
    showPaymentGrid: true,
  },
  insurance: {
    eyebrow: 'Most major dental insurance plans accepted',
    headline: 'Looking for a dentist who',
    headlineAccent: 'accepts your insurance?',
    description:
      'We are in-network with most major carriers and verify your benefits before your first visit—so you can understand your coverage and expected costs.',
    bullets: ['Free benefits verification', 'Claims filed for you', 'Clear costs before treatment'],
    formTitle: 'Check your benefits',
    formDescription: 'Tell us your plan in the note and our team will verify coverage before your visit.',
    source: 'Google Ads – Insurance Accepted',
    service: 'Insurance Verification',
    message: 'Insurance acceptance / benefit verification landing page inquiry',
    offerLabel: 'Complimentary service',
    offerValue: 'Free benefits check',
    offerDescription: 'We will contact your plan before your first appointment and explain the information we receive in plain language.',
    offerNote: 'Coverage and network status vary by plan. Final benefit determinations are made by your insurer.',
    solutionEyebrow: 'Use your dental benefits with confidence',
    solutionTitle: 'Less insurance confusion. More clarity about your care.',
    solutionDescription:
      'Our front-office team helps verify coverage, files claims, and walks you through out-of-pocket options before treatment.',
    solutionCards: [
      { title: 'Benefits verified', description: 'We check your plan before the visit whenever possible.', icon: 'shield' },
      { title: 'Claims handled', description: 'The practice files insurance claims on your behalf as a courtesy.', icon: 'card' },
      { title: 'Options for balances', description: 'HSA/FSA, traditional payments, and financing are available.', icon: 'wallet' },
    ],
    faqTitle: 'Common insurance questions',
    faqs: [
      { question: 'Which dental insurance plans do you accept?', answer: 'The practice is in-network with most major PPO plans, including Aetna, Anthem, BlueCross BlueShield, Cigna, Delta Dental, Guardian, Humana, MetLife, Principal, United Concordia, UnitedHealthcare, and Sun Life. Call to confirm your specific network.' },
      { question: 'Will you verify my benefits before the visit?', answer: 'Yes. The team can verify your plan before your first appointment so you have a clearer picture of coverage and expected cost.' },
      { question: 'Will you file my insurance claim?', answer: 'Yes. The practice states that it will file claims on behalf of patients as a courtesy, including when a plan may be out of network.' },
      { question: 'What if insurance does not cover everything?', answer: 'The office accepts HSA/FSA cards, cash, check, and major credit cards. Financing may also be available through CareCredit and Cherry.' },
    ],
    showInsuranceGrid: true,
  },
  medicaid: {
    eyebrow: 'Medicaid and Medicare accepted',
    headline: 'Top Manassas dentist who',
    headlineAccent: 'accepts Medicaid.',
    description:
      'Get respectful, modern dental care close to home. We will verify your specific Medicaid benefits and explain what your plan may cover before your visit.',
    bullets: ['Medicaid accepted', 'Benefits verified for you', 'Family & emergency care'],
    formTitle: 'Verify your Medicaid plan',
    formDescription: 'Share your contact details and plan name. Our team will call to review next steps.',
    source: 'Google Ads – Medicaid',
    service: 'Medicaid Verification',
    message: 'Medicaid dentist landing page inquiry',
    offerLabel: 'Before your first visit',
    offerValue: 'Free Medicaid verification',
    offerDescription: 'Our team will review your specific plan and help you understand the coverage information available to us.',
    offerNote: 'Coverage varies by plan and procedure. Your plan makes the final benefit determination.',
    solutionEyebrow: 'Care with clarity and respect',
    solutionTitle: 'We help make Medicaid dental care easier to navigate.',
    solutionDescription:
      'From confirming benefits to explaining treatment options, our team helps you take the next step without unnecessary confusion.',
    solutionCards: [
      { title: 'Medicaid accepted', description: 'The practice welcomes patients with Medicaid and Medicare coverage.', icon: 'shield' },
      { title: 'Coverage checked', description: 'We verify your specific benefits before the visit whenever possible.', icon: 'card' },
      { title: 'Care for the family', description: 'Preventive, restorative, family, and emergency dental services are available.', icon: 'wallet' },
    ],
    faqTitle: 'Medicaid dental care questions',
    faqs: [
      { question: 'Do you accept Medicaid for dental visits?', answer: 'Yes. Manassas Dental & Cosmetics states that it accepts Medicaid. Because networks and coverage can vary, the team will verify your specific plan before the visit.' },
      { question: 'What dental services does Medicaid cover?', answer: 'Coverage depends on your plan, age, and the procedure. The office will verify available benefits, but your Medicaid plan makes the final coverage decision.' },
      { question: 'Can my child and I visit the same dental office?', answer: 'Yes. The practice provides family dentistry with gentle, age-appropriate care for children, adults, and seniors.' },
      { question: 'Can I be seen for a dental emergency?', answer: 'The practice offers same-day emergency appointments for pain, trauma, and unexpected concerns when availability permits. Call the office for the fastest guidance.' },
    ],
    showInsuranceGrid: true,
  },
};

const services = [
  { title: 'Cleanings & exams', description: 'Preventive visits to keep small concerns from becoming bigger ones.', icon: Stethoscope },
  { title: 'Family dentistry', description: 'Gentle care for children, adults, and seniors in one familiar office.', icon: HeartHandshake },
  { title: 'Emergency care', description: 'Same-day help for pain, trauma, and unexpected dental concerns.', icon: Clock3 },
  { title: 'Restorative care', description: 'Fillings, crowns, bridges, and treatment designed for lasting function.', icon: ShieldCheck },
  { title: 'Dental implants', description: 'Permanent tooth-replacement solutions planned around your needs.', icon: Sparkles },
  { title: 'Cosmetic dentistry', description: 'Whitening, veneers, Invisalign®, and natural-looking smile design.', icon: Star },
];

const doctors = [
  { name: 'Dr. Truc Mai, DDS', detail: '20+ years experience · Top Dentist, NoVa Magazine', image: '/images/dr-mai.webp', imagePosition: 'object-center' },
  { name: 'Dr. Paul Byers, DDS, MS', detail: '37 years experience · 12 years in U.S. Navy dentistry', image: '/images/dr-byers.webp', imagePosition: 'object-top' },
  { name: 'Dr. Victor James Lim, DDS', detail: 'Cosmetic & comprehensive dentistry', image: '/images/dr-lim.webp', imagePosition: 'object-top' },
];

const insurancePlans = [
  'Aetna',
  'Anthem',
  'BlueCross BlueShield',
  'Cigna',
  'Delta Dental',
  'Guardian',
  'Humana',
  'MetLife',
  'Principal',
  'United Concordia',
  'UnitedHealthcare',
  'Sun Life',
  'Medicaid',
  'Medicare',
];

function SolutionIcon({ icon }: { icon: 'shield' | 'wallet' | 'card' }) {
  const Icon = icon === 'shield' ? ShieldCheck : icon === 'card' ? CreditCard : WalletCards;
  return <Icon className="size-6" />;
}

function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid size-11 place-items-center rounded-full border border-[#c5a967] text-[#9a7d39]">
        <span className="font-serif text-xl">M</span>
      </span>
      <span className="leading-none">
        <strong className="block font-serif text-xl font-medium tracking-[-0.02em] sm:text-2xl">Manassas Dental</strong>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8d7747]">&amp; Cosmetics</span>
      </span>
    </span>
  );
}

function AppointmentForm({ content }: { content: CampaignContent }) {
  return (
    <aside id="appointment" className="scroll-mt-6 rounded-[28px] border border-white/70 bg-[#fffdf8]/96 p-5 shadow-[0_26px_80px_rgba(15,42,35,0.28)] backdrop-blur sm:p-7 lg:ml-auto lg:max-w-[470px]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7d39]">Start here</p>
      <h2 className="mt-2 font-serif text-4xl font-medium tracking-[-0.03em] text-[#173b34]">{content.formTitle}</h2>
      <p className="mt-2 text-sm leading-6 text-[#5a6863]">{content.formDescription}</p>

      <form action="https://www.manassasdentalandcosmetics.com/submit.php" method="POST" className="mt-6 grid gap-4">
        <input type="hidden" name="source" value={content.source} />
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-sm font-semibold">
            First name
            <input name="fname" required autoComplete="given-name" className="h-12 rounded-xl border border-[#cfc7b9] bg-white px-4 font-normal outline-none transition focus:border-[#8f7335] focus:ring-4 focus:ring-[#d7c18d]/25" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            Last name
            <input name="lname" required autoComplete="family-name" className="h-12 rounded-xl border border-[#cfc7b9] bg-white px-4 font-normal outline-none transition focus:border-[#8f7335] focus:ring-4 focus:ring-[#d7c18d]/25" />
          </label>
        </div>
        <label className="grid gap-1.5 text-sm font-semibold">
          Phone number
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="h-12 rounded-xl border border-[#cfc7b9] bg-white px-4 font-normal outline-none transition focus:border-[#8f7335] focus:ring-4 focus:ring-[#d7c18d]/25" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Email address
          <input name="email" type="email" required autoComplete="email" className="h-12 rounded-xl border border-[#cfc7b9] bg-white px-4 font-normal outline-none transition focus:border-[#8f7335] focus:ring-4 focus:ring-[#d7c18d]/25" />
        </label>
        {content.showInsuranceGrid || content.showPaymentGrid ? (
          <label className="grid gap-1.5 text-sm font-semibold">
            {content.showPaymentGrid ? 'How can we help?' : 'Insurance plan (optional)'}
            <input
              name="preferred"
              placeholder={content.showPaymentGrid ? 'e.g. membership or payment plan' : 'e.g. Medicaid, Delta Dental, Cigna'}
              className="h-12 rounded-xl border border-[#cfc7b9] bg-white px-4 font-normal outline-none transition placeholder:text-[#89918e] focus:border-[#8f7335] focus:ring-4 focus:ring-[#d7c18d]/25"
            />
          </label>
        ) : (
          <input type="hidden" name="preferred" value="Please call to schedule" />
        )}
        <input type="hidden" name="service" value={content.service} />
        <input type="hidden" name="patient_type" value="New Patient" />
        <textarea name="msg" className="hidden" defaultValue={content.message} />
        <button type="submit" className="mt-1 inline-flex min-h-13 items-center justify-center rounded-xl bg-[#163c35] px-6 text-sm font-bold text-white shadow-sm transition hover:bg-[#0d2d27] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#163c35]/25">
          {content.showInsuranceGrid ? 'Request benefit verification' : content.showPaymentGrid ? 'Show me my options' : 'Request my appointment'}
        </button>
        <p className="text-center text-[11px] leading-4 text-[#68736f]">By submitting, you agree to be contacted by our team. Please do not include sensitive medical information.</p>
      </form>
    </aside>
  );
}

export function LandingPage({ campaign }: { campaign: CampaignKey }) {
  const content = campaignContent[campaign];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f4ec] pb-20 text-[#172722] md:pb-0">
      <div className="hidden bg-[#163c35] py-2 text-[#f8f4ec] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs tracking-[0.08em]">
          <span className="flex items-center gap-2"><MapPin className="size-3.5 text-[#d5b878]" />{ADDRESS}</span>
          <span>Mon–Fri 9am–5pm · Sat by appointment</span>
        </div>
      </div>

      <header className="border-b border-[#d9d1c3] bg-[#fffdf8]/95">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="#top" aria-label="Manassas Dental and Cosmetics home"><Wordmark /></a>
          <div className="flex items-center gap-3">
            <span className="hidden text-right lg:block">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8d7747]">Questions? Call us</span>
              <span className="mt-1 block text-sm font-bold text-[#29443d]">Mon–Fri 9am–5pm</span>
            </span>
            <a href={PHONE_LINK} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#163c35] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d2d27] sm:px-5">
              <Phone className="size-4" /><span className="hidden sm:inline">{PHONE_DISPLAY}</span><span className="sm:hidden">Call now</span>
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden">
        <img src="/images/waiting-area.webp" alt="Bright, comfortable waiting area at Manassas Dental & Cosmetics" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,244,236,0.99)_0%,rgba(248,244,236,0.95)_42%,rgba(18,47,41,0.62)_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.16fr_0.84fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9b783] bg-[#fffdf8]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#755e2e] shadow-sm">
              <span className="size-2 rounded-full bg-[#3b7c60]" />{content.eyebrow}
            </div>
            <h1 className="max-w-[800px] font-serif text-[clamp(3rem,7vw,5.65rem)] font-medium leading-[0.93] tracking-[-0.045em] text-[#15352f]">
              {content.headline} <span className="text-[#9a7d39]">{content.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#40534d] sm:text-xl">{content.description}</p>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-[#29443d] sm:grid-cols-3">
              {content.bullets.map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="size-4 shrink-0 text-[#9a7d39]" strokeWidth={2.5} />{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#appointment" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#ad8d45] px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(79,57,13,0.22)] transition hover:bg-[#967738]">
                <CalendarDays className="size-4" />{content.showInsuranceGrid ? 'Verify my benefits' : content.showPaymentGrid ? 'Explore payment options' : 'Request an appointment'}
              </a>
              <a href={PHONE_LINK} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#9f926f] bg-[#fffdf8]/90 px-7 text-sm font-bold text-[#25443c] transition hover:bg-white">
                <Phone className="size-4" />{PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#40534d]">
              <span className="flex items-center gap-2"><ShieldCheck className="size-5 text-[#8d7133]" />No obligation to request information</span>
              <span className="flex items-center gap-2"><Clock3 className="size-5 text-[#8d7133]" />Reply within one business day</span>
            </div>
          </div>
          <AppointmentForm content={content} />
        </div>
      </section>

      <section aria-label="Practice highlights" className="border-y border-[#d9d1c3] bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#ddd5c8] px-5 md:grid-cols-4 md:divide-y-0 lg:px-6">
          {[
            ['3', 'Experienced doctors'],
            ['20+ / 37', 'Years of experience'],
            ['15+', 'Services offered'],
            ['Same-day', 'Emergency visits'],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-7 text-center">
              <strong className="block font-serif text-3xl font-medium text-[#9a7d39]">{value}</strong>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.11em] text-[#52625d]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="section-eyebrow">{content.solutionEyebrow}</p>
            <h2 className="section-title mt-4">{content.solutionTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#586761]">{content.solutionDescription}</p>
            <div className="mt-8 rounded-[24px] border border-[#cdbb8b] bg-[#173b34] p-6 text-white shadow-[0_18px_45px_rgba(23,59,52,0.18)] sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d9c58f]">{content.offerLabel}</p>
              <p className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl">{content.offerValue}</p>
              <p className="mt-3 leading-7 text-[#e7eee9]">{content.offerDescription}</p>
              {content.offerNote && <p className="mt-4 border-t border-white/15 pt-4 text-xs leading-5 text-[#c6d4cf]">{content.offerNote}</p>}
              <a href="#appointment" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d1b46d] px-6 text-sm font-bold text-[#203a33] transition hover:bg-[#e0c784]">
                <CalendarDays className="size-4" />Get started
              </a>
            </div>
          </div>
          <div className="grid gap-5">
            {content.solutionCards.map((card, index) => (
              <article key={card.title} className="group grid gap-5 rounded-[24px] border border-[#d8d0c3] bg-[#fffdf8] p-6 shadow-[0_12px_34px_rgba(47,39,24,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(47,39,24,0.1)] sm:grid-cols-[64px_1fr] sm:p-8">
                <span className="grid size-16 place-items-center rounded-2xl bg-[#e8dfcc] text-[#8e7132]"><SolutionIcon icon={card.icon} /></span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#aa9157]">0{index + 1}</span>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-[#183a33]">{card.title}</h3>
                  <p className="mt-2 leading-7 text-[#5c6965]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.showInsuranceGrid && (
        <section className="bg-[#153b34] px-5 py-20 text-white sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d5bd82]">Insurance we accept</p>
              <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.03em] sm:text-6xl">Most major plans are welcome.</h2>
              <p className="mt-5 text-lg leading-8 text-[#d8e3de]">Do not see your plan? Call us. We will verify your specific coverage at no charge.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-7">
              {insurancePlans.map((plan) => (
                <div key={plan} className="grid min-h-20 place-items-center bg-[#1b443c] px-3 text-center text-sm font-bold text-[#f7f1e4]">{plan}</div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#b9cbc5]">Network participation and benefits vary by plan. Contact the office for verification.</p>
          </div>
        </section>
      )}

      {content.showPaymentGrid && (
        <section className="bg-[#153b34] px-5 py-20 text-white sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d5bd82]">Flexible ways to pay</p>
              <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.03em] sm:text-6xl">Choose what fits your budget.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                ['Membership', 'Starting at $30/month'],
                ['CareCredit', 'Eligible 6–24 month plans'],
                ['Cherry', 'Flexible 3–24 month plans'],
                ['Traditional', 'HSA/FSA, cash, check & cards'],
              ].map(([name, detail]) => (
                <article key={name} className="rounded-[22px] border border-white/10 bg-white/[0.06] p-6">
                  <BadgeDollarSign className="size-6 text-[#d5bd82]" />
                  <h3 className="mt-5 font-serif text-2xl font-medium">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#c9d7d2]">{detail}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#b9cbc5]">Financing is subject to provider approval and terms. The office can explain current options.</p>
          </div>
        </section>
      )}

      <section className="bg-[#efe8db] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Complete dental care</p>
            <h2 className="section-title mt-4">Care for today—and the smile you want next.</h2>
            <p className="mt-5 text-lg leading-8 text-[#586761]">Routine, restorative, cosmetic, implant, and emergency services are available in one modern Manassas office.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[#d4cbbb] bg-[#d4cbbb] sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="bg-[#fffdf8] p-7 sm:p-8">
                <Icon className="size-7 text-[#9a7d39]" strokeWidth={1.7} />
                <h3 className="mt-6 font-serif text-2xl font-medium text-[#173b34]">{title}</h3>
                <p className="mt-3 leading-7 text-[#5c6965]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Meet your doctors</p>
            <h2 className="section-title mt-4">Experience you can feel confident in.</h2>
            <p className="mt-5 text-lg leading-8 text-[#586761]">Three general dentists, one shared commitment: listen first and make every treatment plan personal.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="overflow-hidden rounded-[26px] border border-[#d9d1c3] bg-[#fffdf8] shadow-[0_14px_40px_rgba(47,39,24,0.08)]">
                <div className="aspect-[4/3] overflow-hidden bg-[#ece8e1]">
                  <img src={doctor.image} alt={doctor.name} className={`h-full w-full object-cover ${doctor.imagePosition} transition duration-500 hover:scale-[1.03]`} />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a7d39]">General dentist</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-[#173b34]">{doctor.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5e6a66]">{doctor.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[#3e554e]">
            {['Personalized treatment plans', 'Clear explanations', 'Modern clinical expertise'].map((item) => (
              <span key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#9a7d39]" />{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Helpful answers</p>
            <h2 className="section-title mt-4">{content.faqTitle}</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-[#586761]">Still wondering about your specific situation? Call us and a real member of the office team will help.</p>
            <a href={PHONE_LINK} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#8f7c50] px-6 text-sm font-bold text-[#28453e] transition hover:bg-[#f2ecdf]"><Phone className="size-4" />Call {PHONE_DISPLAY}</a>
          </div>
          <div className="divide-y divide-[#d9d1c3] border-y border-[#d9d1c3]">
            {content.faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl font-medium text-[#173b34] sm:text-2xl">
                  {faq.question}<ChevronDown className="size-5 shrink-0 text-[#9a7d39] transition group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-4 leading-7 text-[#5c6965]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-[#153b34] text-white shadow-[0_24px_70px_rgba(23,59,52,0.2)] lg:grid-cols-2">
          <img src="/images/reception-main.webp" alt="Reception area at Manassas Dental & Cosmetics" className="h-full min-h-[360px] w-full object-cover" />
          <div className="p-7 sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d5bd82]">Conveniently located</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">Modern dentistry, close to home.</h2>
            <ul className="mt-8 grid gap-5 text-[#e4ece8]">
              <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-[#d5bd82]" /><span><strong className="block text-white">Visit us</strong>{ADDRESS}<br />Ample free parking</span></li>
              <li className="flex gap-3"><Clock3 className="mt-0.5 size-5 shrink-0 text-[#d5bd82]" /><span><strong className="block text-white">Office hours</strong>Monday–Friday, 9am–5pm<br />Saturday by appointment</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-[#d5bd82]" /><span><strong className="block text-white">Call</strong>{PHONE_DISPLAY}</span></li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d1b46d] px-6 text-sm font-bold text-[#203a33] transition hover:bg-[#e0c784]">Get directions</a>
              <a href="#appointment" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10">Request a visit</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-[#cfbd8f] bg-[#e9dfca] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="section-eyebrow">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-[#173b34] sm:text-6xl">Take the first step toward a healthier smile.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#50615b]">Request an appointment online or call the office. Our team will answer your questions and help you choose the next step.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#appointment" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#163c35] px-7 text-sm font-bold text-white transition hover:bg-[#0d2d27]"><CalendarDays className="size-4" />Request an appointment</a>
            <a href={PHONE_LINK} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#8f7c50] bg-[#fffdf8]/70 px-7 text-sm font-bold text-[#28453e]"><Phone className="size-4" />{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9d1c3] bg-[#fffdf8] px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <Wordmark />
          <div className="text-sm leading-6 text-[#5f6c68]">
            <p>{ADDRESS}</p>
            <p>© 2026 Manassas Dental &amp; Cosmetics. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#d8cfbf] bg-[#fffdf8]/96 p-3 shadow-[0_-8px_30px_rgba(31,43,39,0.12)] backdrop-blur md:hidden">
        <a href={PHONE_LINK} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#9b895e] text-sm font-bold text-[#28453e]"><Phone className="size-4" />Call now</a>
        <a href="#appointment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#163c35] text-sm font-bold text-white"><CalendarDays className="size-4" />Request visit</a>
      </div>
    </main>
  );
}
