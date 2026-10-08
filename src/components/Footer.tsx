import { Leaf, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from '@/components/Router';

const navColumns = [
  {
    heading: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Approach', href: '#approach' },
      { label: 'Client Stories', href: '#stories' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Blood Chemistry Analysis', href: '#services' },
      { label: 'Live Cell Analysis', href: '#services' },
      { label: 'Personalized Nutrition', href: '#services' },
      { label: 'Brain & Cognitive Health', href: '#services' },
      { label: 'Wellness Coaching', href: '#services' },
    ],
  },
];

const morePages = [
  { label: 'Live Blood Cell Analysis', to: '/live-blood-cell-analysis' },
];

export default function Footer() {
  return (
    <footer className="bg-taupe-300 text-ink-700">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#top"
              className="flex items-center gap-2.5 font-serif text-xl font-semibold text-ink-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-700 text-cream-50">
                <Leaf className="h-5 w-5" strokeWidth={1.6} />
              </span>
              InnerView<span className="text-sage-400">Health</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Health and wellness from the inside out. Functional nutrition and
              holistic care, guided by Linda Meeh, CN — serving Dana Point,
              California and clients nationwide.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink icon={Instagram} label="Instagram" />
              <SocialLink icon={Linkedin} label="LinkedIn" />
              <SocialLink icon={Facebook} label="Facebook" />
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-serif text-sm font-medium uppercase tracking-[0.18em] text-cream-50">
                {col.heading}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-sage-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* More pages */}
          <div>
            <h4 className="font-serif text-sm font-medium uppercase tracking-[0.18em] text-cream-50">
              Learn More
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {morePages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="transition-colors hover:text-sage-700"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-900/10 pt-8 text-xs text-ink-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} InnerView Health. Linda Meeh, CN. All
            rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Leaf className="h-3.5 w-3.5 text-sage-400" strokeWidth={1.6} />
            Be present. Be purposeful. Be well.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  icon: Icon,
  label,
}: {
  icon: typeof Leaf;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-all duration-300 hover:border-sage-600 hover:bg-sage-700 hover:text-cream-50"
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
    </a>
  );
}
