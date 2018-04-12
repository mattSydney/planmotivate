import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import GoalScreen from '../screens/GoalScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  
  Main: { screen: MainScreen },
  Goal: { screen: GoalScreen },
});

class AppWithNavigationState extends React.Component {

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
