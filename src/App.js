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
    // setTimeout(() => {
    //   this.setState({ page: pageNumber + 1 });
    // }, 500 * Math.random());
  }
  render() {
    const { page, random } = this.state;
    const classy = page % 2 === 0 ? 'even' : 'odd';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {random} - {page % 2}
          <h1 className="App-title" onClick={() => this.setPage(page + 1)}>Click me to change page!</h1>
        </header>
        <SlideDown closed={page % 2 === 0}>
          <p className={"page blue " + classy}>
            Page even!
          </p>
        </SlideDown>
        <SlideDown closed={page % 2 !== 0}>
          <p className={"page red " + classy}>
            Page odd!
          </p>
        </SlideDown>
      </div>
    );
  }
}

export default App;
