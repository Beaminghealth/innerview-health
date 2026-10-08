import { useReveal } from '@/hooks/useReveal';
import { testimonials } from '@/data/content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="stories" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Client Stories</span>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink-900 sm:text-5xl">
            Wellness, in their
            <span className="italic text-sage-600"> own words.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`reveal mt-16 grid gap-6 lg:grid-cols-3 ${
            visible ? 'is-visible' : ''
          }`}
        >
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-ink-100 bg-cream-100/40 p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="h-9 w-9 text-sage-400" strokeWidth={1.2} />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink-700">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-ink-100 pt-5">
                <p className="font-serif text-lg font-medium text-ink-900">
                  {t.name}
                </p>
                <p className="text-sm text-ink-500">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
