import {
  GET_ALL_SCHOOLS_FAIL,
  GET_ALL_SCHOOLS_REQUEST,
  GET_ALL_SCHOOLS_SUCCESS,
  UPDATE_SCHOOL_FAIL,
  UPDATE_SCHOOL_REQUEST,
  UPDATE_SCHOOL_SUCCESS,
} from "../constants/schoolConstants";

export const getAllSchoolsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_SCHOOLS_SUCCESS:
      return { ...state, loading: false, schools: action.payload };
    case GET_ALL_SCHOOLS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminUpdateSchoolReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SCHOOL_REQUEST:
      return { ...state, loading: true };
    case UPDATE_SCHOOL_SUCCESS:
      return { ...state, loading: false, school: action.payload };
    case UPDATE_SCHOOL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
