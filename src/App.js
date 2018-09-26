import React, { Component } from 'react';
import SlideDown from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
  }

  setPage(pageNumber) {
    this.setState({ page: pageNumber });
    setTimeout(() => {
      this.setState({ page: pageNumber + 1 });
    }, 500 * Math.random());
  }
  render() {
    const { page, random } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {random} - {page % 2}
          <h1 className="App-title" onClick={() => this.setPage(page + 1)}>Click me to change page!</h1>
        </header>
        <SlideDown>
          { page % 2 === 0 &&
            <p className="page blue">
              Page even!
            </p>
          }
        </SlideDown>
        <SlideDown>
          { page % 2 === 1 &&
            <p className="page red">
              Page odd!
            </p>
          }
        </SlideDown>
      </div>
    );
  }
}

export default App;
