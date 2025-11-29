import React from 'react';
import { TeacherPanel } from './TeacherPanel';
import { TeacherNote, UserMode, PersonalityType } from '../types';

interface SlideLayoutProps {
  children: React.ReactNode;
  tag?: string;
  page: number;
  total: number;
  tagColorClass?: string;
  isCover?: boolean;
  bgGradient?: string;
  teacherNotes?: TeacherNote;
  userMode: UserMode;
  personality: PersonalityType;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  tag, 
  page, 
  total, 
  tagColorClass = 'text-slate-500', 
  isCover = false,
  bgGradient,
  teacherNotes,
  userMode,
  personality,
}) => {
  // Personality Vibe Styles
  const getPersonalityStyles = () => {
    switch (personality) {
      case 'introvert': return 'transition-all duration-700 ease-in-out';
      case 'extrovert': return 'transition-all duration-200 cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      default: return 'transition-all duration-300 ease-out';
    }
  };

  if (isCover) {
    return (
      <div 
        className={`w-full h-full flex flex-col items-center justify-center text-center text-white p-8 relative overflow-hidden ${getPersonalityStyles()}`}
        style={{ background: bgGradient }}
      >
        <div className="z-10 relative animate-fade-in-up">
           {children}
        </div>
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full flex flex-col bg-white dark:bg-slate-900 relative ${getPersonalityStyles()}`}>
      
      {/* Header */}
      <div className="w-full px-8 py-4 flex justify-between items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-20 border-b border-slate-100 dark:border-slate-800">
        <span className={`font-extrabold uppercase tracking-widest text-xs md:text-sm ${tagColorClass}`}>
          {tag}
        </span>
        <div className="flex items-center gap-4">
           {userMode === 'teacher' && teacherNotes && (
             <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-md font-bold hidden md:inline-block animate-pulse">
               Teacher Mode Active
             </span>
           )}
           <span className="font-mono text-slate-400 text-xs md:text-sm">
             {page}/{total}
           </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-12 w-full mx-auto max-w-7xl no-scrollbar">
        <div className="h-full flex flex-col items-center justify-center animate-fade-in relative z-10">
          {children}
        </div>
      </div>

      {/* Teacher Panel Overlay */}
      <TeacherPanel isOpen={userMode === 'teacher'} notes={teacherNotes} />
    </div>
  );
};