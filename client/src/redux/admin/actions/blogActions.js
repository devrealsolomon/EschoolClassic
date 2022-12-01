import axios from "axios";
import {
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  GET_MY_BLOGS_FAIL,
  GET_MY_BLOGS_REQUEST,
  GET_MY_BLOGS_SUCCESS,
} from "../constants/blogConstants";
export const getMyBlogs = (page) => async (dispatch, getState) => {
  dispatch({ type: GET_MY_BLOGS_REQUEST });
  try {
    const token = getState()?.adminSignInInfo?.userInfo?.token;
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/posts?page=${page}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
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

export const createBlog = (blog) => async (dispatch, getState) => {
  dispatch({ type: CREATE_BLOG_REQUEST });
  try {
    const token = getState()?.adminSignInInfo?.userInfo?.token;
    
    const { data } = await axios.post(
      "https://edet-school.herokuapp.com/api/v1/posts",
      blog,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: CREATE_BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_BLOG_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
