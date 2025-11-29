import React from 'react';
import { Settings, Moon, Sun, User, GraduationCap, Zap, Coffee, Activity } from 'lucide-react';
import { UserMode, PersonalityType, ThemeMode } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userMode: UserMode;
  setUserMode: (m: UserMode) => void;
  personality: PersonalityType;
  setPersonality: (p: PersonalityType) => void;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen, onClose, userMode, setUserMode, personality, setPersonality, theme, setTheme
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-scale-up border border-slate-200 dark:border-slate-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white">✕</button>
        
        <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-2">
          <Settings className="text-indigo-500" /> Experience Settings
        </h2>

        {/* User Mode */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">User Mode</label>
          <div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
            <button 
              onClick={() => setUserMode('student')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${userMode === 'student' ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-300 font-bold' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <User size={16} /> Student
            </button>
            <button 
              onClick={() => setUserMode('teacher')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${userMode === 'teacher' ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-300 font-bold' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <GraduationCap size={16} /> Teacher
            </button>
          </div>
          {userMode === 'teacher' && <p className="text-xs text-indigo-500 mt-2">✨ Teacher notes enabled</p>}
        </div>

        {/* Personality Theme */}
        <div className="mb-8">
           <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Personality Vibe</label>
           <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setPersonality('introvert')}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1 transition-all ${personality === 'introvert' ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'border-transparent bg-slate-50 dark:bg-slate-700 text-slate-500'}`}
              >
                <Coffee size={20} />
                <span className="text-xs font-bold">Introvert</span>
              </button>
              <button 
                onClick={() => setPersonality('ambivert')}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1 transition-all ${personality === 'ambivert' ? 'border-teal-400 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300' : 'border-transparent bg-slate-50 dark:bg-slate-700 text-slate-500'}`}
              >
                <Activity size={20} />
                <span className="text-xs font-bold">Ambivert</span>
              </button>
              <button 
                onClick={() => setPersonality('extrovert')}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1 transition-all ${personality === 'extrovert' ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300' : 'border-transparent bg-slate-50 dark:bg-slate-700 text-slate-500'}`}
              >
                <Zap size={20} />
                <span className="text-xs font-bold">Extrovert</span>
              </button>
           </div>
        </div>

        {/* Theme Mode */}
        <div>
           <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Appearance</label>
           <button 
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
             className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition"
           >
              <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />} 
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </span>
              <div className={`w-12 h-6 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                 <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${theme === 'dark' ? 'translate-x-6' : ''}`}></div>
              </div>
           </button>
        </div>

        <button onClick={onClose} className="w-full mt-8 bg-slate-900 dark:bg-indigo-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition">
          Save Settings
        </button>
      </div>
    </div>
  );
};
