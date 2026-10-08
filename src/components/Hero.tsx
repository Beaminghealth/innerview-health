import { ArrowDown, Sparkles, Leaf } from 'lucide-react';
import { pillars } from '@/data/content';

const HERO_IMG = '/images/FullSizeRender.jpeg';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-sage-100/60 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 -bottom-24 h-80 w-80 rounded-full bg-clay-100/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left: text content */}
        <div className="order-2 lg:order-1">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-2">
            <Sparkles className="h-3.5 w-3.5 text-sage-600" />
            <span className="text-xs font-medium tracking-[0.18em] text-sage-700 uppercase">
              Health & Wellness from the Inside Out
            </span>
          </div>

          <h1
            className="animate-fade-up text-5xl font-medium leading-[1.08] text-ink-900 sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: '0.1s' }}
          >
            Learn a Smarter Approach
            <br />
            <span className="italic text-sage-600">to Feeling Your Best</span>
            <br />
            at Every Age
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-600"
            style={{ animationDelay: '0.2s' }}
          >
            I'm Linda Meeh, a certified functional nutritionist in Dana Point,
            California. Using advanced testing and a holistic lens, I help you
            uncover the <em>why</em> beneath your symptoms — and build a path to
            lasting vitality.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#contact" className="btn-primary">
              Begin Your Journey
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage-300 px-7 py-3.5 text-sm font-medium tracking-wide text-sage-700 transition-all duration-300 hover:border-sage-500 hover:bg-sage-50 hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </div>

          {/* Pillars */}
          <div
            className="animate-fade-up mt-14 flex flex-wrap gap-x-10 gap-y-4"
            style={{ animationDelay: '0.45s' }}
          >
            {pillars.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5">
                <p.icon className="h-5 w-5 text-sage-500" strokeWidth={1.5} />
                <span className="text-sm font-medium tracking-wide text-ink-600">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            {/* Brand banner */}
            <div className="relative overflow-hidden rounded-[2rem] border border-sage-100 bg-white/80 shadow-soft">
              <img
                src={HERO_IMG}
                alt="Innerview Health — holistic nutrition and wellness"
                className="aspect-square w-full object-cover object-center animate-fade-in"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-ink-950/80 via-ink-950/30 to-transparent px-6 pb-16 pt-7 text-center sm:px-10 sm:pt-9">
                <p className="font-serif text-5xl font-medium tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
                  Innerview Health
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-cream-50/95 p-4 shadow-soft backdrop-blur-sm lg:-left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <Leaf className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-serif text-lg font-medium leading-none text-ink-900">
                  25+ years
                </p>
                <p className="mt-1 text-xs text-ink-500">of holistic care</p>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full border-2 border-dashed border-sage-200" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sage-500 transition-colors hover:text-sage-700"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-float" strokeWidth={1.4} />
      </a>
    </section>
  );
}
