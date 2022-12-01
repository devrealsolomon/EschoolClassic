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

export const addToGalleryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_GALLERY_REQUEST:
      return { ...state, loading: true };
    case ADD_TO_GALLERY_SUCCESS:
      return { ...state, loading: false, gallery: action.payload };
    case ADD_TO_GALLERY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getMyGalleryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_GALLERY_REQUEST:
      return { ...state, loading: true };
    case GET_MY_GALLERY_SUCCESS:
      return { ...state, loading: false, images: action.payload };
    case GET_MY_GALLERY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getSchoolGalleryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SCHOOL_GALLERY_REQUEST:
      return { ...state, loading: true };
    case GET_SCHOOL_GALLERY_SUCCESS:
      return { ...state, loading: false, images: action.payload };
    case GET_SCHOOL_GALLERY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
