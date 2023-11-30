import { useGlobalContext } from "../hooks/useGlobalContext";

const Subjects = () => {
  const { quizData, handleSelectSubject, theme } = useGlobalContext();
  const { quizzes } = quizData;

  // console.log(selectedSubject);

  return (
    <div className="subject-choices flex flex-col gap-3 min-[550px]:gap-6">
      {quizzes &&
        quizzes.length > 0 &&
        quizzes.map((quiz, index) => {
          // const iconStyle = `bg-${quiz.title.toLowerCase() === 'javascript'? 'js' : ''}`;
          // console.log(iconStyle);
          let iconStyle = "";
          if (quiz.title.toLowerCase() === "javascript") {
            iconStyle = `bg-jsBg`;
          } else if (quiz.title.toLowerCase() === "accessibility") {
            iconStyle = `bg-accBg`;
          } else {
            iconStyle = `bg-${quiz.title.toLowerCase()}Bg`;
          }

          // console.log(iconStyle);

          return (
            <button onClick={() => handleSelectSubject(quiz.title)} key={index} className={`flex items-center gap-8 bg-white p-3 rounded-[12px] shadow-md text-[1.125rem] font-medium  min-[550px]:text-[1.75rem] min-[550px]:rounded-[24px] ${theme === "dark" ? "bg-navy text-white" : "bg-white text-dark-navy"}`}>
              <div className={`w-[40px] h-[40px] flex justify-center items-center rounded-[10px] min-[550px]:w-[56px] min-[550px]:h-[56px] ${iconStyle}`}>
                <img className="w-[28.57px]" src={`src/assets${quiz.icon}`} alt={quiz.title} />
              </div>
              {quiz.title}
            </button>
          );
        })}
    </div>
  );
};

export default Subjects;
