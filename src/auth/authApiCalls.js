import { LoginFail, LoginStart, LoginSuccess, updateUser } from './authAction';
import axios from "axios";

export const loginCall = async (userCred, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post('auth/login', userCred);
    dispatch(res.data ? LoginSuccess(res.data) : LoginFail());
  } catch (error) {
    dispatch(LoginFail());
  }
};

export const registerCall = async (newUser, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post('auth/register', newUser);
    dispatch(res.data ? LoginSuccess(res.data) : LoginFail());
  } catch (error) {
    dispatch(LoginFail());
  }
};

// export const myListCall = async (newItem, dispatch) => {
//   dispatch(updateUser());
//   try {
//     const res = await axios.post('user/my-list', newItem);
//     dispatch(res.data ? LoginSuccess(res.data) : LoginFail());
//   } catch(err){
//     dispatch(LoginFail())
//   }
// }