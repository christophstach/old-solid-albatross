import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Desktop from './components/Desktop';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Desktop/>
    </div>
  </Provider>
);

export default App;