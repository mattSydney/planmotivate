import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const thirdAction = AppNavigator.router.getActionForPathAndParams('Goal');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);


export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Goal':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Goal' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}