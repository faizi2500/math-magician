import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [input, setInput] = useState({ total: 0, next: null, operation: null });

  const eventClicked = (e) => {
    const test = { ...input, ...calculate(input, e.target.textContent) };
    setInput(() => ({ ...test }));
  };

  return (
    <div className="calculator">
      <div className="answer">
        <h3 className="show-answer">
          { input.total }
          { input.operation }
          { input.next }
        </h3>
      </div>
      <div className="calc-panel">
        {['AC', '+/-', '%'].map((btn) => (<button key={btn} onClick={eventClicked} type="button" className="input">{ btn }</button>))}
        <button onClick={eventClicked} type="button" className="input orange-btn">÷</button>
        {['7', '8', '9'].map((btn) => (<button key={btn} onClick={eventClicked} type="button" className="input">{ btn }</button>))}
        <button onClick={eventClicked} type="button" className="input orange-btn">x</button>
        {['4', '5', '6'].map((btn) => (<button key={btn} onClick={eventClicked} type="button" className="input">{ btn }</button>))}
        <button onClick={eventClicked} type="button" className="input orange-btn">-</button>
        {['1', '2', '3'].map((btn) => (<button key={btn} onClick={eventClicked} type="button" className="input">{ btn }</button>))}
        <button onClick={eventClicked} type="button" className="input orange-btn">+</button>
      </div>
      <div className="last-row">
        {['0', '.'].map((btn) => (<button key={btn} onClick={eventClicked} type="button" className="input">{ btn }</button>))}
        <button onClick={eventClicked} type="button" className="input orange-btn">=</button>
      </div>
    </div>
  );
}

export default Calculator;
