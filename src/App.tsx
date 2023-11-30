import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  // const { showResult } = useGlobalContext();

  // console.log(data);

  return (
    <>
      <Header />
      <main className="spacing-lr lg:px-[3.5rem]">
        <Home />
      </main>
    </>
  );
};

export default App;
