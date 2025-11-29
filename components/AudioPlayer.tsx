import React, { useState } from 'react';
import { Headphones, Volume2, AlertCircle } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  src: string;
  subtitle?: string;
  colorClass?: string;
  icon?: 'headphones' | 'volume';
  compact?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  title, 
  src,
  subtitle, 
  colorClass = 'indigo',
  icon = 'headphones',
  compact = false
}) => {
  const [loadError, setLoadError] = useState(false);
  
  // Theme configuration
  const getTheme = () => {
    switch (colorClass) {
      case 'pink': return { 
          bg: 'bg-pink-50 dark:bg-pink-900/20', 
          border: 'border-pink-200 dark:border-pink-800', 
          textMain: 'text-pink-900 dark:text-pink-100', 
          textSub: 'text-pink-700 dark:text-pink-300', 
          iconBg: 'bg-pink-600 dark:bg-pink-500' 
      };
      case 'teal': return { 
          bg: 'bg-teal-50 dark:bg-teal-900/20', 
          border: 'border-teal-200 dark:border-teal-800', 
          textMain: 'text-teal-900 dark:text-teal-100', 
          textSub: 'text-teal-700 dark:text-teal-300', 
          iconBg: 'bg-teal-600 dark:bg-teal-500' 
      };
      case 'orange': return { 
          bg: 'bg-orange-50 dark:bg-orange-900/20', 
          border: 'border-orange-200 dark:border-orange-800', 
          textMain: 'text-orange-900 dark:text-orange-100', 
          textSub: 'text-orange-700 dark:text-orange-300', 
          iconBg: 'bg-orange-600 dark:bg-orange-500' 
      };
      default: return { 
          bg: 'bg-indigo-50 dark:bg-indigo-900/20', 
          border: 'border-indigo-200 dark:border-indigo-800', 
          textMain: 'text-indigo-900 dark:text-indigo-100', 
          textSub: 'text-indigo-700 dark:text-indigo-300', 
          iconBg: 'bg-indigo-600 dark:bg-indigo-500' 
      };
    }
  };

  const theme = getTheme();

  return (
    <div className={`${theme.bg} ${theme.border} border-2 rounded-xl p-3 w-full flex flex-col md:flex-row items-center gap-4 transition-all hover:shadow-md relative overflow-hidden z-20`}>
      
      {/* Icon & Text Section */}
      <div className="flex items-center gap-4 w-full md:w-auto min-w-0 flex-1 relative z-10">
        <div className={`${theme.iconBg} text-white p-3 rounded-full flex-shrink-0 shadow-sm`}>
          {icon === 'headphones' ? <Headphones size={20} /> : <Volume2 size={20} />}
        </div>
        <div className="flex-1 text-left min-w-0">
          <h4 className={`font-bold ${theme.textMain} truncate text-sm md:text-base`}>{title}</h4>
          {!compact && subtitle && <p className={`text-xs md:text-sm ${theme.textSub} truncate opacity-90`}>{subtitle}</p>}
          
          {/* Error Message */}
          {loadError && (
            <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-bold animate-pulse">
              <AlertCircle size={12} /> File not found
            </p>
          )}
        </div>
      </div>
      
      {/* Audio Control Section */}
      <div className="w-full md:w-auto flex-shrink-0 relative z-30">
        {/* 
            Fixed Audio Element:
            1. Using 'key' forces a full remount if React acts up, ensuring clean state.
            2. 'src' passed directly to attribute.
            3. Removed all filters/opacity to ensure play button is clickable.
        */}
        <audio 
          key={src}
          controls 
          onError={() => setLoadError(true)}
          className="w-full md:w-64 h-10 block cursor-pointer accent-indigo-600"
          controlsList="nodownload"
          preload="metadata"
        >
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};