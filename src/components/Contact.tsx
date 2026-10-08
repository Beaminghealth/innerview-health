import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const interests = [
  'Blood Chemistry Analysis',
  'Live Cell Analysis',
  'Personalized Nutrition Plan',
  'Brain & Cognitive Health',
  'Holistic Wellness Coaching',
  'Weight & Metabolic Balance',
  'Not sure yet',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim() || null,
      interest: String(data.get('interest') || '').trim() || null,
      message: String(data.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and a short message.');
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert(payload);

      if (error) throw error;

      try {
        await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ record: payload }),
          }
        );
      } catch {
        // Email notification failed, but submission was saved.
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-taupe-300 py-24 text-ink-900 lg:py-32"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-clay-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: invitation */}
          <div>
            <span className="section-eyebrow !text-sage-700">Work With Linda</span>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              Your journey to vitality
              <span className="italic text-sage-700"> starts with a conversation.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-700">
              Tell me a little about what you're experiencing. I'll personally
              review your message and reach out to schedule a complimentary
              discovery call — with no obligation.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Mail} label="lindameehceo@gmail.com" />
              <ContactRow icon={MessageSquare} label="949-350-1553" />
              <ContactRow icon={MapPin} label="Dana Point, California" />
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl bg-cream-50 p-8 text-ink-900 shadow-soft sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-sage-600" strokeWidth={1.2} />
                <h3 className="mt-6 text-2xl font-medium">Message sent</h3>
                <p className="mt-3 max-w-sm text-ink-600">
                  Thank you for reaching out. Linda will be in touch with you
                  within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="form-input"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone (optional)" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="949-350-1553"
                      className="form-input"
                    />
                  </Field>
                  <Field label="I'm interested in" htmlFor="interest">
                    <select id="interest" name="interest" className="form-input">
                      <option value="">Select a service</option>
                      {interests.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message" htmlFor="message" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me a little about what you're experiencing..."
                    className="form-input resize-none"
                  />
                </Field>

                {status === 'error' && (
                  <div className="flex items-center gap-2.5 rounded-xl bg-clay-100 px-4 py-3 text-sm text-clay-800">
                    <AlertCircle className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e7e7e2;
          background: #fdfcf9;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #1f201c;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input::placeholder { color: #aeb0a4; }
        .form-input:focus {
          outline: none;
          border-color: #5f8a57;
          box-shadow: 0 0 0 3px rgba(95, 138, 87, 0.15);
        }
      `}</style>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
}: {
  icon: typeof Mail;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900/10 text-sage-700">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="text-lg text-ink-800">{label}</span>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-clay-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
