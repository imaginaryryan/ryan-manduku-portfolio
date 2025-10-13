import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const Loading = ({ size = 'md', fullScreen = false }: LoadingProps) => {
  const sizeClasses = {
    sm: 'scale-75',
    md: 'scale-100',
    lg: 'scale-150',
  };
  
  return (
    <div className={`flex justify-center items-center ${fullScreen ? 'fixed inset-0 z-50 bg-background' : 'w-full'}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="dots-flow" />
      </div>
    </div>
  );
};

export default Loading;