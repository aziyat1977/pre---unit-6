import React from 'react';
import { 
  X, 
  BookOpen, 
  GraduationCap, 
  User, 
  Zap, 
  Coffee, 
  Activity, 
  Sun, 
  Moon, 
  LayoutGrid, 
  Gamepad2, 
  Library,
  ChevronRight,
  Menu
} from 'lucide-react';
import { UserMode, PersonalityType, ThemeMode, SlideConfig } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideConfig[];
  currentSlideIndex: number;
  onJumpToSlide: (index: number) => void;
  userMode: UserMode;
  setUserMode: (m: UserMode) => void;
  personality: PersonalityType;
  setPersonality: (p: PersonalityType) => void;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onJumpToSlide,
  userMode,
  setUserMode,
  personality,
  setPersonality,
  theme,
  setTheme
}) => {
  
  // Calculate indices dynamically to ensure accuracy if slides are reordered
  const sections = [
    { id: '6.1', label: '6.1 Personality', icon: User, index: slides.findIndex(s => s.lesson === '6.1') },
    { id: '6.2', label: '6.2 Family', icon: LayoutGrid, index: slides.findIndex(s => s.lesson === '6.2') },
    { id: '6.3', label: '6.3 Manners', icon: BookOpen, index: slides.findIndex(s => s.lesson === '6.3') },
    { id: '6.4', label: '6.4 News', icon: Activity, index: slides.findIndex(s => s.lesson === '6.4') },
    { id: 'vocab', label: 'Vocab Master', icon: Library, index: slides.findIndex(s => s.type === 'vocab-master') },
    { id: 'quiz', label: 'Kahoot Arena', icon: Gamepad2, index: slides.findIndex(s => s.type === 'quiz') },
  ];

  const handleJump = (index: number) => {
    if (index !== -1) {
      onJumpToSlide(index);
      onClose();
    }
  };

  return (
    <>
      {/* Dark Overlay - Click to close */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <div className={`fixed inset-y-0 left-0 w-80 md:w-96 bg-white dark:bg-slate-900 shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">Unit 6<span className="text-indigo-500">.</span></h2>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Control Center</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 dark:text-slate-400"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
          
          {/* Navigation Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen size={12} /> Navigation
            </h3>
            <div className="space-y-2">
              {sections.map((section) => {
                const isActive = (slides[currentSlideIndex]?.lesson === section.id) || 
                                 (section.id === 'vocab' && slides[currentSlideIndex]?.type === 'vocab-master') ||
                                 (section.id === 'quiz' && slides[currentSlideIndex]?.type === 'quiz');
                
                return (
                  <button
                    key={section.id}
                    onClick={() => handleJump(section.index)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-700 shadow-sm' 
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                         isActive 
                         ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200' 
                         : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700'
                      }`}>
                        <section.icon size={18} />
                      </div>
                      <span className="font-bold text-sm">{section.label}</span>
                    </div>
                    <ChevronRight size={16} className={`transition-opacity ${
                      isActive 
                        ? 'opacity-100 text-indigo-400' 
                        : 'opacity-0 group-hover:opacity-50'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* User Mode */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap size={12} /> Classroom Mode
            </h3>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setUserMode('student')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  userMode === 'student' 
                    ? 'bg-white dark:bg-slate-600 shadow-sm text-indigo-600 dark:text-white' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <User size={16} /> Student
              </button>
              <button
                onClick={() => setUserMode('teacher')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  userMode === 'teacher' 
                    ? 'bg-white dark:bg-slate-600 shadow-sm text-indigo-600 dark:text-white' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <GraduationCap size={16} /> Teacher
              </button>
            </div>
            {userMode === 'teacher' && (
              <p className="text-[10px] text-indigo-500 dark:text-indigo-400 mt-2 text-center font-medium bg-indigo-50 dark:bg-indigo-900/20 py-1 rounded border border-indigo-100 dark:border-indigo-800">
                Ultra-Detail Teacher Panel Active
              </p>
            )}
          </div>

          {/* Personality Vibe */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity size={12} /> Interface Vibe
            </h3>
            <div className="grid grid-cols-3 gap-2">
               {['introvert', 'ambivert', 'extrovert'].map((type) => (
                 <button 
                   key={type}
                   onClick={() => setPersonality(type as PersonalityType)}
                   className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${personality === type 
                     ? type === 'introvert' ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 shadow-sm' 
                     : type === 'ambivert' ? 'border-teal-400 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 shadow-sm'
                     : 'border-orange-400 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 shadow-sm'
                     : 'border-transparent bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                   }`}
                 >
                   {type === 'introvert' && <Coffee size={20} />}
                   {type === 'ambivert' && <Activity size={20} />}
                   {type === 'extrovert' && <Zap size={20} />}
                   <span className="text-[10px] font-bold capitalize">{type}</span>
                 </button>
               ))}
            </div>
          </div>
        </div>

        {/* Footer: Theme Toggle */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-black/20 sticky bottom-0 z-10">
           <button 
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
             className="w-full flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all active:scale-95"
           >
              <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 text-sm">
                {theme === 'light' ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-indigo-400" />} 
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </span>
              <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                 <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : ''}`}></div>
              </div>
           </button>
        </div>

      </div>
    </>
  );
};