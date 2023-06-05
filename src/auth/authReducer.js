import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './authAction'

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return { user: null, isFatching: true, error: false }
    }
    case LOGIN_SUCCESS: {
      return { user: action.payload, isFatching: false, error: false }
    }
    case LOGIN_FAIL: {
      return { user: null, isFatching: false, error: true }
    }
    case LOGOUT: {
      return { user: null, isFatching: false, error: false }
    }
    default: {
      return { ...state }
    }
  }
}
