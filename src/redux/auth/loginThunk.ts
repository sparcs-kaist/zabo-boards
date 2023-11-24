import { type AppDispatch } from "@/redux/store";
import { setIsLoggedIn } from "./authSlice";

// send device id and pin to server and get session cookie
export const loginThunk =
  (deviceId: string, pin: string) => async (dispatch: AppDispatch) => {
    // request zabo board login and get response
    console.log(deviceId);
    console.log(pin);

    // mock api request time
    setTimeout(() => {}, 1000);

    // if success, then set zabo store's isLogin to true
    dispatch(setIsLoggedIn(true));
  };
