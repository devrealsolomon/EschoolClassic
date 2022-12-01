import axios from "axios";
import {
  FEATURED_SCHOOLS_FAIL,
  FEATURED_SCHOOLS_REQUEST,
  FEATURED_SCHOOLS_SUCCESS,
  GET_ALL_SCHOOLS_FAIL,
  GET_ALL_SCHOOLS_REQUEST,
  GET_ALL_SCHOOLS_SUCCESS,
  SEARCH_SCHOOLS_FAIL,
  SEARCH_SCHOOLS_REQUEST,
  SEARCH_SCHOOLS_SUCCESS,
  UPDATE_SCHOOL_FAIL,
  UPDATE_SCHOOL_REQUEST,
  UPDATE_SCHOOL_SUCCESS,
} from "../constants/schoolConstants";
import { SCHOOL_SIGNIN_SUCCESS } from "../constants/userConstants";

export const getAllSchools = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_SCHOOLS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://edet-school.herokuapp.com/api/v1/schools/all"
    );
    dispatch({ type: GET_ALL_SCHOOLS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_SCHOOLS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const searchSchools = (school) => async (dispatch) => {
  dispatch({ type: SEARCH_SCHOOLS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/schools/search?school=${school}`
    );
    dispatch({ type: SEARCH_SCHOOLS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_SCHOOLS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const getFeatured = () => async (dispatch, getState) => {
  dispatch({ type: FEATURED_SCHOOLS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://edet-school.herokuapp.com/api/v1/schools/featured"
    );
    dispatch({ type: FEATURED_SCHOOLS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEATURED_SCHOOLS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const updateSchool = (updates) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_SCHOOL_REQUEST, payload: updates });
  try {
    const token = getState()?.signInInfo?.userInfo?.token;

    const { data } = await axios.put(
      "https://edet-school.herokuapp.com/api/v1/schools/school",
      updates,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: UPDATE_SCHOOL_SUCCESS, payload: data });
    dispatch({ type: SCHOOL_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("eSchooluserDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UPDATE_SCHOOL_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
