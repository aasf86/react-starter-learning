import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user/user';
import UserList from './user/user-list';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  addUser(user){        
    this.state.users.push(user);    
    this.setState({
      users: this.state.users
    });
  }

  render() {

    const { users } = this.state;

    return (
      <div>        
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.          
          </p>
        </div>
        <hr/>
        <User onSalvar={(user)=>this.addUser(user)} />
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
