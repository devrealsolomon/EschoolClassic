import axios from "axios";
import {
  INITIALIZE_PAYMENT_FAIL,
  INITIALIZE_PAYMENT_REQUEST,
  INITIALIZE_PAYMENT_SUCCESS,
} from "../constants/paymentConstants";

export const initializePayment =
  (email, full_name, amount) => async (dispatch, getState) => {
    dispatch({ type: INITIALIZE_PAYMENT_REQUEST });
    try {
      const token = getState()?.signInInfo?.userInfo?.token;
      const { data } = await axios.post(
        "https://edet-school.herokuapp.com/api/v1/payment/init",
        { email, full_name, amount },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: INITIALIZE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: INITIALIZE_PAYMENT_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,
      });
    }
  };
