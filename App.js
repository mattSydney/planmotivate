import React from 'react';
import { AppRegistry, AsyncStorage, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppReducer from './src/store/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ViewLoading from './src/components/views/ViewLoading';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const reducer = persistReducer(persistConfig, AppReducer);

const store = createStore(
  reducer,
  applyMiddleware(middleware, ReduxThunk)
);
const persistor = persistStore(store);





/*
**********************
SET INITIAL ROUTE IN Store/reducers/navreducer
*/


class PlanMotivate extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ViewLoading />} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PlanMotivate', () => PlanMotivate);

export default PlanMotivate;
