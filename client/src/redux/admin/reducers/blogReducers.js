import {
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  GET_MY_BLOGS_FAIL,
  GET_MY_BLOGS_REQUEST,
  GET_MY_BLOGS_SUCCESS,
} from "../constants/blogConstants";

export const createBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return { ...state, loading: true };
    case CREATE_BLOG_SUCCESS:
      return { ...state, loading: false, blog: action.payload };
    case CREATE_BLOG_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getAdminBlogsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_BLOGS_REQUEST:
      return { ...state, loading: true };
    case GET_MY_BLOGS_SUCCESS:
      return { ...state, loading: false, blogs: action.payload };
    case GET_MY_BLOGS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
