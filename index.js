import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';



class MainApp extends React.Component {

  render() {
      const store = createStore();
      return (
      <Provider store={store}>
        <App />
      </Provider>
      );
  }
}

AppRegistry.registerComponent('AwsomeProject', () => App);
