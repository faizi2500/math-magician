import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/calculator">
          <div className="App">
            <Calculator />
          </div>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quote">
          <Quote />
        </Route>
      </>
    );
  }
}

export default App;
