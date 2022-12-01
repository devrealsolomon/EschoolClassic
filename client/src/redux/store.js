import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  createBlogReducer,
  getAdminBlogsReducer,
} from "./admin/reducers/blogReducers";
import { adminUpdateSchoolReducer } from "./admin/reducers/schoolReducers";
import {
  adminSigninReducer,
  adminSignUpReducer,
  updateUserReducer,
} from "./admin/reducers/userReducers";
import { getMyBlogsReducer } from "./reducers/blogReducers";

import {
  createEventReducer,
  getMyEventsReducer,
  getSchoolEventsReducer,
} from "./reducers/eventReducers";
import {
  addToGalleryReducer,
  getMyGalleryReducer,
  getSchoolGalleryReducer,
} from "./reducers/galleryReducers";
import { initializePaymentReducer } from "./reducers/paymentReducers";
import {
  getAllSchoolsReducer,
  getFeaturedSchoolsReducer,
  searchSchoolsReducer,
  updateSchoolReducer,
} from "./reducers/schoolReducers";
// import { getAllSchoolsReducer } from "./reducers/schoolReducers";
import { userSigninReducer, userSignUpReducer } from "./reducers/userReducers";

const reducers = combineReducers({
  signInInfo: userSigninReducer,
  signup: userSignUpReducer,
  updateSchool: updateSchoolReducer,
  events: getMyEventsReducer,
  event: createEventReducer,
  payment: initializePaymentReducer,
  featured: getFeaturedSchoolsReducer,
  schools: searchSchoolsReducer,
  blogs: getMyBlogsReducer,
  schoolEvents: getSchoolEventsReducer,
  allSchools: getAllSchoolsReducer,
  adminSignInInfo: adminSigninReducer,
  adminSignup: adminSignUpReducer,
  adminBlogs: getAdminBlogsReducer,
  blog: createBlogReducer,
  updateUser: updateUserReducer,

  adminUpdateSchool: adminUpdateSchoolReducer,
  addGallery: addToGalleryReducer,
  myGallery: getMyGalleryReducer,
  schoolGallery: getSchoolGalleryReducer,
});
const initialState = {
  signInInfo: {
    userInfo: localStorage.getItem("eSchooluserDetails")
      ? JSON.parse(localStorage.getItem("eSchooluserDetails"))
      : null,
  },
  adminSignInInfo: {
    userInfo: localStorage.getItem("eSchooladminDetails")
      ? JSON.parse(localStorage.getItem("eSchooladminDetails"))
      : null,
  },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
