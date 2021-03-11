import React from "react";

const SUBTRACTION = "subtraction";
const ADDITION = "addition";
const RESET = "reset";

const Counter = (props) => {
  
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === RESET) {
      setCount(count);
      setResult(props.result);
    } else if (type === ADDITION) {
      setCount(count + 1);
      setResult(result + number);
    }
  };

  return (
    <>
      <MathButton
        name="-10"
        number={10}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number={1}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton name="Reset" type={RESET} click={handleMathClick} />
      <MathButton
        name="+1"
        number={1}
        type={ADDITION}
        click={handleMathClick}
      />
      <MathButton
        name="+10"
        number={10}
        type={ADDITION}
        click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </>
  );
};

const MathButton = ({ click, name, number, type }) => {
  const handleClick = () => click(type,number);
  return (
      
    <button onClick={handleClick} className='btn'>
      {name}
    </button>
      
  );
};

const ResultPanel = ({count,result}) => {
    const addInfo = count > 10 ? (<span>. Przeciazenie processora </span>): null
  return (
    <>
      <h1 style={{ margin: "10px", fontSize: "30px", textAlign: "center" }}>
        Liczby klikniac: {count} {addInfo}
      </h1>
      <h2 style={{ margin: "10px", fontSize: "30px", textAlign: "center" }}>
        wynik: {result}
      </h2>
    </>
  );
};

// const startValue = 0;
// const result = { startValue };

export default Counter;
