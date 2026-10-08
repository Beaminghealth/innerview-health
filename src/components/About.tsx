import { useReveal } from '@/hooks/useReveal';

const ABOUT_IMG = '/images/IMG_7723.png';

const stats = [
  { value: '25+', label: 'Years in practice' },
  { value: '1000+', label: 'Clients guided' },
  { value: '100%', label: 'Personalized care' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Image side */}
          <div className="relative order-2 lg:order-1 lg:flex lg:justify-start">
            <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-sage-50 shadow-soft">
              <img
                src={ABOUT_IMG}
                alt="Linda Meeh, certified functional nutritionist"
                className="aspect-[4/5] w-full object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-cream-50 p-5 shadow-soft lg:-right-8">
              <p className="font-serif text-2xl font-medium text-sage-800">
                CN
              </p>
              <p className="text-xs font-medium tracking-[0.15em] text-ink-500 uppercase">
                Certified Nutritionist
              </p>
            </div>
            {/* Decorative ring */}
            <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full border-2 border-dashed border-sage-200" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">My approach</span>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-ink-900 sm:text-5xl">
              Holistic Health Coaching
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
              <p>
                I am best known for my whole-body health approach and my ability to
                address the root cause of our most common health issues. I utilize
                cutting-edge research in an environment that is always supportive
                and empathetic.
              </p>
              <p>
                Having experienced my own health challenges for many years, and now
                feeling completely well, I know how great it feels to be on the
                right path to long-term good health and vitality. After years of
                education, advanced training, and working with hundreds of clients,
                I'm confident I can support you in achieving amazing and sustainable
                health outcomes.
              </p>
              <p className="font-serif text-xl italic text-sage-700">
                "Be present. Be purposeful. Be well."
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink-100 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-4xl font-medium text-sage-700">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
