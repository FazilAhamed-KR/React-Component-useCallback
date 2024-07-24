import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);
  const handleSet = (newValue) => {
    setChosenCount(newValue);
    setChosenCount((prev) => prev);
  };

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSet} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
