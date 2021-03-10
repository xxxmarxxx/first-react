import React from "react";

const SUBTRACTION = 'subtraction';
const ADDITION = 'addition';
const RESET = 'reset';

const Counter = (props) => {
    const startValue = 0;
    const result1 = { startValue }
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count + 1);
      setResult(result + number);
    } else if (type === RESET) {
      setCount(count + 1);
      setResult(props.result);
    } else if (type === ADDITION) {
      setCount(count - 1);
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
      <MathButton 
      name="Reset" 
      type={RESET} 
      click={handleMathClick} />
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

const MathButton = (props) => {
  const number = parseInt(props.Number);
  return (
    <button className='btn' onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {
  return (
    <>
      <h1 style={{margin:'10px', fontSize:'30px',textAlign:'center'}}>
        Liczby klikniac: {props.count}
        {props.count > 10 ? <span>. Przeciazenie processora </span> : null}{" "}
      </h1>
      <h1 style={{margin:'10px', fontSize:'30px',textAlign:'center'}}>wynik: {props.result}</h1>
    </>
  );
};

// const startValue = 0;
// const result = { startValue };

export default Counter;
