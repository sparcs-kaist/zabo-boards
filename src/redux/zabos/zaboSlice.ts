import { type ZaboJson, ZaboState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ZaboListState {
  zaboList: ZaboJson[];
  leftoverLength: number;
}

const initialState: ZaboListState = {
  zaboList: [
    {
      id: "0000000000000",
      title: "ZABO BOARD 2023 LAUNCHING",
      owner: "SPARCS",
      description: "HELLO WORLD",
      scheduleType: null,
      scheduleDate: null,
      qrUrl: "https://zabo.sparcs.org/s/86f104",
      imageUrl:
        "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=1sdf23tg",
      state: ZaboState.CURRENT_STATE,
      score: 0,
      views: 0,
      effectiveViews: 0,
      likes: 0,
    },
    {
      id: "11111111111",
      title: "ZABO BOARD 2023 LAUNCHING",
      owner: "SPARCS",
      description: "HELLO WORLD",
      scheduleType: null,
      scheduleDate: null,
      qrUrl: "https://zabo.sparcs.org/s/86f104",
      imageUrl:
        "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=1sdf23tg",
      state: ZaboState.BEFORE_STATE,
      score: 0,
      views: 0,
      effectiveViews: 0,
      likes: 0,
    },
  ],
  leftoverLength: 0,
};

const zaboSlice = createSlice({
  name: "zabo",
  initialState,
  reducers: {
    pushZabos: (state, action) => {
      // if there are plenty of leftover zabos, we do not dispatch
      if (state.leftoverLength > 10) {
        return;
      }

      let zaboList: ZaboJson[] = [...state.zaboList];

      // action payload has the fetched zabos
      const newZaboList = action.payload;
      const newZaboListLength = newZaboList.length;

      // remove shown zabos from zaboList
      zaboList = zaboList.filter(
        (zabo: ZaboJson) => zabo.state !== ZaboState.SHOWN_STATE,
      );

      // concat remaining unshonw zabos and new zabos
      zaboList = zaboList.concat(newZaboList);

      state.zaboList = zaboList;

      // recalculate leftoverLength
      state.leftoverLength += newZaboListLength;
    },
    moveToNext: state => {
      // if there are less than 2 leftover zabos, we do not dispatch
      if (state.leftoverLength < 1) {
        return;
      }

      // shift current zabo and before zabo
      const zaboList = [...state.zaboList];
      const currentZaboIdx = zaboList.findIndex(
        (zabo: ZaboJson) => zabo.state === ZaboState.CURRENT_STATE,
      );

      // if there are no current zabo, we do not dispatch
      if (currentZaboIdx === -1) {
        console.log(`There are no current zabo`);
        return;
      }

      // get before zabo index
      const beforeZaboIdx = currentZaboIdx + 1;
      const newBeforeZaboIdx = beforeZaboIdx + 1;

      // shift zabo's state
      zaboList[currentZaboIdx].state = ZaboState.SHOWN_STATE;
      zaboList[beforeZaboIdx].state = ZaboState.CURRENT_STATE;
      zaboList[newBeforeZaboIdx].state = ZaboState.BEFORE_STATE;

      state.zaboList = zaboList;
      state.leftoverLength -= 1;
    },
  },
});

export const { pushZabos, moveToNext } = zaboSlice.actions;

export const zaboReducer = zaboSlice.reducer;
