
import { Search, Download, Zap } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';

const steps = [
  {
    icon: <Search size={32} />,
    title: '1. Find Your Template',
    description: 'Browse our marketplace of 500+ n8n workflows.',
  },
  {
    icon: <Download size={32} />,
    title: '2. Purchase & Download',
    description: 'Securely purchase and instantly download the workflow JSON file.',
  },
  {
    icon: <Zap size={32} />,
    title: '3. Import & Automate',
    description: 'Import the file into your n8n instance and start automating.',
  },
];

export function HowItWorks() {
  return (
    <div className="py-20 bg-background-secondary">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text">How It Works</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-subtext">
          Start automating in just a few clicks.
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <GlowCard key={step.title} className="p-8 text-center">
            <div className="flex justify-center text-purple-400">{step.icon}</div>
            <h3 className="mt-6 text-xl font-bold text-text">{step.title}</h3>
            <p className="mt-2 text-subtext">{step.description}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
