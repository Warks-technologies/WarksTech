import type { LucideIcon } from 'lucide-react';
import { Code2, ShieldCheck, Sparkles, Laptop2, Brain, LockKeyhole, Users, Rocket } from 'lucide-react';

export type Program = {
  title: string;
  description: string;
  duration: string;
  skills: string[];
  icon: LucideIcon;
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
