import { useEffect } from 'react';
import { Link } from '@/components/Router';
import { useReveal } from '@/hooks/useReveal';
import {
  Microscope,
  Activity,
  HeartPulse,
  Droplets,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';

const HERO_IMG = '/images/90008BB0-F14B-419F-965D-E471C2E314AE_4_5005_c.jpeg';

const benefits = [
  {
    icon: Activity,
    title: 'See Your Cells in Real Time',
    description:
      'A single drop of blood is examined under a high-powered microscope while you watch. You see your red and white blood cells, platelets, and plasma exactly as they are behaving in your body right now — not a static lab report from days ago.',
  },
  {
    icon: HeartPulse,
    title: 'Reveal Hidden Imbalances',
    description:
      'Live cell analysis can surface signs of inflammation, digestive stress, poor nutrient absorption, oxidative damage, and immune activity long before those patterns show up on standard blood panels.',
  },
  {
    icon: Droplets,
    title: 'Understand Nutrient Status',
    description:
      'The shape and behavior of your cells tell a story about what they are missing — B vitamins, iron, essential fatty acids, hydration, and more — so we can target nutrition precisely instead of guessing.',
  },
  {
    icon: ShieldCheck,
    title: 'A Non-Invasive, Gentle Process',
    description:
      'One quick finger prick. No needles, no lab wait. The session is comfortable, visual, and informative — you leave understanding something real about your body.',
  },
];

const faqs = [
  {
    q: 'What is live blood cell analysis?',
    a: 'Live blood cell analysis — sometimes called nutritional microscopy or live cell microscopy — is the practice of examining a fresh drop of your blood under a high-powered microscope, projected onto a screen so you can see it in real time. Unlike a standard lab test, which measures quantities of substances in the blood, live cell analysis looks at the condition and behavior of the cells themselves.',
  },
  {
    q: 'How is it different from a regular blood test?',
    a: 'A conventional blood panel tells you whether certain values fall within a lab-defined range. Live cell analysis shows you the living picture — how your cells move, clump, and behave, and what that suggests about digestion, hydration, nutrient status, and inflammation. The two are complementary, not a substitute for one another.',
  },
  {
    q: 'Does it hurt or require fasting?',
    a: 'No. A single, small finger prick provides the drop of blood we examine. There is no needle and no fasting required. Most people feel nothing more than a brief pinch.',
  },
  {
    q: 'What can it reveal?',
    a: 'Live cell analysis can reveal patterns consistent with digestive strain, poor protein or fat digestion, nutrient deficiencies (especially B12, iron, and essential fatty acids), oxidative stress, immune activity, dehydration, and signs of inflammation. It is a starting point for a deeper conversation — not a diagnosis.',
  },
  {
    q: 'Is it a replacement for medical diagnosis?',
    a: 'No. Live blood cell analysis is an educational and nutritional tool, not a medical diagnostic test. It helps guide nutrition and lifestyle recommendations. It does not diagnose or treat disease, and it does not replace the care of your physician or standard lab work.',
  },
  {
    q: 'How long does a session take?',
    a: 'A live cell session typically runs 45 to 60 minutes, including time to look at your blood together, talk through what you are seeing, and discuss what it suggests for your nutrition plan.',
  },
];

const steps = [
  {
    number: '01',
    title: 'A Single Drop',
    description:
      'We begin with a quick, gentle finger prick to collect one small drop of blood. No fasting and no needles — just a moment to prepare the sample.',
  },
  {
    number: '02',
    title: 'Under the Microscope',
    description:
      'Your blood is placed under a high-powered microscope and projected onto a screen so you can see your cells live, in motion, exactly as they exist in your body.',
  },
  {
    number: '03',
    title: 'We Look Together',
    description:
      'You and Linda look at the picture together. She explains what healthy cells look like, what patterns to notice, and what those patterns may suggest about nutrition, digestion, and inflammation.',
  },
  {
    number: '04',
    title: 'A Personalized Direction',
    description:
      'What we see becomes a starting point — not a verdict. Linda connects the findings to your history, your labs, and your goals, and shapes a nutrition plan that responds to what your cells are telling you.',
  },
];

export default function LiveBloodCellAnalysis() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article id="top" className="bg-cream-50">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-cream-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-sage-100/60 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-clay-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 transition-colors hover:text-sage-900"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            Back to home
          </Link>

          <span className="section-eyebrow mt-8 block">A Closer Look</span>
          <h1 className="mt-4 text-4xl font-medium leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Live Blood Cell Analysis
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            One drop of blood, seen in real time, can tell a story that standard
            labs miss. It is one of the most powerful tools Linda uses to
            understand what your cells are asking for — and to build a nutrition
            plan that responds to your body, not a template.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/#contact" className="btn-primary">
              Book a Session
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage-300 px-7 py-3.5 text-sm font-medium tracking-wide text-sage-700 transition-all duration-300 hover:border-sage-500 hover:bg-sage-50 hover:-translate-y-0.5"
            >
              How It Works
            </a>
          </div>
        </div>
      </header>

      {/* Intro / what it is */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-sage-100 bg-white/80 shadow-soft">
              <img
                src={HERO_IMG}
                alt="Microscope used for live blood cell analysis"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 flex items-center gap-3 rounded-2xl bg-cream-50/95 p-4 shadow-soft backdrop-blur-sm lg:-right-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <Microscope className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-serif text-lg font-medium leading-none text-ink-900">
                  Real-time
                </p>
                <p className="mt-1 text-xs text-ink-500">cellular insight</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">What It Is</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
              A living snapshot of your health.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600">
              <p>
                Live blood cell analysis is the practice of examining a fresh
                drop of your blood under a high-powered microscope — projected
                onto a screen so you can see it for yourself, in real time.
              </p>
              <p>
                Where a standard blood test reports quantities, live cell
                analysis shows you the <em>condition</em> of your cells: their
                shape, movement, and behavior. That living picture can reveal
                patterns connected to digestion, hydration, nutrient status,
                and inflammation — patterns that often appear long before they
                show up on a lab panel.
              </p>
              <p>
                For Linda, it is a conversation starter. The blood does not
                give a verdict; it gives direction. What we see together
                becomes the foundation for a nutrition plan built around what
                your body is actually asking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Why It Matters</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
              What live cell analysis can reveal
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Your cells are always talking. This is one way to listen.
            </p>
          </div>

          <div
            ref={ref}
            className={`reveal mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
              visible ? 'is-visible' : ''
            }`}
          >
            {benefits.map((b, i) => (
              <article
                key={b.title}
                className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-cream-50 p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-soft"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sage-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors duration-500 group-hover:bg-sage-700 group-hover:text-cream-50">
                  <b.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-medium text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {b.description}
                </p>
                <span className="absolute right-6 top-6 font-serif text-3xl font-medium text-sage-100 transition-colors duration-500 group-hover:text-sage-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative overflow-hidden bg-taupe-300 py-20 text-ink-900 lg:py-28">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe-300 via-taupe-300/90 to-taupe-300" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow !text-sage-700">The Session</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
              What to expect
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              A live cell session is gentle, visual, and collaborative. Here is
              how it unfolds.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-ink-900/10 bg-ink-900/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-sage-600/40 hover:bg-ink-900/10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-5xl font-medium text-sage-700/70 transition-colors group-hover:text-sage-700">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-ink-900/15 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <span className="section-eyebrow">Questions</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
              Common questions
            </h2>
          </div>

          <dl className="mt-12 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-ink-100 bg-cream-50 p-6 shadow-card transition-colors duration-300 hover:border-sage-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink-900">
                  {item.q}
                  <ChevronLeft
                    className="h-5 w-5 shrink-0 text-sage-600 transition-transform duration-300 group-open:-rotate-90"
                    strokeWidth={1.8}
                  />
                </summary>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  {item.a}
                </p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-sage-50 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="section-eyebrow">See For Yourself</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
            Curious what your blood might tell you?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Book a session with Linda and see your cells in real time. Together,
            you will turn what you see into a plan that responds to your body.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/#contact" className="btn-primary">
              Book a Session
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage-300 px-7 py-3.5 text-sm font-medium tracking-wide text-sage-700 transition-all duration-300 hover:border-sage-500 hover:bg-sage-50 hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
