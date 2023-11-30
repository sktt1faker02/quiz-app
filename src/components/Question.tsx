import { useGlobalContext } from "../hooks/useGlobalContext";

import Progress from "./Progress";

const Question = () => {
  const { quizData, selectedSubject, questionNumber, theme } = useGlobalContext();

  const { quizzes } = quizData;

  const subjectQuestion = quizzes.filter((question) => question.title === selectedSubject)[0].questions;

  // console.log(subjectQuestion.length);
  // if (questionNumber === subjectQuestion.length) {
  //   return;
  // }

  // console.log(subjectQuestion[0].answer);

  return (
    <div className="question">
      <p className={`text-[0.875rem] leading-[150%] italic mb-[12px] min-[550px]:mb-[30px] min-[550px]:text-[1.25rem] ${theme === "dark" ? "text-light-bluish" : "text-grey-navy"}`}>{`Question ${questionNumber} of ${subjectQuestion.length}`}</p>
      <h3 className={`text-dark-navy text-xl font-medium mb-[24px] min-[550px]:text-[2.25rem] min-[550px]:mb-[30px] min-[550px]:leading-[1.2] ${theme === "dark" ? "text-white" : "text-dark-navy"}`}>{subjectQuestion[questionNumber - 1].question}</h3>
      <Progress />
    </div>
  );
};

export default Question;
