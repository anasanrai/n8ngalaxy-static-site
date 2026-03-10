
import GlowCard from "@/components/ui/GlowCard";

export function Stats() {
  // In a real app, these stats would be fetched from the database
  const stats = [
    { name: 'Total Revenue', value: '$12,345' },
    { name: 'Total Sales', value: '123' },
    { name: 'Active Listings', value: '12' },
    { name: 'Pending Payout', value: '$1,234' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <GlowCard key={stat.name} className="p-6">
          <p className="text-sm font-medium text-subtext">{stat.name}</p>
          <p className="mt-1 text-3xl font-semibold tracking-tight text-text">{stat.value}</p>
        </GlowCard>
      ))}
    </div>
  );
}
