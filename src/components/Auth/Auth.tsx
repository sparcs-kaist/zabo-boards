import { type ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/types";
import { type RootState } from "@/redux/store";
import { Board } from "@/components/Board";
import { loginThunk } from "@/redux/auth/loginThunk";
import style from "./Auth.module.scss";

export const AuthPage = () => {
  const [deviceId, setDeviceId] = useState("");
  const [pin, setPin] = useState("");

  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn,
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

  if (isLoggedIn) {
    return <Board />;
  }

  return (
    <div className={style.modalWrapper}>
      <div className={style.modalContainer}>
        <h1 className={style.modalTitle}> Zabo Board Login</h1>
        <br />
        <p className={style.modalContent}>
          Zabo Board 서비스를 이용하기 위해서는 등록된 device Id와 PIN을
          입력하세요.
          <br />
          Zabo Board 서비스를 등록하기 위해서는 zabo.sparcs.org 채널톡으로
          문의해주세요.
        </p>
        <div className={style.form}>
          <label className={style.input}>
            device Id
            <input
              className={style.input}
              name="deviceId"
              onChange={onDeviceIdChange}
            />
          </label>
          <label className={style.input}>
            PIN
            <input
              className={style.input}
              type="password"
              name="PIN"
              onChange={onPinChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className={style.submit}
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
