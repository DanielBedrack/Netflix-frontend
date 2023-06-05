import { authReducer } from './authReducer'
import { createContext, useEffect, useReducer } from 'react'

const initialState = {
  user:
    localStorage.getItem('user') !== null
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  isFetching: false,
  error: false
}

export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
