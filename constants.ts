import { QuestionList, QuizTest, QuizQuestion } from './types';

// --- SPEAKING QUESTIONS ---
export const QUESTIONS: QuestionList = {
  lesson1: [
    "Are you an introvert or an extrovert?", "Do you like meeting new people?", "Are you more 'shy' or 'confident'?", "Do you prefer studying alone or in a group?",
    "Who is the loudest person in your family?", "Are you patient when waiting in line?", "Is it better to be clever or kind?", "Do you think you are lazy?",
    "What makes you feel confident?", "Are you messy or tidy?", "Do you like public speaking?", "Are you a good listener?", "Do you think shy people are boring?",
    "Who is the most creative person you know?", "Do you trust people easily?", "Are you honest all the time?", "What makes you angry?", "Do you like loud parties?",
    "Can you keep a secret?", "Do you prefer texting or calling?", "Are you more active in the morning or night?", "Do you worry about what people think?",
    "Is it hard for you to make friends?", "Do you like being the center of attention?", "Are you organized with your homework?", "Do you plan everything or just 'go with the flow'?"
  ],
  lesson2: [
    "Do you have a big family?", "Who are you closest to in your family?", "Do you have any step-relatives?", "Would you ever adopt a child?",
    "Do you look like your mom or dad?", "Do you fight with your siblings?", "What is the best memory with your grandparents?", "Do you know your family history?",
    "Where were your parents born?", "Do you have twins in your family?", "Is it hard being a single parent?", "Do you get along with your cousins?",
    "How often do you see your relatives?", "Who is the oldest person in your family?", "Do you want a big family in the future?"
  ],
  lesson3: [
    "Is it rude to check your phone at dinner?", "Do you always say 'please' and 'thank you'?", "Is it okay to eat pizza with your hands?", "Do you stand up for elderly people on the bus?",
    "Is it rude to be late?", "Do you interrupt people when they speak?", "Is chewing gum in class impolite?", "Do you open doors for people?", "Is it rude to ask a woman her age?",
    "Do you tip waiters?", "Is it okay to call a teacher by their first name?", "Do you shake hands or hug when meeting new people?"
  ],
  lesson4: [
    "Do you watch the news every day?", "Where do you get your news?", "Do you believe everything you read online?", "What was the last good news you received?",
    "Have you ever been on TV?", "Do you gossip?", "Is it okay to share secrets?", "Have you ever won a competition?", "Do you like sharing good news on social media?"
  ]
};

// --- VOCAB MASTER LIST ---
export const MASTER_VOCAB = [
  { word: "Shy", definition: "Nervous or uncomfortable with other people.", ru: "Застенчивый", uz: "Uyatchan", unit: "6.1" },
  { word: "Sociable", definition: "Willing to talk and engage in activities with other people.", ru: "Общительный", uz: "Kirishimli", unit: "6.1" },
  { word: "Confident", definition: "Feeling sure about yourself and your abilities.", ru: "Уверенный", uz: "O'ziga ishongan", unit: "6.1" },
  { word: "Lazy", definition: "Unwilling to work or use energy.", ru: "Ленивый", uz: "Dangasa", unit: "6.1" },
  { word: "Patient", definition: "Able to accept or tolerate delays, problems, or suffering without becoming annoyed.", ru: "Терпеливый", uz: "Sabrli", unit: "6.1" },
  { word: "Clever", definition: "Quick to understand, learn, and devise or apply ideas.", ru: "Умный", uz: "Aqlli", unit: "6.1" },
  { word: "Stepmother", definition: "A woman who is the wife of one's father after the divorce or death of one's mother.", ru: "Мачеха", uz: "O'gay ona", unit: "6.2" },
  { word: "Mother-in-law", definition: "The mother of one's husband or wife.", ru: "Свекровь/Теща", uz: "Qaynonasi", unit: "6.2" },
  { word: "Adopt", definition: "Legally take another's child and bring it up as one's own.", ru: "Усыновить", uz: "Asrab olmoq", unit: "6.2" },
  { word: "Impossible", definition: "Not able to occur, exist, or be done.", ru: "Невозможный", uz: "Imkonsiz", unit: "6.3" },
  { word: "Impolite", definition: "Not having or showing good manners; rude.", ru: "Невежливый", uz: "Odobsiz", unit: "6.3" },
  { word: "Unfriendly", definition: "Not friendly.", ru: "Недружелюбный", uz: "Do'stona emas", unit: "6.3" },
  { word: "Disagree", definition: "Have or express a different opinion.", ru: "Не соглашаться", uz: "Rozi bo'lmaslik", unit: "6.3" },
  { word: "Just", definition: "Very recently; in the immediate past.", ru: "Только что", uz: "Hozirgina", unit: "6.4" },
  { word: "Already", definition: "Before the time in question.", ru: "Уже", uz: "Allaqachon", unit: "6.4" },
  { word: "Yet", definition: "Up until the present time.", ru: "Еще", uz: "Hali", unit: "6.4" },
];

