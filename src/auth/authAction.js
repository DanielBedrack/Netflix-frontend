export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGOUT = "LOGOUT"
export const UPDATE_USER = "UPDATE_USER"


export const LoginStart = ()=>({
    type:LOGIN_START
})

export const LoginSuccess = (user)=>({
    type:LOGIN_SUCCESS,payload:user
})
export const LoginFail = ()=>({
    type:LOGIN_FAIL
})
export const Logout = ()=>({
    type:LOGOUT
})
export const UpdateUser = (user) => ({
    type: UPDATE_USER, payload: user.myList
})