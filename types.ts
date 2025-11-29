import React from 'react';

export type UserMode = 'teacher' | 'student';
export type PersonalityType = 'introvert' | 'extrovert' | 'ambivert';
export type ThemeMode = 'light' | 'dark';

export interface TeacherNote {
  aim: string;
  procedure: string[];
  answerKey?: string[];
  ccqs?: string[]; // Concept Checking Questions
  timing?: string;
}

export interface SlideConfig {
  id: number;
  lesson: string;
  type: 'cover' | 'content' | 'quiz' | 'vocab-master';
  title?: string;
  subtitle?: string;
  tag?: string;
  component: React.ReactNode;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    bgGradient?: string;
  };
  teacherNotes?: TeacherNote;
}

export interface QuestionList {
  lesson1: string[];
  lesson2: string[];
  lesson3: string[];
  lesson4: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface QuizTest {
  id: number;
  title: string;
  questions: QuizQuestion[];
}
