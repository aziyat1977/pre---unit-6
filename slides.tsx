import React from 'react';
import { SlideConfig } from './types';
import { QUESTIONS } from './constants';
import { VocabCard } from './components/VocabCard';
import { AudioPlayer } from './components/AudioPlayer';
import { Roulette } from './components/Roulette';
import { Timeline } from './components/Timeline';
import { VocabMaster } from './components/VocabMaster';
import { KahootQuiz } from './components/KahootQuiz';
import { QUIZ_TESTS } from './constants';

// --- Helper for placeholders ---
const PlaceHolderImg = ({ seed, alt }: { seed: string, alt: string }) => (
  <img 
    src={`https://picsum.photos/seed/${seed}/800/500`} 
    alt={alt} 
    className="max-h-[55vh] max-w-full rounded-xl shadow-lg object-contain bg-white dark:bg-slate-800"
  />
);

// Wrapper for Quiz selection/play
const QuizSection = () => {
  const [activeTestId, setActiveTestId] = React.useState<number | null>(null);

  if (activeTestId) {
    const test = QUIZ_TESTS.find(t => t.id === activeTestId);
    if (test) return <KahootQuiz test={test} onExit={() => setActiveTestId(null)} />;
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl font-black text-purple-700 dark:text-purple-300 mb-8 tracking-tight uppercase">Kahoot Arena</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-5xl overflow-y-auto max-h-[60vh] p-2 no-scrollbar">
        {QUIZ_TESTS.map((test) => (
          <button 
            key={test.id}
            onClick={() => setActiveTestId(test.id)}
            className="bg-white dark:bg-slate-800 border-2 border-purple-100 dark:border-purple-900 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/50 p-4 rounded-xl shadow-sm hover:shadow-xl transition-all group flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold group-hover:scale-110 transition">
              {test.id}
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">TEST</span>
          </button>
        ))}
      </div>
      <p className="mt-8 text-slate-500 dark:text-slate-400">Select a test to enter the arena.</p>
    </div>
  );
};

