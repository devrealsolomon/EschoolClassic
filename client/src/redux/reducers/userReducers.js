import {
  SCHOOL_SIGNUP_FAIL,
  SCHOOL_SIGNUP_SUCCESS,
  SCHOOL_SIGNUP_REQUEST,
  SCHOOL_SIGNIN_FAIL,
  SCHOOL_SIGNIN_SUCCESS,
  SCHOOL_SIGNIN_REQUEST,
  SCHOOL_SIGNOUT,
} from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHOOL_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case SCHOOL_SIGNIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case SCHOOL_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SCHOOL_SIGNOUT:
      return { ...state };
    default:
      return state;
  }
};
export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHOOL_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SCHOOL_SIGNUP_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case SCHOOL_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
