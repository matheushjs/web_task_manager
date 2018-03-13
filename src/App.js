import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="task-vbox">
          <div className="task-top">
            <div className="task-content">
              Hey<br/>
              Hey<br/>
              Hey<br/>
            </div>
          </div>
          <div className="task-bottom">
            <input className="task-input" type="text" name="fname"/>
          </div>
        </div>
        <div className="task-vbox">
          <div className="task-top">
            <div className="task-content">
              Hey<br/>
              Hey<br/>
              Hey<br/>
            </div>
          </div>
          <div className="task-bottom">
            <input className="task-input" type="text" name="fname"/>
          </div>
        </div>
        <div className="task-vbox">
          <div className="task-top">
            <div className="task-content">
              Hey<br/>
              Hey<br/>
              Hey<br/>
            </div>
          </div>
          <div className="task-bottom">
            <input className="task-input" type="text" name="fname"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
