import React, { useEffect } from "react";
import { useInterval } from "@/hooks";
import { moveToNext, type ZaboListState } from "@/redux/zabos/zaboSlice";
import { fetchZaboThunk } from "@/redux/zabos/fetchZaboThunk";
import { useAppSelector, useAppDispatch, type ZaboJson } from "@/types";
import { Zabo } from "@/components/Zabo";
import { Info } from "@/components/Info";
import { Background } from "@/components/Background";
import { Qr } from "@/components/Qr";
import { Logo } from "@/components/Logo";
import { TransitionInterval } from "@/config";
import style from "./Board.module.scss";

export const Board = () => {
  const zaboList = useAppSelector((state: ZaboListState) => state.zaboList);
  const leftOverZaboLength = useAppSelector(
    (state: ZaboListState) => state.leftoverLength,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchZaboThunk());
  }, []);

  useInterval(() => {
    if (leftOverZaboLength > 0) {
      dispatch(moveToNext());
    } else {
      dispatch(fetchZaboThunk());
    }
  }, TransitionInterval);

  return (
    <main className={style.board}>
      <Logo />
      {zaboList.map((zabo: ZaboJson) => (
        <div key={zabo.imageUrl}>
          <Background
            key={`${zabo.imageUrl}back`}
            imageUrl={zabo.imageUrl}
            state={zabo.state}
          />
          <Info
            key={`${zabo.imageUrl}info`}
            title={zabo.title}
            description={zabo.description}
            date={zabo.date}
            state={zabo.state}
          />
          <Qr
            key={`${zabo.imageUrl}qr`}
            qrUrl={zabo.qrUrl}
            state={zabo.state}
          />
          <Zabo
            key={`${zabo.imageUrl}zabo`}
            title={zabo.title}
            imageUrl={zabo.imageUrl}
            state={zabo.state}
          />
        </div>
      ))}
    </main>
  );
};
