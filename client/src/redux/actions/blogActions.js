import axios from "axios";
import {
  GET_MY_BLOGS_FAIL,
  GET_MY_BLOGS_REQUEST,
  GET_MY_BLOGS_SUCCESS,
} from "../constants/blogConstants";
export const getMyBlogs = (page) => async (dispatch, getState) => {
  dispatch({ type: GET_MY_BLOGS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/posts?page=${page}`
    );
    dispatch({ type: GET_MY_BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MY_BLOGS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
