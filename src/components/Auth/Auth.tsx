import { type ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/types";
import { type RootState } from "@/redux/store";
import { Board } from "@/components/Board";
import { loginThunk } from "@/redux/auth/loginThunk";
import { LoginPage } from "@/components/Auth/LoginPage";

export const AuthPage = () => {
  const [deviceId, setDeviceId] = useState("");
  const [pin, setPin] = useState("");

  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn,
  );

  const errorMessage = useAppSelector(
    (state: RootState) => state.auth.errorMessage,
  );

  const onDeviceIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeviceId(e.target.value);
  };

  const onPinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const dispatch = useAppDispatch();

  const onSubmitHandler = () => {
    dispatch(loginThunk(deviceId, pin));
    setDeviceId("");
    setPin("");
  };

  return isLoggedIn ? (
    <Board />
  ) : (
    <LoginPage
      errorMessage={errorMessage}
      onDeviceIdChange={onDeviceIdChange}
      onPinChange={onPinChange}
      onSubmitHandler={onSubmitHandler}
    />
  );
};
