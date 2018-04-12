import { Error } from '../../components/common/Error';
import  {
  ADD_GOAL_DONE, 
  ADD_GOAL_FIELD_UPDATE, 
  ADD_GOAL_FAIL, GET_GOAL, 
  SET_GOAL_FROM_STORAGE,
  INCREASE_GOAL_COMPLETION_VALUE,
  DELETE_GOAL
}  
  from './types';
import { NavigationActions } from 'react-navigation'

export const addGoal = (goal) => {
  return (dispatch) => {
  dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  dispatch( {
    type: ADD_GOAL_DONE,
    goal: goal
  })
}
}

export const goalFormUpdate = (prop, value) => {
  return {
    type: ADD_GOAL_FIELD_UPDATE,
    payload: {prop, value}
  }
}

export const setAllGoals = (goals) => {
  return {
    type: SET_GOAL_FROM_STORAGE,
    payload: goals
  }
}

export const increaseCompletionValue = (goals) => {
  return {
    type: INCREASE_GOAL_COMPLETION_VALUE,
    payload: goals
  }
}
export const deleteGoal = (goals) => {
  return {
    type: DELETE_GOAL,
    payload: goals
  }
}


var goals = [
  {
    id: 1,
    goalDescription: "Walk 12 miles",
    goalReason: "exploit proactive functionalities",
    goalProgress: 9,
    goalCompletionValue: 10,
  },
  {
    id: 2,
    goalDescription: "Walk 10 miles",
    goalReason: "exploit proactive functionalities",
    goalProgress: 10,
    goalCompletionValue: 10,
  }
]


/*
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

*/

