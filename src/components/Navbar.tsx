import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, navigate } from '@/components/Router';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Stories', href: '#stories' },
];

const pageLinks = [
  { label: 'Live Blood Cell Analysis', to: '/live-blood-cell-analysis' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-serif text-xl font-semibold tracking-tight text-ink-900 transition-colors"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-700 text-cream-50 transition-colors">
            <Leaf className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span>
            InnerView<span className="text-sage-500">Health</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-ink-700 transition-colors hover:text-sage-500"
            >
              {link.label}
            </a>
          ))}
          <div className="group relative">
            <button className="text-sm font-medium tracking-wide text-ink-700 transition-colors hover:text-sage-500">
              More
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-2xl border border-ink-100 bg-cream-50 p-2 opacity-0 shadow-soft transition-all duration-300 group-hover:visible group-hover:opacity-100">
              {pageLinks.map((p) => (
                <button
                  key={p.to}
                  onClick={() => navigate(p.to)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-ink-700 transition-colors hover:bg-sage-50 hover:text-sage-700"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <a href="#contact" className="btn-primary !py-2.5 !px-6">
            Work With Linda
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-900"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 bg-cream-50 px-6 py-4 shadow-card">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-sage-50 hover:text-sage-700"
            >
              {link.label}
            </a>
          ))}
          {pageLinks.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="rounded-lg px-3 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-sage-50 hover:text-sage-700"
            >
              {p.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Work With Linda
          </a>
        </div>
      </div>
    </header>
  );
}
