import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result"; 
import { useState } from "react";

function App() {
  const[inputValues, setValues]= useState({
    input1: 20000,
    input2: 1500,
    input3: 8,
    input4: 10,
});

const validInput = inputValues.input4 >= 1;

function handleChangeValue(inputIdentifier, newValue) {
    setValues ((preValue) =>{
        return {
            ...preValue,[inputIdentifier]: + newValue,
        };
    });
}

const mappedInputValues = {
  initialInvestment: inputValues.input1,
  annualInvestment: inputValues.input2,
  expectedReturn: inputValues.input3,
  duration: inputValues.input4,
};

  return (
    <main>
      <>
        <Header/>
        <UserInput values={inputValues} onChangeInput={handleChangeValue}/>
        {!validInput && <p className="center">Please enter a valid duration not less than 1</p> }
        { validInput && < Result input={mappedInputValues}/> }
      </>
    </main>
  );
}

export default App
