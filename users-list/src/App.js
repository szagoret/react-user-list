import React, { Component } from 'react';


import UserList from './components/users_list';
import UserForm from './components/user_form';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-center mt-5">
          <div className="col-5">
            <div className="card">
              <img className="card-img-top" src={logo} className="App-logo" />
              <div className="body">
                <h4 className="card-title">User list</h4>
                <UserList />
                <div className="d-flex justify-content-around pb-2">
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
