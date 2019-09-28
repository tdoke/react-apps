import React from 'react';
import { Provider } from 'react-redux';
import { RoutesConfig } from './config/routes/';
import { makeStore } from './config/redux/store';
import ApplicationBar from './features/app-bar';
import './App.css';

function App() {
  return (
    <Provider store={makeStore()}>
      <div className="App">
        <ApplicationBar />
        <RoutesConfig />
      </div>
    </Provider>
  );
}

export default App;
