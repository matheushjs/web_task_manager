import React, { Component } from 'react';
import './App.css';

function ItemBox(props) {
  // props.items, props.hasInput, props.onSubmit
  let input = ""
  if(props.hasInput){
    input = 
      <div className="itembox-inputbox">
        <form onSubmit={props.onSubmit}>
          <input className="itembox-input" type="text" name="fname" autocomplete="off"/>
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
  constructor(){
    super();
    this.state = {
      items: [
        [],
        [],
        [],
      ]
    }
  }
  
  componentDidMount() {
    let data = localStorage.getItem('tasks');

    if(data){
      this.setState(prevState => {
        prevState.items = JSON.parse(data);
        return prevState;
      })
    }
  }

  onSubmit(event, idx){
    let value = event.target.childNodes[0].value;
    event.target.childNodes[0].value = "";

    this.setState(prevState => {
      prevState.items[idx] = prevState.items[idx].concat(value);
      localStorage.setItem('tasks', JSON.stringify(prevState.items));
      return {
        items: prevState.items,
      }
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {this.state.items.map(
          (value, idx) => <ItemBox key={idx} items={this.state.items[idx]} hasInput={true} onSubmit={(e) => this.onSubmit(e, idx)}/>
        )}
      </div>
    );
  }
}

export default App;