// --- QUIZ GENERATOR (Generates 30 tests x 15 questions) ---
const generateQuizTests = (): QuizTest[] => {
  const tests: QuizTest[] = [];
  
  // Templates for questions to ensure variety without massive hardcoding
  const comparisonTemplates = [
    { q: "She is ____ than her brother.", a: "quieter", opts: ["more quiet", "quietest", "as quiet"], exp: "Short adjectives (1 syllable) add -er." },
    { q: "This test is ____ than the last one.", a: "more difficult", opts: ["difficulter", "difficultest", "as difficult"], exp: "Long adjectives use 'more'." },
    { q: "He is the ____ student in class.", a: "best", opts: ["gooder", "better", "goodest"], exp: "Irregular: Good -> Better -> Best." },
    { q: "I am not ____ my sister.", a: "as tall as", opts: ["so tall like", "more tall", "tall than"], exp: "Use 'as...as' for similarity/equality." },
  ];

  const pastPerfectTemplates = [
    { q: "I ____ (lose) my keys yesterday.", a: "lost", opts: ["have lost", "lossed", "have lose"], exp: "Specific past time (yesterday) = Past Simple." },
    { q: "She ____ (visit) Paris three times.", a: "has visited", opts: ["visited", "visits", "visiting"], exp: "Experience in life = Present Perfect." },
    { q: "When ____ you ____ (arrive)?", a: "did / arrive", opts: ["have / arrived", "do / arrive", "did / arrived"], exp: "Question asking for specific time = Past Simple." },
    { q: "We ____ (not finish) yet.", a: "haven't finished", opts: ["didn't finish", "don't finish", "haven't finish"], exp: "'Yet' indicates Present Perfect." },
  ];

  const prefixTemplates = [
    { q: "Opposite of 'patient'?", a: "Impatient", opts: ["Unpatient", "Dispatient", "Inpatient"], exp: "Prefix 'Im-' goes with P (usually)." },
    { q: "Opposite of 'happy'?", a: "Unhappy", opts: ["Imhappy", "Dishappy", "Inhappy"], exp: "Prefix 'Un-' is common for emotions." },
    { q: "Opposite of 'agree'?", a: "Disagree", opts: ["Unagree", "Imagree", "Inagree"], exp: "Prefix 'Dis-' denotes reversal." },
    { q: "Opposite of 'polite'?", a: "Impolite", opts: ["Unpolite", "Dispolite", "Inpolite"], exp: "Polite -> Impolite." },
  ];

  const newsTemplates = [
    { q: "A: I passed my exam! B: ____!", a: "Congratulations", opts: ["Oh no", "What a shame", "I'm sorry"], exp: "Response to good news." },
    { q: "A: I lost my wallet. B: ____.", a: "Oh no, that's terrible", opts: ["That's fantastic", "You lucky thing", "Good job"], exp: "Response to bad news." },
    { q: "I have ____ finished my homework. (Done recently)", a: "just", opts: ["yet", "ever", "since"], exp: "'Just' = very recently." },
  ];

  const allTemplates = [...comparisonTemplates, ...pastPerfectTemplates, ...prefixTemplates, ...newsTemplates];

  for (let i = 1; i <= 30; i++) {
    const questions: QuizQuestion[] = [];
    // Shuffle templates and pick 15 for this test
    const shuffled = [...allTemplates].sort(() => 0.5 - Math.random());
    
    for (let j = 0; j < 15; j++) {
      const template = shuffled[j % shuffled.length];
      // Randomize options position
      const allOpts = [template.a, ...template.opts];
      const shuffledOpts = allOpts.sort(() => 0.5 - Math.random());
      const correctIdx = shuffledOpts.indexOf(template.a);
      
      questions.push({
        id: j + 1,
        question: template.q,
        options: shuffledOpts,
        correctIndex: correctIdx,
        explanation: template.exp
      });
    }

    tests.push({
      id: i,
      title: `Unit 6 Mastery Test #${i}`,
      questions: questions
    });
  }

  return tests;
};

export const QUIZ_TESTS = generateQuizTests();
