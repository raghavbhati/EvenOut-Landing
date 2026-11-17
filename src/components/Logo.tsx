import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showTagline = false 
}) => {
  const sizeClasses = {
    sm: {
      mark: 'w-7 h-7 rounded-lg',
      bars: 'w-3.5 h-1',
      text: 'text-xl',
      tagline: 'text-[10px]'
    },
    md: {
      mark: 'w-9 h-9 rounded-xl',
      bars: 'w-4 h-1.5',
      text: 'text-2xl',
      tagline: 'text-xs'
    },
    lg: {
      mark: 'w-12 h-12 rounded-2xl',
      bars: 'w-6 h-2',
      text: 'text-3xl',
      tagline: 'text-sm'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon: Tangerine background with Ink #111111 balance bars */}
      <div 
        className={`${currentSize.mark} bg-tangerine flex flex-col items-center justify-center gap-1 shadow-sm flex-shrink-0 transition-transform hover:scale-105`}
        title="EvenOut — Even, then Out."
      >
        {/* Even bars strictly in Ink #111111 as per contrast rule */}
        <span className={`${currentSize.bars} bg-ink rounded-full`}></span>
        <span className={`${currentSize.bars} bg-ink rounded-full`}></span>
      </div>

      <div className="flex flex-col">
        {/* Logo Wordmark in Sora Bold (-30 tracking) */}
        <span className={`font-logo font-bold tracking-[-0.03em] ${currentSize.text} text-ink leading-tight flex items-center`}>
          Even<span className="text-tangerine-700">Out</span>
        </span>
        {showTagline && (
          <span className={`text-ink-muted font-medium ${currentSize.tagline} tracking-normal`}>
            Shared moments. Sorted.
          </span>
        )}
      </div>
    </div>
  );
};
