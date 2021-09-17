import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [input, setInput] = useState({ total: 0, next: null, operation: null });

  const eventClicked = (e) => {
    const test = { ...input, ...calculate(input, e.target.textContent) };
    setInput(() => ({ ...test }));
    // const { total, next, operation } = this.state;
    // this.setState(calculate({ total, next, operation }, e.target.textContent));
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
        <button onClick={eventClicked} type="button" className="input">AC</button>
        <button onClick={eventClicked} type="button" className="input">+/-</button>
        <button onClick={eventClicked} type="button" className="input">%</button>
        <button onClick={eventClicked} type="button" className="input orange-btn">÷</button>
        <button onClick={eventClicked} type="button" className="input">7</button>
        <button onClick={eventClicked} type="button" className="input">8</button>
        <button onClick={eventClicked} type="button" className="input">9</button>
        <button onClick={eventClicked} type="button" className="input orange-btn">x</button>
        <button onClick={eventClicked} type="button" className="input">4</button>
        <button onClick={eventClicked} type="button" className="input">5</button>
        <button onClick={eventClicked} type="button" className="input">6</button>
        <button onClick={eventClicked} type="button" className="input orange-btn">-</button>
        <button onClick={eventClicked} type="button" className="input">1</button>
        <button onClick={eventClicked} type="button" className="input">2</button>
        <button onClick={eventClicked} type="button" className="input">3</button>
        <button onClick={eventClicked} type="button" className="input orange-btn">+</button>
      </div>
      <div className="last-row">
        <button onClick={eventClicked} type="button" className="input">0</button>
        <button onClick={eventClicked} type="button" className="input">.</button>
        <button onClick={eventClicked} type="button" className="input orange-btn">=</button>
      </div>
    </div>
  );
}

export default Calculator;
