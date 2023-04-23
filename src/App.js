import "./App.css";
import clickLogo from "./images/click-logo.png";
import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const handleReset = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="click-logo-container">
        <div>
          <img className="click-logo" src={clickLogo} alt="click logo" />
        </div>
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Reset" isButtonClick={false} handleClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
