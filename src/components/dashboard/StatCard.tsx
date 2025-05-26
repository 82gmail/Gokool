import React from 'react';
import Card from '../ui/Card';

interface StatCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  iconColor?: string;
  prefix?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  iconColor = 'bg-blue-100 text-blue-600',
  prefix,
}) => {
  const formattedValue = typeof value === 'number' && prefix === '₹' 
    ? new Intl.NumberFormat('en-IN').format(value)
    : value;

  return (
    <Card className="flex flex-col items-start">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${iconColor}`}>
        {icon}
      </div>
      <div className="mt-2">
        <h3 className="text-2xl font-bold">
          {prefix}{formattedValue}
        </h3>
        <p className="text-gray-500 text-sm">{label}</p>
      </div>
    </Card>
  );
};

export default StatCard;