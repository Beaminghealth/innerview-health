import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/content';
import { ArrowUpRight, Dumbbell, ExternalLink, Radio, Sparkles, ArrowRight } from 'lucide-react';
import { navigate } from '@/components/Router';

const partnerBanners = [
  {
    title: 'Natural Peptide Weightloss',
    description:
      'All natural GLP peptide with no side effects, no needles and no pain. 5 drops 2x a day.',
    href: 'https://lindameeh.myorygn.co/',
    icon: Dumbbell,
    accent: 'from-sage-600 to-sage-800',
  },
  {
    title: 'OlyLife PEMF / Terahertz',
    description:
      'Frequency-based wellness technology using PEMF and terahertz energy to support cellular repair, circulation, and deep vitality.',
    href: 'https://lindameeh.thefrequencyawakening.com/',
    icon: Radio,
    accent: 'from-clay-500 to-clay-700',
  },
  {
    title: 'Clean, Innovative, Results-Driven Skincare, Haircare, and Wellness Products',
    description:
      'Clean, innovative, results-driven skincare and haircare products designed to nourish, restore, and rejuvenate from the outside in.',
    href: 'https://lovethejourney.neora.com/',
    icon: Sparkles,
    accent: 'from-sage-500 to-sage-700',
  },
];

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-sage-50 to-cream-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink-900 sm:text-5xl">
            Care that meets you
            <span className="italic text-sage-600"> where you are.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Every service is grounded in the same belief: your body is sending
            signals. We just have to learn how to listen — and respond with the
            right nourishment.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            visible ? 'is-visible' : ''
          }`}
        >
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-cream-50 p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-soft"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sage-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors duration-500 group-hover:bg-sage-700 group-hover:text-cream-50">
                <service.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>

              <h3 className="mt-6 text-2xl font-medium text-ink-900">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                {service.description}
              </p>

              {service.title === 'Live Cell Analysis' && (
                <button
                  onClick={() => navigate('/live-blood-cell-analysis')}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sage-700 transition-colors hover:text-sage-900"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
              )}

              {/* Corner accent */}
              <span className="absolute right-6 top-6 font-serif text-3xl font-medium text-sage-100 transition-colors duration-500 group-hover:text-sage-200">
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>

        {/* Affiliate section divider */}
        <div className="mt-14 flex items-center justify-center">
          <div className="flex items-center gap-4 rounded-full bg-gradient-to-r from-sage-600 via-sage-500 to-sage-600 px-10 py-4 shadow-soft">
            <ExternalLink className="h-5 w-5 text-cream-50" strokeWidth={2} />
            <span className="text-lg font-medium tracking-wide text-cream-50">
              Visit my affiliate sites for more information
            </span>
          </div>
        </div>

        {/* Partner banners */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {partnerBanners.map((banner) => (
            <a
              key={banner.title}
              href={banner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-ink-100 bg-cream-50 p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${banner.accent} text-cream-50 transition-transform duration-500 group-hover:scale-110`}
              >
                <banner.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-medium text-ink-900">
                  {banner.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {banner.description}
                </p>
              </div>
              <ArrowUpRight
                className="h-6 w-6 shrink-0 text-sage-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sage-700"
                strokeWidth={1.8}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
