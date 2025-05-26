import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  border = true,
}) => {
  const paddingMap = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm 
        ${paddingMap[padding]} 
        ${border ? 'border border-gray-100' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;