import React, { useEffect } from "react";
import { moveToNext, type ZaboListState } from "@/redux/zabos/zaboSlice";
import { fetchZaboThunk } from "@/redux/zabos/fetchZaboThunk";
import { useAppSelector, useAppDispatch, type ZaboJson } from "@/types";
import { Zabo } from "@/components/Zabo";
import { Info } from "@/components/Info";
import { Qr } from "@/components/Qr";
import { Logo } from "@/components/Logo";
import style from "./Board.module.scss";

export const Board = () => {
  const zaboList = useAppSelector((state: ZaboListState) => state.zaboList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchZaboThunk());
    setTimeout(() => {
      dispatch(moveToNext());
    }, 3000);
  }, []);

  return (
    <main className={style.board}>
      <Logo />
      {zaboList.map((zabo: ZaboJson) => (
        <>
          <Info
            key={zabo.title}
            title={zabo.title}
            description={zabo.description}
            date={zabo.date}
            state={zabo.state}
          />
          <Qr key={zabo.title} qrUrl={zabo.qrUrl} state={zabo.state} />
          <Zabo
            key={zabo.title}
            title={zabo.title}
            imageUrl={zabo.imageUrl}
            state={zabo.state}
          />
        </>
      ))}
    </main>
  );
};
