import { useGlobalContext } from "../hooks/useGlobalContext";

import sunIcon from "../assets/images/icon-sun-light.svg";
import moonIcon from "../assets/images/icon-moon-light.svg";
import sunIconDark from "../assets/images/icon-sun-dark.svg";
import moonIconDark from "../assets/images/icon-moon-dark.svg";

import SubjectHeader from "./SubjectHeader";

const Header = () => {
  const { theme, handleThemeSwitch, selectedSubject } = useGlobalContext();

  // console.log(theme);

  return (
    <header className={`flex items-center justify-between p-6 px-4 mb-[2rem] lg:p-14`}>
      <SubjectHeader />

      <div className={`theme flex items-center gap-4 ${selectedSubject ? null : "ml-auto"}`}>
        <img src={theme === "dark" ? sunIcon : sunIconDark} alt="dark mode" />

        <div className="toogle w-[48px] h-[28px] rounded-2xl bg-purple relative cursor-pointer" onClick={handleThemeSwitch}>
          <div className={`w-[20px] h-[20px] rounded-[100%] bg-white absolute top-0 bottom-0  m-auto transition-all ${theme === "dark" ? "left-[24px]" : "left-[4px]"} `}></div>
        </div>

        <img src={theme === "light" ? moonIconDark : moonIcon} alt="dark mode" />
      </div>
    </header>
  );
};

export default Header;
