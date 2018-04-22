import { AppRegistry } from 'react-native';
import AppNavigator from './src/AppNavigator';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './src/reducers/index';


class MainApp extends React.Component {

  render() {
      const store = createStore( AppReducer );
      return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      );
  }
}

AppRegistry.registerComponent('AwsomeProject', () => MainApp);
