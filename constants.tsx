import React from 'react';
import { Phase, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#mission' },
  { label: 'Mission', href: '#identity' },
  { label: 'Roadmap', href: '#journey' },
  { label: 'Allocation', href: '#allocation' },
  { label: 'Governance', href: '#governance' },
  { label: 'Contact', href: '#contact' },
];

export const PHASES: Phase[] = [
  {
    id: '0',
    title: 'Phase 0 — Validation Protocol',
    objective: 'Generate independently verifiable real-money performance',
    participants: ['Athletes', 'Small sophisticated allocators'],
    structure: 'Defined risk sleeves',
    focus: 'Discipline, execution integrity, documentation',
    capacity: 'Intentionally constrained',
    status: 'current'
  },
  {
    id: '1',
    title: 'Phase 1 — Seed Expansion',
    objective: 'Broaden capital base with qualified HNWIs & small family offices',
    trigger: 'Minimum 12–18 months of validated Phase 0 results',
    participants: ['Qualified HNWIs', 'Small family offices', 'Seed allocators'],
    structure: 'Formalized reporting, structured onboarding',
    capacity: 'Controlled scaling only',
    status: 'future'
  },
  {
    id: '2',
    title: 'Phase 2 — Institutional Fund Structure',
    objective: 'Transition to institutional vehicle',
    requirements: ['Audited track record', 'Governance maturity', 'Infrastructure readiness'],
    participants: ['Endowments', 'Pensions', 'Long-horizon allocators'],
    structure: 'Institutional investment vehicle',
    capacity: 'Institutional scale',
    status: 'future'
  }
];

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative ${className} flex items-center justify-center`}>
    {/* Circle Background matching the image style */}
    <div className="absolute inset-0 rounded-full border border-gold/30 bg-[#020617] shadow-[inset_0_0_20px_rgba(251,191,36,0.1)]"></div>
    {/* Fractal/Glow effect simulation */}
    <div className="absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.2)_0%,_transparent_70%)]"></div>
    {/* Serif SA Text */}
    <span className="relative z-10 font-serif text-gold font-light tracking-tighter" style={{ fontSize: '1.2em', transform: 'translateY(-1px)' }}>
      SA
    </span>
  </div>
);