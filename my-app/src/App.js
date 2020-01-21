import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Val'

class App extends Component {
  state = {
    us_input: ''
  }

  inputChangedHandler = (event) => {
    this.setState({us_input: event.targed.value})
  }


  render(){
  return (
     <div className='block'>
        <hr />
          <input
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.us_input} />
      <p>{this.state.us_input}</p>
      <Validation len_input={this.state.us_input.length}/>
    </div>
    
    
  );
  }
}



export default App;
