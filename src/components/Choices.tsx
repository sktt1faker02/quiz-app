import { useGlobalContext } from "../hooks/useGlobalContext";
import iconError from "../assets/images/icon-error.svg";
import iconCheck from "../assets/images/icon-correct.svg";

type ChoiceProp = {
  isSubmitted: boolean;
};

const Choices = ({ isSubmitted }: ChoiceProp) => {
  const { quizData, selectedSubject, handleSelectChoice, setAnswer, isCorrect, questionNumber, buttonActive, setButtonActive, theme } = useGlobalContext();

  const { quizzes } = quizData;

  const subjectQuestion = quizzes.filter((question) => question.title === selectedSubject)[0].questions;

  const answer = subjectQuestion[questionNumber - 1].answer;

  // console.log(answer);

  const handleChoice = (choiceIndex: number) => {
    setAnswer(answer);
    handleSelectChoice(subjectQuestion[questionNumber - 1].options[choiceIndex].toLowerCase());

    // Update the active state only for the selected button
    setButtonActive((prev) => prev.map((_, index) => index === choiceIndex));
  };

  // console.log(isCorrect);
  // console.log(correctAnswer);

  return (
    <div className="subject-choices flex flex-col gap-3 min-[550px]:gap-6">
      {subjectQuestion[questionNumber - 1].options.map((choice, i) => {
        const optionLabel = String.fromCharCode(65 + i);
        const correctOption = choice.toLowerCase() === answer.toLowerCase();
        // console.log(choice.toLowerCase(), answer.toLowerCase());

        return (
          <button className={`${theme === "dark" ? "bg-navy text-white" : "text-dark-navy bg-white"} ${buttonActive[i] ? "border-purple btn-active" : "border-transparent"} border-3 btn-choices flex text-left items-center px-4 py-3 rounded-[24px] shadow-md text-[1.125rem] font-medium leading-[100%] min-[550px]:text-[1.75rem] ${buttonActive[i] && isCorrect ? "correct" : null} ${buttonActive[i] && !isCorrect && isSubmitted ? "error" : null} ${isSubmitted ? "pointer-events-none" : null} `} key={i} onClick={() => handleChoice(i)}>
            <span className={`${buttonActive[i] ? "bg-purple text-[#f6e7ff]" : "text-grey-navy"} flex items-center justify-center py-3 px-4 text-[1.125rem] bg-light-grey  rounded-[10px] font-medium mr-8 ${buttonActive[i] && isCorrect ? "bg-success" : null} ${buttonActive[i] && !isCorrect && isSubmitted ? "error" : null} min-[550px]:text-[1.75rem]`}>{optionLabel}</span>
            {choice}
            {/* <img className={`ml-auto ${buttonActive[i] ? "block" : "hidden"} `} src={`${isCorrect ? iconCheck : iconError}`} width={32} alt={`${isCorrect ? "correct" : "wrong"}`} /> */}
            {/* {isSubmitted && <img src={iconCheck} className={`${correctOption ? "block" : "hidden"}`} alt="correct answer" />} */}
            {isSubmitted && correctOption && <img src={iconCheck} alt="correct answer" width={32} className="ml-auto min-[550px]:w-auto" />}
            {isSubmitted && buttonActive[i] && !correctOption && <img src={iconError} alt="wrong answer" width={32} className="ml-auto min-[550px]:w-auto" />}
          </button>
        );
      })}
    </div>
  );
};

export default Choices;
