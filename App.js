import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppReducer from './src/store/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';



const store = createStore(
  AppReducer,
  applyMiddleware(middleware,ReduxThunk),
);


/*
**********************
SET INITIAL ROUTE IN Store/reducers/navreducer



*/


class PlanMotivate extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PlanMotivate', () => PlanMotivate);

export default PlanMotivate;
