import React, { Component } from 'react';
import './App.css';

function ItemBox(props) {
  return (
    <div className="itembox-top">
      <div className="itembox-content">
        {props.items.map((element, idx) => <p key={idx}>{element}</p>)}
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="task-vbox">
          <ItemBox items={["Hey", "Hey", "Hey"]} />
          <div className="task-bottom">
            <input className="task-input" type="text" name="fname"/>
          </div>
        </div>
        <div className="task-vbox">
          <ItemBox items={["Hey", "Hey", "Hey"]} />
          <div className="task-bottom">
            <input className="task-input" type="text" name="fname"/>
          </div>
        </div>
        <div className="task-vbox">
          <ItemBox items={["Hey", "Hey", "Hey"]} />
          <div className="task-bottom">
            <input className="task-input" type="text" name="fname"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
