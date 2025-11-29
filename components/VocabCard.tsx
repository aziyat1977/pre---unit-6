import React from 'react';

interface VocabCardProps {
  word: string;
  ru: string;
  uz: string;
}

export const VocabCard: React.FC<VocabCardProps> = ({ word, ru, uz }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 m-2 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 w-full md:w-auto min-w-[220px]">
      <p className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{word}</p>
      <p className="text-emerald-600 dark:text-emerald-400 italic text-sm mb-0.5">{ru}</p>
      <p className="text-violet-600 dark:text-violet-400 italic text-sm">{uz}</p>
    </div>
  );
};
