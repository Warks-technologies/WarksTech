import type { LucideIcon } from 'lucide-react';
import { Briefcase, CalendarDays, Code2, Laptop2, ShieldCheck, Sparkles, Brain, LockKeyhole, Users, Rocket, Zap } from 'lucide-react';

export type Program = {
  title: string;
  description: string;
  duration: string;
  skills: string[];
  icon: LucideIcon;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/apply', label: 'Apply' },
  { href: '/contact', label: 'Contact' }
];

export const stats = [
  { label: 'Students Guided', value: '100+' },
  { label: 'Projects Built', value: '30+' },
  { label: 'Weeks per Cohort', value: '4' },
  { label: 'Mentor Support', value: '1:1' }
];

export const benefits = [
  {
    title: 'Project-first learning',
    description: 'Students build practical work from day one instead of only watching tutorials.',
    icon: Rocket
  },
  {
    title: 'Focused cohorts',
    description: 'Short, high-impact batches keep the learning pace clear and consistent.',
    icon: Users
  },
  {
    title: 'Career-ready skills',
    description: 'Every program is designed to leave students with portfolio-worthy outcomes.',
    icon: Sparkles
  }
];

export const whyChooseCards: FeatureCard[] = [
  {
    title: 'Structured Project-Based Learning',
    description:
      'Every Warks cohort is organized around curated assignments and guided tasks so students build real skills through practice, not passive watching.',
    icon: Zap,
    accent: 'linear-gradient(135deg, rgba(254, 215, 170, 0.85), rgba(251, 146, 60, 0.35))'
  },
  {
    title: 'Flexible Learning Schedule',
    description:
      'Learn at a pace that works alongside college, work, or personal commitments with a schedule designed for consistency and progress.',
    icon: CalendarDays,
    accent: 'linear-gradient(135deg, rgba(199, 210, 254, 0.85), rgba(186, 230, 253, 0.4))'
  },
  {
    title: 'Verified Certificates',
    description:
      'Complete the required work and receive a certificate with a unique verification ID to show your progress and achievement.',
    icon: ShieldCheck,
    accent: 'linear-gradient(135deg, rgba(167, 243, 208, 0.85), rgba(134, 239, 172, 0.35))'
  },
  {
    title: 'Real Portfolio Projects',
    description:
      'Choose from practical projects built to reflect real development tasks and leave you with work you can actually present.',
    icon: Briefcase,
    accent: 'linear-gradient(135deg, rgba(216, 180, 254, 0.8), rgba(244, 114, 182, 0.45))'
  }
];

export const whyChooseQuote =
  'Our programs focus on practical execution — you do not just learn concepts, you prove your skills through completed assignments.';

export const programs: Program[] = [
  {
    title: 'Web Development',
    description:
      'Learn how modern websites are planned, built, and shipped with a real-world workflow. By the end, you will have a polished project you can show in your portfolio.',
    duration: '4 weeks',
    skills: ['HTML, CSS, and JavaScript', 'Responsive UI building', 'Git and deployment basics', 'Project structure and teamwork'],
    icon: Laptop2
  },
  {
    title: 'AI Foundations',
    description:
      'Get started with practical AI concepts through simple, hands-on builds. You will understand how to use AI tools responsibly and effectively in projects.',
    duration: '4 weeks',
    skills: ['Prompting basics', 'AI workflow design', 'Model usage concepts', 'Practical automation ideas'],
    icon: Brain
  },
  {
    title: 'Cybersecurity Basics',
    description:
      'Explore the core ideas behind staying safe online and securing digital systems. The program focuses on awareness, prevention, and safe practices.',
    duration: '4 weeks',
    skills: ['Security fundamentals', 'Threat awareness', 'Password and access hygiene', 'Safe browsing practices'],
    icon: LockKeyhole
  }
];

export const highlights = [
  {
    title: 'Clear path, no clutter',
    description: 'A simple curriculum keeps students focused on building instead of getting lost in noise.',
    icon: Code2
  },
  {
    title: 'Mentored progress',
    description: 'Guidance is structured so students know what to do next and how to improve it.',
    icon: ShieldCheck
  }
];
