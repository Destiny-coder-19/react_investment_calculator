import { useState } from "react";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userInputValue, setUserInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const HandleChange = (inputIdentifier, newValue) => {
    setUserInputValue((preValue) => {
      return { ...preValue, [inputIdentifier]: +newValue };
    });
  };

  const isInputValid = userInputValue.duration >= 1;

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <p>
            <UserInput
              value={userInputValue.initialInvestment}
              onChange={HandleChange}
              name="initialInvestment"
              label="Initial Investment"
            />
            <UserInput
              value={userInputValue.annualInvestment}
              onChange={HandleChange}
              name="annualInvestment"
              label="Annual Investment"
            />
          </p>
          <p>
            <UserInput
              value={userInputValue.expectedReturn}
              onChange={HandleChange}
              name="expectedReturn"
              label="Expected Return"
            />
            <UserInput
              value={userInputValue.duration}
              onChange={HandleChange}
              name="duration"
              label="Duration"
            />
          </p>
        </div>
      </section>
      {isInputValid && <ResultTable input={userInputValue} />}
      {!isInputValid && <p className="center">Please Enter The Duration Greater Than Zero</p>}
    </>
  );
}

export default App;
