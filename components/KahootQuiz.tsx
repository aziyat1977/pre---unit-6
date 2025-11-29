import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle, Trophy, Flame } from 'lucide-react';
import { QuizTest, QuizQuestion } from '../types';

interface KahootQuizProps {
  test: QuizTest;
  onExit: () => void;
}

export const KahootQuiz: React.FC<KahootQuizProps> = ({ test, onExit }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameState, setGameState] = useState<'playing' | 'feedback' | 'finished'>('playing');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = test.questions[currentQIndex];

  useEffect(() => {
    let timer: number;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      handleAnswer(-1); // Timeout
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    const isCorrect = index === currentQuestion.correctIndex;
    
    if (isCorrect) {
      const timeBonus = Math.ceil(timeLeft * 10);
      const streakBonus = streak * 50;
      setScore(prev => prev + 1000 + timeBonus + streakBonus);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
    
    setGameState('feedback');
  };

  const nextQuestion = () => {
    if (currentQIndex < test.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setGameState('playing');
      setTimeLeft(20);
      setSelectedOption(null);
    } else {
      setGameState('finished');
    }
  };

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-purple-900 text-white p-8 animate-fade-in">
        <Trophy className="w-32 h-32 text-yellow-400 mb-6 drop-shadow-lg animate-bounce" />
        <h2 className="text-4xl font-extrabold mb-4">Quiz Complete!</h2>
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md text-center border border-white/20">
            <p className="text-xl mb-2 text-purple-200">Total Score</p>
            <p className="text-6xl font-black text-white mb-6 tracking-tighter">{score}</p>
            <div className="flex justify-center gap-4">
               <button onClick={onExit} className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition">Exit Arena</button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 shadow-md z-10">
        <div className="flex items-center gap-4">
           <div className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg font-bold">
              Q{currentQIndex + 1}/{test.questions.length}
           </div>
           {streak > 1 && (
             <div className="flex items-center gap-1 text-orange-500 font-bold animate-pulse">
                <Flame size={20} fill="currentColor" />
                <span>Streak x{streak}</span>
             </div>
           )}
        </div>
        <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
                <span className="text-xs text-slate-500 uppercase font-bold">Score</span>
                <span className="text-xl font-black text-slate-800 dark:text-white">{score}</span>
            </div>
            <div className={`relative w-12 h-12 flex items-center justify-center rounded-full border-4 font-bold text-lg ${timeLeft < 5 ? 'border-red-500 text-red-500 animate-pulse-fast' : 'border-purple-500 text-purple-600 dark:text-purple-400'}`}>
                {timeLeft}
            </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative">
         {/* Question */}
         <div className="w-full max-w-4xl bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg mb-8 text-center min-h-[150px] flex items-center justify-center border border-slate-200 dark:border-slate-700">
             <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                 {currentQuestion.question}
             </h3>
         </div>

         {/* Options Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            {currentQuestion.options.map((opt, idx) => {
               const colors = [
                   'bg-red-500 hover:bg-red-600', 
                   'bg-blue-500 hover:bg-blue-600', 
                   'bg-yellow-500 hover:bg-yellow-600', 
                   'bg-green-500 hover:bg-green-600'
               ];
               const icons = ['▲', '◆', '●', '■'];
               
               let stateClass = colors[idx % 4];
               // Feedback state logic
               if (gameState === 'feedback') {
                   if (idx === currentQuestion.correctIndex) {
                       stateClass = 'bg-emerald-500 ring-4 ring-emerald-300 scale-[1.02]';
                   } else if (idx === selectedOption) {
                       stateClass = 'bg-red-500 opacity-50'; // Wrong choice
                   } else {
                       stateClass = 'bg-slate-300 dark:bg-slate-700 opacity-30'; // Not selected
                   }
               }

               return (
                 <button 
                   key={idx}
                   disabled={gameState === 'feedback'}
                   onClick={() => handleAnswer(idx)}
                   className={`
                      ${stateClass} text-white p-6 rounded-xl shadow-lg transition-all duration-200 
                      flex items-center gap-4 text-left group relative overflow-hidden
                   `}
                 >
                    <div className="absolute top-0 right-0 p-2 opacity-20 text-6xl font-black">{icons[idx]}</div>
                    <span className="text-2xl font-bold drop-shadow-md z-10">{opt}</span>
                    {gameState === 'feedback' && idx === currentQuestion.correctIndex && (
                        <CheckCircle className="ml-auto w-8 h-8 text-white z-10" />
                    )}
                     {gameState === 'feedback' && idx === selectedOption && idx !== currentQuestion.correctIndex && (
                        <XCircle className="ml-auto w-8 h-8 text-white z-10" />
                    )}
                 </button>
               );
            })}
         </div>

         {/* Feedback Footer */}
         {gameState === 'feedback' && (
             <div className="absolute bottom-8 animate-bounce">
                <button 
                   onClick={nextQuestion}
                   className="bg-slate-800 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition"
                >
                    Next Question
                </button>
             </div>
         )}
      </div>
      
      {/* Explanation Banner */}
      {gameState === 'feedback' && currentQuestion.explanation && (
          <div className="bg-blue-100 dark:bg-blue-900/50 p-4 text-center text-blue-800 dark:text-blue-200 font-medium">
              💡 {currentQuestion.explanation}
          </div>
      )}
    </div>
  );
};
