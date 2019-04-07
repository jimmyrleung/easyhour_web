import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// It's a middleware that gives us access to the dispatch function
import ReduxThunk from 'redux-thunk';

import reducers from './components/reducers';

import './App.css';
import Drawer from './components/menu/Drawer';
import 'typeface-roboto';

class App extends Component {

  render() {
    const store =
      createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Drawer title="Easyhour" />
      </Provider>
    )
  }

}

export default App;
