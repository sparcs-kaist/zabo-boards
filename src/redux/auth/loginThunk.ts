import { type AppDispatch } from "@/redux/store";
import axios from "axios";
import { setIsLoggedIn, setErrorMessage } from "./authSlice";

// send device id and pin to server and get session cookie
export const loginThunk =
  (deviceId: string, pin: string) => async (dispatch: AppDispatch) => {
    // request zabo board login and get response

    // mock api request time
    const response = await axios.post(`/api/board/login`, {
      name: deviceId,
      password: pin,
    });

    const isLoginSuccess = response.data.success;

    // if success, then set zabo store's isLogin to true
    if (isLoginSuccess) {
      dispatch(setIsLoggedIn(true));
    } else {
      dispatch(setErrorMessage(response.data.error));
    }
  };
