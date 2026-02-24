import { Brain, Zap, Eye } from 'lucide-react';

export type SensorType = 'EEG' | 'GSR' | 'EyeTracker';

interface SensorBadgeProps {
  sensor: SensorType;
  size?: 'sm' | 'md';
}

const sensorConfig = {
  EEG: {
    icon: Brain,
    label: 'EEG',
    base: 'text-gray-700 bg-gray-100',
    groupHover: 'group-hover:bg-gray-200'
  },
  GSR: {
    icon: Zap,
    label: 'GSR',
    base: 'text-gray-700 bg-gray-100',
    groupHover: 'group-hover:bg-gray-200'
  },
  EyeTracker: {
    icon: Eye,
    label: 'Eye tracker',
    base: 'text-gray-700 bg-gray-100',
    groupHover: 'group-hover:bg-gray-200'
  }
};

export const SensorBadge = ({ sensor, size = 'md' }: SensorBadgeProps) => {
  const config = sensorConfig[sensor];
  const Icon = config.icon;
  
  const sizeClasses = size === 'sm' 
    ? 'px-2 py-1 text-xs gap-1' 
    : 'px-2.5 py-1.5 text-sm gap-1.5';
  
  const iconSize = size === 'sm' ? 12 : 14;
  
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${config.base} ${sizeClasses} ${config.groupHover}`}>
      <Icon size={iconSize} />
      {config.label}
    </span>
  );
};
