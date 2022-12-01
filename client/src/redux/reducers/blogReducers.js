import {
  GET_MY_BLOGS_FAIL,
  GET_MY_BLOGS_REQUEST,
  GET_MY_BLOGS_SUCCESS,
} from "../constants/blogConstants";

export const getMyBlogsReducer = (state = {}, action) => {
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
