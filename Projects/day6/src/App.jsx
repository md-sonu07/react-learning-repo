import FocusInput from "./Components/FocusInput";
import PreviousCounter from "./Components/PreviousCounter";
import FetchData from "./Components/FetchData";
import CounterWithEffect from "./Components/CounterWithEffect";
import Timer from "./Components/Timer";
import FetchDataApi from "./Components/FetchDataApi";

 function App() {
  return (
    <>
      <FetchDataApi />
      <FetchData />
      <Timer />
      <CounterWithEffect />
      <PreviousCounter />
      <FocusInput />
    </>
  );
}

export default App;