import { useGlobalContext } from "../hooks/useGlobalContext";

type TitleProps = {
  title: string;
  subTitle: string;
  subHead: string;
};

const Title = ({ title, subTitle, subHead }: TitleProps) => {
  const { theme } = useGlobalContext();

  // console.log(theme);

  return (
    <>
      <h1 className={`text-[2.5rem] max-w-[14ch] font-light leading-[1.2] mb-4 min-[550px]:text-[4rem] min-[550px]:leading-[100%] ${theme === "dark" ? "text-white" : "text-dark-navy"}`}>
        {title} <span className="font-medium">{subHead}</span>
      </h1>
      <p className={`text-[0.875rem] leading-[150%] italic mb-10 min-[550px]:text-[1.25rem] ${theme === "dark" ? "text-light-bluish" : "text-grey-navy"} `}>{subTitle}</p>
    </>
  );
};

export default Title;
