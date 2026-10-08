import {
  Microscope,
  HeartPulse,
  Leaf,
  Brain,
  Activity,
  Apple,
  Droplets,
  Sun,
} from 'lucide-react';

export type Service = {
  icon: typeof Microscope;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Microscope,
    title: 'Blood Chemistry Analysis',
    description:
      'A deep read of your labs — not just "normal vs. abnormal," but optimal. We look for patterns that reveal nutritional gaps, metabolic strain, and early warning signs long before they become diagnoses.',
  },
  {
    icon: Activity,
    title: 'Live Cell Analysis',
    description:
      'A single drop of blood, examined in real time, offers a living snapshot of how your cells are actually functioning — revealing inflammation, digestive stress, and nutrient status at the cellular level.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Nutrition Plans',
    description:
      'No templates, no fads. Every plan is built around your biochemistry, your labs, your lifestyle, and the foods that actually work for your body — adjusted as your health evolves.',
  },
  {
    icon: Brain,
    title: 'Brain & Cognitive Health',
    description:
      'Memory, focus, and mood are deeply tied to what you eat. We address the gut-brain axis, blood sugar stability, and the nutrients that keep your mind sharp at every age.',
  },
  {
    icon: Leaf,
    title: 'Holistic Wellness Coaching',
    description:
      'Food is where we start, but lasting wellness is sleep, movement, stress, and purpose. We build the whole picture together, one sustainable step at a time.',
  },
  {
    icon: Apple,
    title: 'Weight & Metabolic Balance',
    description:
      'Sustainable change, not deprivation. We rebalance metabolism, stabilize energy, and help you reach a weight that feels healthy — without counting every calorie or fighting your body.',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start with a thorough conversation about your history, symptoms, goals, and the full picture of your health — not just the complaint that brought you in.',
  },
  {
    number: '02',
    title: 'Advanced Testing',
    description:
      'Blood chemistry and live cell analysis reveal what the surface symptoms can\'t — the underlying imbalances driving how you feel every day.',
  },
  {
    number: '03',
    title: 'Personalized Plan',
    description:
      'You receive a nutrition and lifestyle plan built around your results — clear, practical, and designed to fit your real life, not an ideal one.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Health is not a one-and-done. We track your progress, adjust as your body responds, and keep you supported through every season of change.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Linda has shared with me her extensive knowledge of many cutting-edge, alternative and natural therapies, which has its advantages over going to one specialist. She is passionate about educating and healing her clients. I have consulted Linda on numerous occasions and found her to be immensely helpful in improving my overall health.',
    name: 'Jill W.',
    context: 'Holistic health client',
  },
  {
    quote:
      'I have had long term gut issues and within weeks of working with Linda, I noticed significant improvements. Her expert advice and genuine care made all the difference. Not only did my constipation issues resolve, but I also felt more energetic and healthier overall. Linda\'s approach is holistic, compassionate, and incredibly effective. If you\'re facing digestive issues, I highly recommend reaching out to Linda.',
    name: 'Liz G.',
    context: 'Digestive health client',
  },
  {
    quote:
      'Linda\'s guidance has been nothing short of transformative. Her dedication and personalized care have revitalized my health in ways I never thought possible. If you\'re struggling with chronic fatigue, I wholeheartedly recommend reaching out to Linda. She\'s truly a lifesaver and an expert in her field.',
    name: 'Rick J.',
    context: 'Chronic fatigue client',
  },
];

export type Book = {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
};

export const books: Book[] = [
  {
    title: 'Be Your Own Superhero',
    subtitle: 'A Road Map to Resilience When Faced with Chronic Dis-ease',
    description:
      'A practical, compassionate guide to building resilience in the face of long-term health challenges — drawing on Linda\'s decades of clinical experience and her own journey.',
    accent: 'from-sage-600 to-sage-800',
  },
  {
    title: 'Live in Wellness Now',
    subtitle: 'A Proactive Guide to Living Well',
    description:
      'A proactive, everyday approach to wellness — small, sustainable choices that compound into a life of vitality, clarity, and balance.',
    accent: 'from-clay-500 to-clay-700',
  },
];

export type Pillar = {
  icon: typeof Sun;
  label: string;
};

export const pillars: Pillar[] = [
  { icon: Droplets, label: 'Hydration' },
  { icon: Apple, label: 'Nourishment' },
  { icon: Sun, label: 'Vitality' },
  { icon: Leaf, label: 'Balance' },
];
