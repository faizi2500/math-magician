import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.eventClicked = this.eventClicked.bind(this);
  }

  eventClicked(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="answer">
          <h3 className="show-answer">
            { total }
            { operation }
            { next }
          </h3>
        </div>
        <div className="calc-panel">
          <button onClick={this.eventClicked} type="button" className="input">AC</button>
          <button onClick={this.eventClicked} type="button" className="input">+/-</button>
          <button onClick={this.eventClicked} type="button" className="input">%</button>
          <button onClick={this.eventClicked} type="button" className="input orange-btn">÷</button>
          <button onClick={this.eventClicked} type="button" className="input">7</button>
          <button onClick={this.eventClicked} type="button" className="input">8</button>
          <button onClick={this.eventClicked} type="button" className="input">9</button>
          <button onClick={this.eventClicked} type="button" className="input orange-btn">x</button>
          <button onClick={this.eventClicked} type="button" className="input">4</button>
          <button onClick={this.eventClicked} type="button" className="input">5</button>
          <button onClick={this.eventClicked} type="button" className="input">6</button>
          <button onClick={this.eventClicked} type="button" className="input orange-btn">-</button>
          <button onClick={this.eventClicked} type="button" className="input">1</button>
          <button onClick={this.eventClicked} type="button" className="input">2</button>
          <button onClick={this.eventClicked} type="button" className="input">3</button>
          <button onClick={this.eventClicked} type="button" className="input orange-btn">+</button>
        </div>
        <div className="last-row">
          <button onClick={this.eventClicked} type="button" className="input">0</button>
          <button onClick={this.eventClicked} type="button" className="input">.</button>
          <button onClick={this.eventClicked} type="button" className="input orange-btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
