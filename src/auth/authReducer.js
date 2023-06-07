import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_USER,
} from './authAction';

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return { user: null, isFatching: true, error: false };
    }
    case LOGIN_SUCCESS: {
      return { user: action.payload, isFatching: false, error: false };
    }
    case LOGIN_FAIL: {
      return { user: null, isFatching: false, error: true };
    }
    case LOGOUT: {
      return { user: null, isFatching: false, error: false };
    }
    case UPDATE_USER: {
      const newItemId = action.payload
      const existItem = state.user.myList.find(
        (item) => item._id === newItemId
      );
      //console.log(newItemId);
  
      if(!existItem){
        const myList = [...state.user.myList, newItemId];
        // console.log(newItemId);
        // console.log(myList)
        return {...state, user: {...state.user, myList}}
      }
      
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
