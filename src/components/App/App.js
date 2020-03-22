import React, {Component} from 'react';
import Login from '../Login';

import AppContext from '../../context';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.updateState = this.updateState.bind(this);
  }

  updateState(data){
    this.setState({...data});
  }

  render(){
    return (
      <AppContext.Provider value={{
        updateState: this.updateState
      }}>
        <div className= "App">
          <Login/>
        </div>
      </AppContext.Provider>
    )
  }
}

export default App;
