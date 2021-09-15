import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <div className="answer">
          <h3 className="show-answer">
            { result }
          </h3>
        </div>
        <div className="calc-panel">
          <button type="button" className="input">AC</button>
          <button type="button" className="input">+/-</button>
          <button type="button" className="input">%</button>
          <button type="button" className="input orange-btn">÷</button>
          <button type="button" className="input">7</button>
          <button type="button" className="input">8</button>
          <button type="button" className="input">9</button>
          <button type="button" className="input orange-btn">x</button>
          <button type="button" className="input">4</button>
          <button type="button" className="input">5</button>
          <button type="button" className="input">6</button>
          <button type="button" className="input orange-btn">-</button>
          <button type="button" className="input">1</button>
          <button type="button" className="input">2</button>
          <button type="button" className="input">3</button>
          <button type="button" className="input orange-btn">+</button>
        </div>
        <div className="last-row">
          <button type="button" className="input">0</button>
          <button type="button" className="input">.</button>
          <button type="button" className="input orange-btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
