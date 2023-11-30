import { createContext, useState, useEffect } from "react";

type QuizContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  icon: string;
  title: string;
  questions: Question[];
};

type QuizData = {
  quizzes: Quiz[];
};

type QuizContext = {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  handleThemeSwitch: () => void;
  quizData: QuizData;
  selectedSubject: string;
  setSelectedSubject: React.Dispatch<React.SetStateAction<string>>;
  handleSelectSubject: (subject: string) => void;
  selectedChoice: string;
  setSelectedChoice: React.Dispatch<React.SetStateAction<string>>;
  handleSelectChoice: (choice: string) => void;
  showErrorMessage: boolean;
  setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  isCorrect: boolean;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  buttonActive: boolean[];
  setButtonActive: React.Dispatch<React.SetStateAction<boolean[]>>;
  nextQuestion: boolean;
  setNextQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<QuizContext | null>(null);

const AppProvider = ({ children }: QuizContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [quizData, setQuizData] = useState<QuizData>({ quizzes: [] });
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [buttonActive, setButtonActive] = useState(Array(4).fill(false));
  const [nextQuestion, setNextQuestion] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // const { quizzes } = quizData;

  // console.log(quizzes);

  const fetchQuizData = async () => {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();
      setQuizData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // console.log(theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.className = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSelectSubject = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleSelectChoice = (choice: string) => {
    setSelectedChoice(choice);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        handleThemeSwitch,
        quizData,
        selectedSubject,
        setSelectedSubject,
        handleSelectSubject,
        selectedChoice,
        setSelectedChoice,
        handleSelectChoice,
        showErrorMessage,
        setShowErrorMessage,
        answer,
        setAnswer,
        isCorrect,
        setIsCorrect,
        questionNumber,
        setQuestionNumber,
        buttonActive,
        setButtonActive,
        nextQuestion,
        setNextQuestion,
        showResult,
        setShowResult,
        score,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
