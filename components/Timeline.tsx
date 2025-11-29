import React from 'react';

export const Timeline: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Past Simple */}
      <div className="relative">
        <h3 className="text-left font-bold text-blue-600 mb-8 text-xl">Past Simple (Finished Time)</h3>
        <div className="flex items-center justify-between relative w-full h-16">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -z-10 rounded-full"></div>
            
            {/* Event Point */}
            <div className="absolute left-[30%] top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-100"></div>
                <span className="mt-4 font-bold text-blue-600 bg-white px-2 rounded shadow-sm border border-blue-100">2005</span>
            </div>

            {/* Now Point */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                <span className="mt-4 font-bold text-slate-500 text-sm">NOW</span>
            </div>
        </div>
        <p className="text-left bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 text-slate-700 mt-4">
            "He <strong>lost</strong> his mother in 2005." <span className="text-sm text-slate-500 block sm:inline sm:ml-2">(We know when)</span>
        </p>
      </div>

      {/* Present Perfect */}
      <div className="relative">
        <h3 className="text-left font-bold text-emerald-600 mb-8 text-xl">Present Perfect (Experience / Result)</h3>
        <div className="flex items-center justify-between relative w-full h-16">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -z-10 rounded-full"></div>
            
            {/* Event Points (Undefined) */}
            <div className="absolute left-[35%] top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-100"></div>
                <span className="mt-4 font-bold text-emerald-600 text-sm">?</span>
            </div>
             <div className="absolute left-[55%] top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-100"></div>
                <span className="mt-4 font-bold text-emerald-600 text-sm">?</span>
            </div>

            {/* Now Point */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                <span className="mt-4 font-bold text-slate-500 text-sm">NOW</span>
            </div>
        </div>
        <p className="text-left bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500 text-slate-700 mt-4">
            "He <strong>has found</strong> his mother." <span className="text-sm text-slate-500 block sm:inline sm:ml-2">(Time is not important / Result is)</span>
        </p>
      </div>
    </div>
  );
};