export const SLIDES: SlideConfig[] = [
  // ================= 6.1 =================
  {
    id: 1,
    lesson: "6.1",
    type: "cover",
    theme: { primary: "indigo", secondary: "purple", accent: "text-indigo-600 dark:text-indigo-400", bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    component: (
      <>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight">Unit 6.1</h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 opacity-90">The Quiet Revolution</h2>
        <div className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-xl inline-block">Lesson 1: Personality</div>
        <p className="mt-6 text-lg opacity-75 font-medium tracking-wide">Introverts vs. Extroverts</p>
      </>
    ),
    teacherNotes: {
      aim: "Introduce personality adjectives and the concept of introversion/extroversion.",
      procedure: ["Greet students.", "Show slide.", "Ask: 'Which are you?' as a warmer."],
      timing: "5 mins"
    }
  },
  {
    id: 2,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Vocabulary",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    teacherNotes: {
        aim: "Clarify meaning and pronunciation of key adjectives.",
        procedure: ["Drill pronunciation.", "Ask CCQs (e.g., 'Is a shy person loud?')."],
        answerKey: ["1. Sociable", "2. Shy", "3. Confident"],
        ccqs: ["If I talk to everyone at a party, am I shy?", "Can a lazy person be successful?"]
    },
    component: (
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Describe Character</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <VocabCard word="Shy" ru="Застенчивый" uz="Uyatchan" />
          <VocabCard word="Sociable" ru="Общительный" uz="Kirishimli" />
          <VocabCard word="Confident" ru="Уверенный" uz="O'ziga ishongan" />
          <VocabCard word="Lazy" ru="Ленивый" uz="Dangasa" />
          <VocabCard word="Patient" ru="Терпеливый" uz="Sabrli" />
          <VocabCard word="Clever" ru="Умный" uz="Aqlli" />
        </div>
      </div>
    )
  },
  {
    id: 3,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Listening",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">Task 6.1</h2>
        <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl w-full border border-indigo-100 dark:border-indigo-800">
           <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 text-center">Listen to three speakers describing people. Which adjectives fit?</p>
           <AudioPlayer src="Track_6.1.mp3" title="Matching People" colorClass="indigo" />
        </div>
      </div>
    )
  },
  {
    id: 4,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Reading",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    component: <PlaceHolderImg seed="6.1reading" alt="The Quiet Revolution Text" />
  },
  {
    id: 5,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Task",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    teacherNotes: {
        aim: "Freer practice of personality vocab.",
        procedure: ["Put students in pairs.", "Monitor for usage of target vocab.", "Feedback on board."]
    },
    component: (
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Are you an Introvert or Extrovert?</h2>
        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border-l-8 border-indigo-500 text-left shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-300">The Survey</h3>
          <p className="mb-4 text-slate-600 dark:text-slate-300">Interview 3 classmates using these questions:</p>
          <ul className="list-disc pl-5 space-y-3 text-lg text-slate-700 dark:text-slate-200">
            <li>Do you prefer working alone or in a group?</li>
            <li>Do you like loud parties or quiet dinners?</li>
            <li>Are you a good listener?</li>
          </ul>
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700 font-bold text-center text-indigo-600 dark:text-indigo-400 text-lg">
            Report: "Ali is <span className="underline decoration-wavy decoration-indigo-300">more sociable than</span> Valya."
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Grammar",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    teacherNotes: {
        aim: "Clarify form of comparatives.",
        procedure: ["Elicit the rules from examples.", "Highlight irregulars."],
        ccqs: ["Can I say 'more quiet'?", "Is 'gooder' a word?"]
    },
    component: (
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Comparisons (MFP)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4 border-b border-emerald-200 dark:border-emerald-800 pb-2">Short Adjectives</h3>
            <p className="text-lg text-slate-700 dark:text-slate-200">Quiet → Quiet<span className="font-bold text-rose-500">er</span></p>
            <p className="text-lg text-slate-700 dark:text-slate-200">Smart → Smart<span className="font-bold text-rose-500">er</span></p>
            <p className="text-xs mt-4 text-emerald-600 dark:text-emerald-300 font-medium bg-emerald-100 dark:bg-emerald-900/50 inline-block px-2 py-1 rounded">Rule: +er</p>
          </div>
          <div className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-xl border border-sky-100 dark:border-sky-800 shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400 mb-4 border-b border-sky-200 dark:border-sky-800 pb-2">Long Adjectives</h3>
            <p className="text-lg text-slate-700 dark:text-slate-200">Confident → <span className="font-bold text-rose-500">More</span> confident</p>
            <p className="text-lg text-slate-700 dark:text-slate-200">Creative → <span className="font-bold text-rose-500">More</span> creative</p>
            <p className="text-xs mt-4 text-sky-600 dark:text-sky-300 font-medium bg-sky-100 dark:bg-sky-900/50 inline-block px-2 py-1 rounded">Rule: use MORE</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800 shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-4 border-b border-amber-200 dark:border-amber-800 pb-2">Irregular</h3>
            <p className="text-lg text-slate-700 dark:text-slate-200">Good → <span className="font-bold text-rose-500">Better</span></p>
            <p className="text-lg text-slate-700 dark:text-slate-200">Bad → <span className="font-bold text-rose-500">Worse</span></p>
            <p className="text-xs mt-4 text-amber-600 dark:text-amber-300 font-medium bg-amber-100 dark:bg-amber-900/50 inline-block px-2 py-1 rounded">Rule: Memorize</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Pronunciation",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Pronunciation & Drills</h2>
         <div className="space-y-4 w-full">
            <AudioPlayer src="Track_6.2.mp3" title="6.2 Pronunciation 'as'" colorClass="indigo" icon="volume" />
            <AudioPlayer src="Track_6.3.mp3" title="6.3 Drill Sentences" colorClass="indigo" icon="volume" />
         </div>
      </div>
    )
  },
  {
    id: 8,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Practice",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    component: <PlaceHolderImg seed="6.1practice" alt="Comparison Exercises" />
  },
  {
    id: 9,
    lesson: "6.1",
    type: "content",
    tag: "6.1 Speaking",
    theme: { primary: "indigo", secondary: "slate", accent: "text-indigo-600 dark:text-indigo-400" },
    component: (
      <div className="w-full text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-indigo-900 dark:text-indigo-200">Personality Talk</h2>
        <Roulette questions={QUESTIONS.lesson1} color="bg-indigo-600 hover:bg-indigo-700" />
      </div>
    )
  },

  // ================= 6.2 =================
  {
    id: 10,
    lesson: "6.2",
    type: "cover",
    theme: { primary: "pink", secondary: "rose", accent: "text-pink-600 dark:text-pink-400", bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    component: (
      <>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight">Unit 6.2</h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 opacity-90">A Long Way Home</h2>
        <div className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold shadow-xl inline-block">Lesson 2: Family & Stories</div>
      </>
    )
  },
  {
    id: 11,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Vocabulary",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: (
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Extended Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-8">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="py-2 border-b border-slate-100 dark:border-slate-700"><span className="font-bold text-lg text-slate-700 dark:text-slate-200">Stepmother</span> <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">Мачеха</span></div>
              <div className="py-2 border-b border-slate-100 dark:border-slate-700"><span className="font-bold text-lg text-slate-700 dark:text-slate-200">Mother-in-law</span> <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">Свекровь</span></div>
              <div className="py-2"><span className="font-bold text-lg text-slate-700 dark:text-slate-200">Single Parent</span> <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">Родитель-одиночка</span></div>
           </div>
           <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="py-2 border-b border-slate-100 dark:border-slate-700"><span className="font-bold text-lg text-slate-700 dark:text-slate-200">Adopt</span> <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">Усыновить</span></div>
              <div className="py-2 border-b border-slate-100 dark:border-slate-700"><span className="font-bold text-lg text-slate-700 dark:text-slate-200">Twins</span> <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">Близнецы</span></div>
              <div className="py-2"><span className="font-bold text-lg text-slate-700 dark:text-slate-200">Relatives</span> <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">Родственники</span></div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Listening",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Vocab Check</h2>
         <div className="space-y-4 w-full">
            <AudioPlayer src="Track_6.4.mp3" title="6.4 Definitions Quiz" colorClass="pink" />
            <AudioPlayer src="Track_6.5.mp3" title="6.5 Check Answers" colorClass="pink" />
         </div>
      </div>
    )
  },
  {
    id: 13,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Reading",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: (
      <div className="flex flex-col md:flex-row gap-8 items-center h-full">
         <div className="flex-1 h-full w-full">
            <img src="https://picsum.photos/seed/saroo/600/800" className="w-full h-full object-cover rounded-xl shadow-lg opacity-90 hover:opacity-100 transition" alt="Saroo Story" />
         </div>
         <div className="flex-1 flex flex-col justify-center gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
               <h3 className="font-bold text-3xl mb-4 text-slate-800 dark:text-slate-100">Saroo's Journey</h3>
               <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">Listen to the true story of how a boy found his mother using Google Earth after 25 years.</p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 14,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Listening",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">The Story</h2>
         <div className="p-8 bg-pink-50 dark:bg-pink-900/20 rounded-2xl w-full border border-pink-100 dark:border-pink-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 text-center">Track 6.6</p>
            <AudioPlayer src="Track_6.6.mp3" title="Saroo's Story" colorClass="pink" />
         </div>
      </div>
    )
  },
  {
    id: 15,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Grammar",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: (
      <div className="w-full">
         <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100 text-center">Past Simple vs. Present Perfect</h2>
         <Timeline />
      </div>
    )
  },
  {
    id: 16,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Practice",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: <PlaceHolderImg seed="6.2practice" alt="Grammar Exercises" />
  },
  {
    id: 17,
    lesson: "6.2",
    type: "content",
    tag: "6.2 Speaking",
    theme: { primary: "pink", secondary: "slate", accent: "text-pink-600 dark:text-pink-400" },
    component: (
      <div className="w-full text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-pink-700 dark:text-pink-200">Family & History</h2>
        <Roulette questions={QUESTIONS.lesson2} color="bg-pink-500 hover:bg-pink-600" />
      </div>
    )
  },

  // ================= 6.3 =================
  {
    id: 18,
    lesson: "6.3",
    type: "cover",
    theme: { primary: "teal", secondary: "emerald", accent: "text-teal-600 dark:text-teal-400", bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    component: (
      <>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight text-teal-900">Unit 6.3</h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 text-teal-800 opacity-90">Manners & Prefixes</h2>
        <div className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold shadow-xl inline-block">Lesson 3: Being Polite</div>
      </>
    )
  },
  {
    id: 19,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Vocabulary",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: (
       <div className="w-full flex flex-col items-center">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Opposites (Prefixes)</h2>
         <div className="flex flex-wrap gap-6 justify-center w-full max-w-5xl mb-10">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl w-full md:w-64 border border-rose-100 dark:border-rose-800 hover:scale-105 transition-transform">
               <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-4">IM-</h3>
               <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Possible → <span className="font-bold">Im</span>possible</li>
                  <li>Polite → <span className="font-bold">Im</span>polite</li>
                  <li>Patient → <span className="font-bold">Im</span>patient</li>
               </ul>
            </div>
             <div className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-2xl w-full md:w-64 border border-sky-100 dark:border-sky-800 hover:scale-105 transition-transform">
               <h3 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-4">UN-</h3>
               <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Friendly → <span className="font-bold">Un</span>friendly</li>
                  <li>Happy → <span className="font-bold">Un</span>happy</li>
                  <li>Healthy → <span className="font-bold">Un</span>healthy</li>
               </ul>
            </div>
             <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl w-full md:w-64 border border-amber-100 dark:border-amber-800 hover:scale-105 transition-transform">
               <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">DIS-</h3>
               <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Like → <span className="font-bold">Dis</span>like</li>
                  <li>Honest → <span className="font-bold">Dis</span>honest</li>
                  <li>Agree → <span className="font-bold">Dis</span>agree</li>
               </ul>
            </div>
         </div>
       </div>
    )
  },
  {
    id: 20,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Listening",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Vocab Drills</h2>
         <div className="space-y-4 w-full">
            <AudioPlayer src="Track_6.12.mp3" title="6.12 Word Pairs" colorClass="teal" />
            <AudioPlayer src="Track_6.13.mp3" title="6.13 Polite Sentences" colorClass="teal" />
         </div>
      </div>
    )
  },
  {
    id: 21,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Reading",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: <PlaceHolderImg seed="6.3manners" alt="Manners Text" />
  },
  {
    id: 22,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Listening Skill",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: (
      <div className="w-full flex flex-col items-center">
         <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">Fast Speech Laboratory</h2>
         <div className="w-full max-w-4xl bg-slate-800 dark:bg-slate-950 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Disappearing Sounds</h3>
            <p className="mb-6 opacity-80 text-lg">Native speakers "swallow" small words to speak faster.</p>
            <div className="space-y-6">
               <div className="border-l-4 border-teal-500 pl-4">
                  <p className="font-bold text-teal-300 text-2xl">BUT → /bt/</p>
                  <p className="opacity-60">"Nice /bt/ expensive"</p>
               </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="font-bold text-teal-300 text-2xl">BECAUSE → /kəz/</p>
                  <p className="opacity-60">"Running /kəz/ I'm late"</p>
               </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="font-bold text-teal-300 text-2xl">AND → /n/</p>
                  <p className="opacity-60">"Fish /n/ chips"</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 23,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Lab Audio",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Lab Practice</h2>
         <div className="space-y-4 w-full">
            <AudioPlayer src="Track_6.7.mp3" title="6.7 Unlock the Code" colorClass="teal" />
            <AudioPlayer src="Track_6.8.mp3" title="6.8 Count Words" colorClass="teal" />
            <AudioPlayer src="Track_6.9.mp3" title="6.9 Sentences" colorClass="teal" />
            <AudioPlayer src="Track_6.10.mp3" title="6.10 Context" colorClass="teal" />
         </div>
      </div>
    )
  },
  {
    id: 24,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Comprehension",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">Detailed Listening</h2>
         <div className="p-8 bg-teal-50 dark:bg-teal-900/20 rounded-2xl w-full border border-teal-100 dark:border-teal-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 text-center">Listen again. Why did Karina think they were wearing masks?</p>
            <AudioPlayer src="Track_6.11.mp3" title="Track 6.11" colorClass="teal" />
         </div>
      </div>
    )
  },
  {
    id: 25,
    lesson: "6.3",
    type: "content",
    tag: "6.3 Speaking",
    theme: { primary: "teal", secondary: "slate", accent: "text-teal-600 dark:text-teal-400" },
    component: (
      <div className="w-full text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-teal-700 dark:text-teal-200">Manners & Etiquette</h2>
        <Roulette questions={QUESTIONS.lesson3} color="bg-teal-500 hover:bg-teal-600" />
      </div>
    )
  },

  // ================= 6.4 =================
  {
    id: 26,
    lesson: "6.4",
    type: "cover",
    theme: { primary: "orange", secondary: "amber", accent: "text-orange-600 dark:text-orange-400", bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    component: (
      <>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight text-white">Unit 6.4</h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 text-white opacity-90">Breaking News</h2>
        <div className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold shadow-xl inline-block">Lesson 4: Just, Already, Yet</div>
      </>
    )
  },
  {
    id: 27,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Function",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: (
      <div className="w-full flex flex-col items-center">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Responding to News</h2>
         <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-10">
            <div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800">
               <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">Good News 😊</h3>
               <ul className="space-y-3 text-lg text-emerald-900 dark:text-emerald-200 font-medium">
                  <li>"That's fantastic!"</li>
                  <li>"Congratulations!"</li>
                  <li>"I'm really happy for you."</li>
                  <li>"You lucky thing!"</li>
               </ul>
            </div>
             <div className="flex-1 bg-rose-100 dark:bg-rose-900/30 p-8 rounded-2xl shadow-sm border border-rose-200 dark:border-rose-800">
               <h3 className="text-2xl font-bold text-rose-700 dark:text-rose-400 mb-6">Bad News 😔</h3>
               <ul className="space-y-3 text-lg text-rose-900 dark:text-rose-200 font-medium">
                  <li>"Oh no!"</li>
                  <li>"What a shame!"</li>
                  <li>"I'm sorry to hear that."</li>
                  <li>"That's awful."</li>
               </ul>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 28,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Listening",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Intonation Studio</h2>
         <div className="space-y-4 w-full">
            <AudioPlayer src="Track_6.15.mp3" title="6.15 Compare Intonation" subtitle="Flat vs Interested" colorClass="orange" icon="volume" />
            <AudioPlayer src="Track_6.16.mp3" title="6.16 Drill Phrases" subtitle="Repeat with emotion!" colorClass="orange" icon="volume" />
         </div>
      </div>
    )
  },
  {
    id: 29,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Context",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: <PlaceHolderImg seed="6.4news" alt="Social Media News" />
  },
  {
    id: 30,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Grammar",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: (
      <div className="w-full flex flex-col items-center">
         <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">Just / Already / Yet</h2>
         <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border-l-8 border-orange-500 shadow-sm">
               <div className="flex justify-between items-center mb-2">
                  <span className="font-extrabold text-2xl text-slate-800 dark:text-slate-100">JUST</span>
                  <span className="text-xs uppercase font-bold text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded">Very Recently</span>
               </div>
               <p className="text-xl text-slate-700 dark:text-slate-200">"I have <span className="text-orange-500 font-bold">just</span> arrived."</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border-l-8 border-blue-500 shadow-sm">
               <div className="flex justify-between items-center mb-2">
                  <span className="font-extrabold text-2xl text-slate-800 dark:text-slate-100">ALREADY</span>
                  <span className="text-xs uppercase font-bold text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded">Before Expected</span>
               </div>
               <p className="text-xl text-slate-700 dark:text-slate-200">"I have <span className="text-blue-500 font-bold">already</span> finished."</p>
            </div>

             <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border-l-8 border-rose-500 shadow-sm">
               <div className="flex justify-between items-center mb-2">
                  <span className="font-extrabold text-2xl text-slate-800 dark:text-slate-100">YET</span>
                  <span className="text-xs uppercase font-bold text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded">Negative / Question</span>
               </div>
               <p className="text-xl text-slate-700 dark:text-slate-200">"Have you finished <span className="text-rose-500 font-bold">yet</span>?"</p>
               <p className="text-lg text-slate-500 mt-1 italic">"I haven't eaten yet."</p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 31,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Practice",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: (
      <div className="flex flex-col md:flex-row gap-8 items-center h-full">
         <div className="flex-1 w-full h-full">
            <PlaceHolderImg seed="6.4practice" alt="Giving News Practice" />
         </div>
         <div className="flex-1">
             <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700">
               <h3 className="font-bold text-2xl mb-4 text-slate-800 dark:text-slate-100">Match the News</h3>
               <p className="text-slate-600 dark:text-slate-300 mb-6">Listen to 5 conversations. Match them to the photos A-E.</p>
             </div>
         </div>
      </div>
    )
  },
  {
    id: 32,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Listening",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: (
      <div className="w-full flex flex-col items-center justify-center h-full max-w-2xl">
         <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">Task 6.14</h2>
         <div className="p-8 bg-orange-50 dark:bg-orange-900/20 rounded-2xl w-full border border-orange-100 dark:border-orange-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 text-center">Listen and match.</p>
            <AudioPlayer src="Track_6.14.mp3" title="Conversations" colorClass="orange" />
         </div>
      </div>
    )
  },
  {
    id: 33,
    lesson: "6.4",
    type: "content",
    tag: "6.4 Speaking",
    theme: { primary: "orange", secondary: "slate", accent: "text-orange-600 dark:text-orange-400" },
    component: (
      <div className="w-full text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-orange-700 dark:text-orange-200">Gossip & News</h2>
        <Roulette questions={QUESTIONS.lesson4} color="bg-orange-500 hover:bg-orange-600" />
      </div>
    )
  },
  // --- EXTRA SECTIONS ---
  {
    id: 34,
    lesson: "Extra",
    type: "vocab-master",
    tag: "Reference",
    theme: { primary: "slate", secondary: "gray", accent: "text-slate-500" },
    component: <VocabMaster />
  },
  {
    id: 35,
    lesson: "Extra",
    type: "quiz",
    tag: "Assessment",
    theme: { primary: "purple", secondary: "violet", accent: "text-purple-600" },
    component: <QuizSection />
  }
];