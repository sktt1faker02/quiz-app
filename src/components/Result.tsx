import { useGlobalContext } from "../hooks/useGlobalContext";
import SubjectHeader from "./SubjectHeader";

const Result = () => {
  const { score, theme } = useGlobalContext();

  return (
    <div className={`result ${theme === "dark" ? "bg-navy" : "bg-white"} flex justify-center items-center flex-col  rounded-[12px] shadow-sm py-8`}>
      <SubjectHeader />
      <span className={`${theme === "dark" ? "text-white" : "text-dark-navy"} text-[5.5rem] min-[550px]:text-[9rem] font-medium`}>{score}</span>
      <span className={`${theme === "dark" ? "text-light-bluish" : "text-grey-navy-navy"} text-[1.125rem] min-[550px]:text-[1.5rem]`}>out of 10</span>
    </div>
  );
};

export default Result;

// Need mag reset pag clinick yung play again
