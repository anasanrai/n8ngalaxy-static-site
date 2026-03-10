
import GlowCard from "@/components/ui/GlowCard";
import { Zap } from "lucide-react";

const categories = [
  { name: "Marketing Automation", icon: <Zap size={24} /> },
  { name: "Sales & CRM", icon: <Zap size={24} /> },
  { name: "E-commerce", icon: <Zap size={24} /> },
  { name: "DevOps & IT", icon: <Zap size={24} /> },
  { name: "Social Media", icon: <Zap size={24} /> },
  { name: "Customer Support", icon: <Zap size={24} /> },
  { name: "Project Management", icon: <Zap size={24} /> },
  { name: "Data & Analytics", icon: <Zap size={24} /> },
];

export function CategoryGrid() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-text">
        Find Your Perfect Workflow
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-subtext">
        From marketing to DevOps, we have a template for you.
      </p>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((category) => (
          <GlowCard key={category.name} className="p-6 flex flex-col items-center justify-center">
            <div className="text-purple-400">{category.icon}</div>
            <h3 className="mt-4 font-semibold text-text">{category.name}</h3>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
