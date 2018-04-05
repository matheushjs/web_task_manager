import React, { Component } from 'react';
import './App.css';

function ItemBox(props) {
  // props.items, props.hasInput, props.onSubmit
  let input = ""
  if(props.hasInput){
    input = 
      <div className="itembox-inputbox">
        <form onSubmit={props.onSubmit}>
          <input className="itembox-input" type="text" name="fname"/>
        </form>
      </div>
  }

  return (
    <div className="itembox-container">
      <div className="itembox-items">
        {props.items.map((element, idx) => <p key={idx}>{element}</p>)}
      </div>
        {input}
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <ItemBox items={["Hey", "Hey", "Hey"]} hasInput={true} onSubmit={() => alert("hey")} />
          <ItemBox items={["Hey", "Hey", "Hey"]} hasInput={true} onSubmit={() => alert("hey")}/>
          <ItemBox items={["Hey", "Hey", "Hey"]} hasInput={true} onSubmit={() => alert("hey")}/>
      </div>
    );
  }
}

export default App;
