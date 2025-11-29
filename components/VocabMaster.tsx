import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { MASTER_VOCAB } from '../constants';

export const VocabMaster: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVocab = MASTER_VOCAB.filter(v => 
    v.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.ru.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
      <div className="p-6 bg-indigo-600 dark:bg-indigo-900 text-white flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Vocabulary Master</h2>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-200" />
          <input 
            type="text" 
            placeholder="Search words..." 
            className="w-full pl-10 pr-4 py-2 bg-indigo-700/50 dark:bg-black/20 rounded-full border border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm placeholder-indigo-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 no-scrollbar">
        {filteredVocab.map((item, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:shadow-md transition-all group">
             <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">{item.word}</h3>
                <span className="text-xs font-mono text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">{item.unit}</span>
             </div>
             <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-snug">{item.definition}</p>
             <div className="flex gap-4 border-t border-slate-100 dark:border-slate-700 pt-3">
               <div>
                  <span className="text-xs text-slate-400 block uppercase">Russian</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium italic">{item.ru}</span>
               </div>
               <div>
                  <span className="text-xs text-slate-400 block uppercase">Uzbek</span>
                  <span className="text-violet-600 dark:text-violet-400 font-medium italic">{item.uz}</span>
               </div>
             </div>
          </div>
        ))}
        {filteredVocab.length === 0 && (
           <div className="col-span-full text-center py-10 text-slate-400 dark:text-slate-500">
             No words found matching "{searchTerm}"
           </div>
        )}
      </div>
    </div>
  );
};
