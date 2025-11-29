import React, { useState, useEffect } from 'react';
import { SLIDES } from './slides';
import { SlideLayout } from './components/SlideLayout';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { UserMode, PersonalityType, ThemeMode } from './types';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // App State
  const [userMode, setUserMode] = useState<UserMode>('student');
  const [personality, setPersonality] = useState<PersonalityType>('ambivert');
  const [theme, setTheme] = useState<ThemeMode>('light');

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex];

  // Theme Handling
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Slide Navigation Helpers
  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const jumpToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable arrow navigation if sidebar is open to prevent accidental slides change
      if (isSidebarOpen) return; 
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isSidebarOpen]);

  return (
    <div className={`w-screen h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden font-sans transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-neutral-900'}`}>
      
      {/* Background decoration - Dynamic based on personality */}
      <div className={`absolute inset-0 opacity-20 pointer-events-none transition-all duration-1000 ${
        personality === 'introvert' ? 'saturate-50 brightness-75' : 
        personality === 'extrovert' ? 'saturate-200 brightness-110' : 'saturate-100'
      }`}>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Top Left Menu Button - High Z-Index to stay clickable */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="absolute top-6 left-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md shadow-lg border border-white/10 transition-all hover:scale-105 active:scale-95 group"
        aria-label="Open Menu"
      >
        <Menu className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Main Slide Container */}
      <div className="w-full max-w-[160vh] h-[50vh] md:h-[90vh] aspect-video relative z-10 transition-all duration-300">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-neutral-800/50 dark:border-slate-700 ring-1 ring-white/10">
            <SlideLayout 
              key={currentSlide.id}
              page={currentSlideIndex + 1} 
              total={totalSlides}
              tag={currentSlide.tag}
              tagColorClass={currentSlide.theme.accent}
              isCover={currentSlide.type === 'cover'}
              bgGradient={currentSlide.theme.bgGradient}
              teacherNotes={currentSlide.teacherNotes}
              userMode={userMode}
              personality={personality}
            >
              {currentSlide.component}
            </SlideLayout>
        </div>
      </div>

      {/* Navigation Controls - Overlay */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-4 z-40">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className={`
            p-4 rounded-full backdrop-blur-md border border-white/20 text-white shadow-lg transition-all
            ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-105 active:scale-95 bg-black/20'}
          `}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`
            p-4 rounded-full backdrop-blur-md border border-white/20 text-white shadow-lg transition-all
            ${currentSlideIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-105 active:scale-95 bg-black/20'}
          `}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar (Bottom Edge) */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-40">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>

      {/* Sidebar Navigation & Settings - Highest Z-Index */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        slides={SLIDES}
        currentSlideIndex={currentSlideIndex}
        onJumpToSlide={jumpToSlide}
        userMode={userMode}
        setUserMode={setUserMode}
        personality={personality}
        setPersonality={setPersonality}
        theme={theme}
        setTheme={setTheme}
      />

    </div>
  );
};

export default App;