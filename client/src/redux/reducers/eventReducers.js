import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  GET_MY_EVENTS_FAIL,
  GET_MY_EVENTS_REQUEST,
  GET_MY_EVENTS_SUCCESS,
  GET_SCHOOL_EVENTS_FAIL,
  GET_SCHOOL_EVENTS_REQUEST,
  GET_SCHOOL_EVENTS_SUCCESS,
} from "../constants/eventConstants";

export const createEventReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return { ...state, loading: true };
    case CREATE_EVENT_SUCCESS:
      return { ...state, loading: false, event: action.payload };
    case CREATE_EVENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getMyEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_EVENTS_REQUEST:
      return { ...state, loading: true };
    case GET_MY_EVENTS_SUCCESS:
      return { ...state, loading: false, events: action.payload };
    case GET_MY_EVENTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSchoolEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SCHOOL_EVENTS_REQUEST:
      return { ...state, loading: true };
    case GET_SCHOOL_EVENTS_SUCCESS:
      return { ...state, loading: false, events: action.payload };
    case GET_SCHOOL_EVENTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
