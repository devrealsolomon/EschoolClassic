import {
  INITIALIZE_PAYMENT_FAIL,
  INITIALIZE_PAYMENT_REQUEST,
  INITIALIZE_PAYMENT_SUCCESS,
} from "../constants/paymentConstants";

export const initializePaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_PAYMENT_REQUEST:
      return { ...state, loading: true };
    case INITIALIZE_PAYMENT_SUCCESS:
      return { ...state, loading: false, url: action.payload };
    case INITIALIZE_PAYMENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
