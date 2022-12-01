import axios from "axios";
import { SCHOOL_SIGNIN_SUCCESS } from "../../constants/userConstants";

import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
  // USER_SIGNUP_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(
      "https://edet-school.herokuapp.com/api/v1/admin/login",
      {
        email,
        password,
      }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: null });
    localStorage.setItem("eSchooladminDetails", JSON.stringify(data));
    localStorage.removeItem("eSchooluserDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const signup =
  (password, email, school_name, username) => async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
      payload: {
        email,
        school_name,
        password,
        username,
      },
    });
    try {
      const { data } = await axios.post(
        "https://edet-school.herokuapp.com/api/v1/admin/register",
        {
          email,
          school_name,
          password,
          username,
        }
      );
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
      dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: null });
      localStorage.removeItem("eSchooluserDetails");

      localStorage.setItem("eSchooladminDetails", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,
      });
    }
  };

export const signout = () => async (dispatch) => {
  await axios.post("https://edet-school.herokuapp.com/api/v1/admin/logout");
  localStorage.removeItem("eSchooladminDetails");
  dispatch({ type: USER_SIGNIN_SUCCESS, payload: null });

  dispatch({ type: USER_SIGNOUT });
};

export const updateUser = (updates) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_USER_REQUEST,
    payload: updates,
  });
  try {
    const token = getState()?.adminSignInInfo?.userInfo?.token;

    const { data } = await axios.put(
      "https://edet-school.herokuapp.com/api/v1/admin/update",
      updates,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: null });
    localStorage.setItem("eSchooladminDetails", JSON.stringify(data));
    localStorage.removeItem("eSchooluserDetails");
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
