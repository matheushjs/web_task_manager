import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="task-vbox">
          <div className="task-top">One</div>
          <div className="task-bottom">Two</div>
        </div>
        <div className="task-vbox">
          <div className="task-top">One</div>
          <div className="task-bottom">Two</div>
        </div>
        <div className="task-vbox">
          <div className="task-top">One</div>
          <div className="task-bottom">Two</div>
        </div>
      </div>
    );
  }
}

export default App;
