import { useGlobalContext } from "../hooks/useGlobalContext";

import htmlIcon from "../assets/images/icon-html.svg";
import accIcon from "../assets/images/icon-accessibility.svg";
import cssIcon from "../assets/images/icon-css.svg";
import jsIcon from "../assets/images/icon-js.svg";

const SubjectHeader = () => {
  const { selectedSubject, theme } = useGlobalContext();

  let imgSrc = "";
  let bgIcon = "";

  if (selectedSubject.toLocaleLowerCase() === "html") {
    imgSrc = htmlIcon;
    bgIcon = "bg-htmlBg";
  } else if (selectedSubject.toLocaleLowerCase() === "css") {
    imgSrc = cssIcon;
    bgIcon = "bg-cssBg";
  } else if (selectedSubject.toLocaleLowerCase() === "javascript") {
    imgSrc = jsIcon;
    bgIcon = "bg-jsBg";
  } else if (selectedSubject.toLocaleLowerCase() === "accessibility") {
    imgSrc = accIcon;
    bgIcon = "bg-accBg";
  }

  return (
    selectedSubject && (
      <div className="flex gap-4 items-center">
        <div className={`w-[40px] h-[40px] flex justify-center items-center rounded-[10px] min-[550px]:w-[56px] min-[550px]:h-[56px] ${bgIcon}`}>
          <img className="w-[28.57px]" src={imgSrc} alt="HTML" />
        </div>
        <h2 className={`text-[1.125rem] font-medium min-[550px]:text-[1.75rem] ${theme === "dark" ? "text-white" : "text-dark-navy"}`}>{selectedSubject}</h2>
      </div>
    )
  );
};

export default SubjectHeader;
