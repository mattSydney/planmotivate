import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import GoalReducer  from './GoalReducer';

const AppReducer = combineReducers({
  nav : NavReducer,  
  goal: GoalReducer
});

export default AppReducer;
