import axios from "axios";
import { USER_SIGNIN_SUCCESS } from "../admin/constants/userConstants";
import {
  SCHOOL_SIGNOUT,
  SCHOOL_SIGNIN_SUCCESS,
  SCHOOL_SIGNUP_FAIL,
  SCHOOL_SIGNUP_REQUEST,
  SCHOOL_SIGNUP_SUCCESS,
  SCHOOL_SIGNIN_FAIL,
  SCHOOL_SIGNIN_REQUEST,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: SCHOOL_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(
      "https://edet-school.herokuapp.com/api/v1/schools/login",
      {
        email,
        password,
      }
    );
    dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: null });

    localStorage.setItem("eSchooluserDetails", JSON.stringify(data));

    localStorage.removeItem("eSchooladminDetails");
  } catch (error) {
    dispatch({
      type: SCHOOL_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const signup =
  (password, email, phone, school_name) => async (dispatch) => {
    dispatch({
      type: SCHOOL_SIGNUP_REQUEST,
      payload: {
        email,
        phone,
        school_name,

        password,
      },
    });
    try {
      const { data } = await axios.post(
        "https://edet-school.herokuapp.com/api/v1/schools",
        {
          email,
          phone,
          school_name,
          password,
        }
      );
      dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: data });
      dispatch({ type: SCHOOL_SIGNUP_SUCCESS, payload: data });
      localStorage.setItem("eSchooluserDetails", JSON.stringify(data));
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: null });
      localStorage.removeItem("eSchooladminDetails");
    } catch (error) {
      dispatch({
        type: SCHOOL_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,
      });
    }
  };

export const signout = () => async (dispatch) => {
  await axios.post("https://edet-school.herokuapp.com/api/v1/admin/logout");
  localStorage.removeItem("eSchooluserDetails");
  dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: null });

  dispatch({ type: SCHOOL_SIGNOUT });
};
