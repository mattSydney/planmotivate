import  {
  ADD_GOAL_DONE, 
  ADD_GOAL_FIELD_UPDATE, 
  ADD_GOAL_FAIL, GET_GOAL, 
  SET_GOAL_FROM_STORAGE,
  INCREASE_GOAL_COMPLETION_VALUE,
  DELETE_GOAL
}  
  from '../actions/types';
  import { REHYDRATE } from 'redux-persist/es/constants';
  const initialAuthState =  {
  goals: [
   
  ],
  goalDescription: '',
  goalReason: '',
  goalCompletionValue: '',
  goalAdded:null
}
// here we return a new state to the page
  export default (state = initialAuthState, action) => {
    
    switch (action.type) {
      case ADD_GOAL_DONE:
        return { ...state, goals:[...state.goals, action.goal], goalDescription:null, goalReason: null, goalCompletionValue: null };
      case ADD_GOAL_FIELD_UPDATE:            
        return {...state, [action.payload.prop]:action.payload.value};
      case SET_GOAL_FROM_STORAGE:        
        return {...state, goals:action.payload};
      case INCREASE_GOAL_COMPLETION_VALUE :        
        return {...state, goals:action.payload};
      case DELETE_GOAL:        
        return {...state, goals:action.payload};
      default:      
        return state;
    }
  }