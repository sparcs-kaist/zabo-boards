import React, { useEffect } from "react";
import type { ZaboListState } from "@/redux/zabos/zaboSlice";
import { fetchZaboThunk } from "@/redux/zabos/fetchZaboThunk";
import { useAppSelector, useAppDispatch } from "@/hooks";
import style from "./Board.module.scss";

export const Board = () => {
  const zaboList = useAppSelector((state: ZaboListState) => state.zaboList);
  const leftoverLength = useAppSelector(
    (state: ZaboListState) => state.leftoverLength,
  );
  console.log(`zaboList: ${zaboList}, leftoverLength: ${leftoverLength}`);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchZaboThunk());
  }, []);

  return (
    <main className={style.board}>
      <div>Hello World!</div>
    </main>
  );
};
