import React from 'react';
import { TeacherNote } from '../types';
import { BookOpen, CheckCircle, Clock, Lightbulb } from 'lucide-react';

interface TeacherPanelProps {
  isOpen: boolean;
  notes?: TeacherNote;
}

export const TeacherPanel: React.FC<TeacherPanelProps> = ({ isOpen, notes }) => {
  if (!isOpen || !notes) return null;

  return (
    <div className="fixed right-4 top-20 bottom-24 w-80 bg-yellow-50 dark:bg-yellow-900/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-yellow-200 dark:border-yellow-700/50 p-6 overflow-y-auto z-50 animate-slide-in-right">
      <h3 className="text-xl font-extrabold text-yellow-800 dark:text-yellow-100 mb-6 flex items-center gap-2 border-b-2 border-yellow-200 dark:border-yellow-700 pb-2">
        <BookOpen size={24} /> Teacher's Notes
      </h3>

      <div className="space-y-6">
        {/* Aim */}
        <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl">
          <h4 className="font-bold text-xs uppercase text-yellow-600 dark:text-yellow-200 mb-2 flex items-center gap-1">
             <Lightbulb size={14} /> Lesson Aim
          </h4>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{notes.aim}</p>
        </div>

        {/* Timing */}
        {notes.timing && (
            <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300 font-bold bg-yellow-100 dark:bg-yellow-800/50 p-2 rounded-lg justify-center">
                <Clock size={16} /> <span>Suggested Time: {notes.timing}</span>
            </div>
        )}

        {/* Procedure */}
        <div>
           <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 mb-2">Procedure</h4>
           <ul className="space-y-2">
             {notes.procedure.map((step, idx) => (
               <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                 <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400 mt-1">{idx+1}.</span>
                 <span>{step}</span>
               </li>
             ))}
           </ul>
        </div>

        {/* CCQs */}
        {notes.ccqs && (
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
             <h4 className="font-bold text-xs uppercase text-blue-600 dark:text-blue-300 mb-2">CCQs (Check Understanding)</h4>
             <ul className="list-disc pl-4 space-y-1">
                {notes.ccqs.map((ccq, idx) => (
                   <li key={idx} className="text-sm text-blue-900 dark:text-blue-100 italic">"{ccq}"</li>
                ))}
             </ul>
          </div>
        )}

        {/* Answer Key */}
        {notes.answerKey && (
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800">
             <h4 className="font-bold text-xs uppercase text-emerald-600 dark:text-emerald-300 mb-2 flex items-center gap-1">
                <CheckCircle size={14} /> Answer Key
             </h4>
             <ul className="space-y-1">
                {notes.answerKey.map((ans, idx) => (
                   <li key={idx} className="text-sm text-emerald-900 dark:text-emerald-100 font-mono">
                      <span className="opacity-50 mr-2">{idx+1})</span>{ans}
                   </li>
                ))}
             </ul>
          </div>
        )}
      </div>
    </div>
  );
};
