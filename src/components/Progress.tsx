import { useGlobalContext } from "../hooks/useGlobalContext";

const Progress = () => {
  const { questionNumber, nextQuestion, theme } = useGlobalContext();
  // console.log(questionNumber, nextQuestion);

  return (
    <div className={`${theme === "dark" ? "bg-navy" : "bg-white"} flex items-center px-[4px] h-[1rem] rounded-[999px] mb-10 transition lg:mt-[8rem]`}>
      <div style={{ width: `${nextQuestion ? (questionNumber - 1) * 10 + "%" : 0}`, transition: "0.3s" }} className="h-[8px] rounded-[104px] bg-purple transition"></div>
    </div>
  );
};

export default Progress;

// questionNumber * 10 + "%"
