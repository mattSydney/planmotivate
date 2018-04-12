import  {
  ADD_GOAL_DONE, 
  ADD_GOAL_FIELD_UPDATE, 
  ADD_GOAL_FAIL, GET_GOAL, 
  SET_GOAL_FROM_STORAGE,
  INCREASE_GOAL_COMPLETION_VALUE,
  DELETE_GOAL
}  
  from '../actions/types';
  
  const initialAuthState =  {
  goals: [
    {
      id: 1,
      goalDescription: "Walk 10 miles",
      goalReason: "exploit proactive functionalities",
      goalProgress: 9,
      goalCompletionValue: 10,
    },
    {
      id: 2,
      goalDescription: "Walk 10 miles",
      goalReason: "exploit proactive functionalities",
      goalProgress: 8,
      goalCompletionValue: 10,
    }
  ],
  //newGoal: 
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
        console.log("Calling Update GOAL")  
        return {...state, [action.payload.prop]:action.payload.value};
      case SET_GOAL_FROM_STORAGE:
        console.log("Calling SET GOAL")
        return {...state, goals:action.payload};
      case INCREASE_GOAL_COMPLETION_VALUE :
        console.log("Calling SET GOAL")
        return {...state, goals:action.payload};
      case DELETE_GOAL:
        console.log("delete goal")
        return {...state, goals:action.payload};
      default:      
        return state;
    }
  }