import {
  ADD_TO_GALLERY_FAIL,
  ADD_TO_GALLERY_REQUEST,
  ADD_TO_GALLERY_SUCCESS,
  GET_MY_GALLERY_FAIL,
  GET_MY_GALLERY_REQUEST,
  GET_MY_GALLERY_SUCCESS,
  GET_SCHOOL_GALLERY_FAIL,
  GET_SCHOOL_GALLERY_REQUEST,
  GET_SCHOOL_GALLERY_SUCCESS,
} from "../constants/galleryConstants";
import axios from "axios";
export const addToGallery = (images) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_GALLERY_REQUEST });
  try {
    const token = getState()?.signInInfo?.userInfo?.token;
    const { data } = await axios.post(
      "https://edet-school.herokuapp.com/api/v1/gallery",
      {
        images,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: ADD_TO_GALLERY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_TO_GALLERY_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const getMyGallery = () => async (dispatch, getState) => {
  dispatch({ type: GET_MY_GALLERY_REQUEST });
  try {
    const token = getState()?.signInInfo?.userInfo?.token;
    const { data } = await axios.get(
      "https://edet-school.herokuapp.com/api/v1/gallery/my_school",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_MY_GALLERY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MY_GALLERY_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const getSchoolGallery = (school_id) => async (dispatch) => {
  dispatch({ type: GET_SCHOOL_GALLERY_REQUEST });
  try {
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/gallery/${school_id}`
    );
    dispatch({ type: GET_SCHOOL_GALLERY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SCHOOL_GALLERY_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
