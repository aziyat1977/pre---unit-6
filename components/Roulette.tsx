import React, { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

interface RouletteProps {
  questions: string[];
  color: string; // hex or tailwind class for button
}

export const Roulette: React.FC<RouletteProps> = ({ questions, color }) => {
  const [currentQuestion, setCurrentQuestion] = useState("Press SPIN to start!");
  const [isSpinning, setIsSpinning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let counter = 0;
    const maxSpins = 20;
    const speed = 50;

    intervalRef.current = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
      counter++;

      if (counter > maxSpins) {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsSpinning(false);
      }
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl border-4 border-dashed border-slate-300 dark:border-slate-600 w-full max-w-2xl mx-auto flex flex-col items-center min-h-[250px] justify-center shadow-inner">
      <div className={`text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center min-h-[4rem] flex items-center justify-center transition-transform duration-200 ${isSpinning ? 'scale-95 opacity-80' : 'scale-100'}`}>
        {currentQuestion}
      </div>
      <button 
        onClick={handleSpin}
        disabled={isSpinning}
        className={`text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2 ${color}`}
      >
        {isSpinning && <Loader2 className="animate-spin" />}
        {isSpinning ? 'SPINNING...' : 'SPIN ROULETTE'}
      </button>
    </div>
  );
};
