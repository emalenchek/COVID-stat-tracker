import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import TableView from './components/TableView';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar/>
          <TableView/>
        </div>
      </Provider>
    );
  }
}

export default App;
