import { Icon } from '../atoms/Icon';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: 'folder' | 'chevron-down' | 'user';
}

export const EmptyState = ({ 
  title, 
  description, 
  icon = 'folder' 
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
      <div className="mb-5 relative">
        <div className="absolute inset-0 bg-gray-200 rounded-full blur-xl opacity-50"></div>
          <Icon 
            name={icon} 
            size={56} 
            className="text-zinc-400" 
          />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
};
