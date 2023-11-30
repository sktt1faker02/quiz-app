import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

type SubmitProp = {
  isSubmit: () => void;
};

const Submit = ({ isSubmit }: SubmitProp) => {
  const { quizData, selectedSubject, selectedChoice, setShowErrorMessage, answer, setIsCorrect, setQuestionNumber, setButtonActive, setSelectedChoice, setNextQuestion, questionNumber, setShowResult, setScore, setSelectedSubject } = useGlobalContext();
  const [submitText, setSubmitText] = useState("Submit Answer");
  const { quizzes } = quizData;
  const subjectQuestion = quizzes.filter((question) => question.title === selectedSubject)[0].questions;

  // console.log(subjectQuestion);

  const handleSubmit = () => {
    if (submitText === "Submit Answer") {
      if (!selectedChoice) {
        setShowErrorMessage(true);
      } else {
        setShowErrorMessage(false);
        setSubmitText("Next Question");
        isSubmit();
        const questionAnswer = answer.toLowerCase();

        // console.log(questionAnswer, selectedChoice);

        if (questionAnswer === selectedChoice) {
          setIsCorrect(true);
          setScore((prev) => prev + 1);
          // console.log("hello");
        } else {
          setIsCorrect(false);
          // console.log("world");
        }
      }
    } else if (submitText === "Next Question") {
      // console.log("logic here");
      setNextQuestion(true);
      if (questionNumber === subjectQuestion.length) {
        setSubmitText("Play Again");
        setShowResult(true);
        return;
      }

      setButtonActive(Array(4).fill(false));
      setQuestionNumber((prev) => prev + 1);
      setSelectedChoice("");
      setIsCorrect(false);
      isSubmit();

      setSubmitText("Submit Answer");
    } else if (submitText === "Play Again") {
      // console.log("Hello");
      setScore(0);
      setShowResult(false);
      setSelectedSubject("");
      setQuestionNumber(1);
      setSelectedChoice("");
      setIsCorrect(false);
      setButtonActive(Array(4).fill(false));
      isSubmit();
    }
  };

  return (
    <button className="bg-purple text-white gap-8 p-4 rounded-[12px] shadow-md text-[1.125rem] font-medium  w-full text-center mt-[0.75rem] hover:opacity-70 min-[550px]:text-[1.75rem] min-[550px]:mt-[1.75rem] min-[550px]:rounded-[24px] min-[550px]:p-6" onClick={handleSubmit}>
      {submitText}
    </button>
  );
};

export default Submit;
