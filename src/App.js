import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingIndicator from './components/LoadingIndicator';

class App extends Component {

  state = {
    isLoading: true
  };

  componentDidMount() {
    this._timer = setTimeout(
      () => this.setState({ isLoading: false }),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <pre>isLoading: {String(this.state.isLoading)}</pre>
        <LoadingIndicator isLoading={this.state.isLoading}>
          <div>ahoy!</div>
        </LoadingIndicator>
      </div>
    );
  }

}

export default App;
