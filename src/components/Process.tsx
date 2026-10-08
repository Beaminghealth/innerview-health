import { useReveal } from '@/hooks/useReveal';
import { processSteps } from '@/data/content';

const PROCESS_IMG =
  'https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="approach" className="relative overflow-hidden bg-taupe-300 py-24 text-ink-900 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={PROCESS_IMG}
          alt="Laboratory microscope and analysis tools"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-taupe-300 via-taupe-300/85 to-taupe-300" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow !text-sage-700">The Approach</span>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            A path designed
            <span className="italic text-sage-700"> around your biology.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Real change doesn't happen in a single appointment. It happens in a
            thoughtful, guided sequence — one that respects your time, your body,
            and your story.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${
            visible ? 'is-visible' : ''
          }`}
        >
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-ink-900/10 bg-ink-900/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-sage-600/40 hover:bg-ink-900/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-serif text-5xl font-medium text-sage-700/70 transition-colors group-hover:text-sage-700">
                {step.number}
              </span>
              <h3 className="mt-5 text-2xl font-medium">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-700">
                {step.description}
              </p>
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-ink-900/15 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
