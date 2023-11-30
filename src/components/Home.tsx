import { useGlobalContext } from "../hooks/useGlobalContext";

import iconError from "../assets/images/icon-error.svg";
import Choices from "./Choices";
import Question from "./Question";
import Subjects from "./Subjects";
import Result from "./Result";

import Submit from "./Submit";
import Title from "./Title";
import { useState } from "react";

const Home = () => {
  const { selectedSubject, showErrorMessage, showResult } = useGlobalContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log(selectedChoice);
  // console.log(showErrorMessage);

  // console.log(isSubmitted);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <section className="home pb-24  lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="question-intro lg:w-[455px]">
        {selectedSubject && !showResult ? <Question /> : <Title title={`${showResult ? "Quiz Completed" : "Welcome to the"}`} subHead={`${showResult ? "You scored..." : "Frontend Quiz!"}`} subTitle={`${showResult ? "" : "Pick a subject to get started"}`} />}
        {/* {selectedSubject ? <Choices isSubmitted={isSubmitted} /> : <Subjects />} */}
      </div>
      <div className="quiz-container ">
        {!selectedSubject && <Subjects />}

        {!showResult && selectedSubject && <Choices isSubmitted={isSubmitted} />}
        {showResult && <Result />}
        {selectedSubject && <Submit isSubmit={handleSubmit} />}
        {showErrorMessage && (
          <div className="message flex items-center justify-center gap-3 mt-6">
            <img src={iconError} alt="Please select an answer" className="min-[550px]:w-auto" width={32} />
            <p className="text text-danger text-[1.125rem] min-[550px]:text-[1.5rem]">Please select an answer</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
