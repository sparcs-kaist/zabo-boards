import React, { useState } from "react";
import { Zabo, ZaboState } from "@/components/Zabo";
import style from "./Board.module.scss";

export const Board = () => {
  // which zabo should be shown in the zaboQueue
  // const [showIdx, setShowIdx] = useState(0);

  const [testState, setTestState] = useState(ZaboState.PENDING_STATE);

  // change testState after 2 seconds
  setTimeout(() => {
    setTestState(ZaboState.BEFORE_STATE);
  }, 2000);

  return (
    <main className={style.board}>
      <Zabo
        title="zabo"
        description="zabo-description"
        date="2023.10.11"
        qrUrl="https://zabo.sparcs.org/s/86f104"
        imageUrl="https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421694355488272"
        state={testState}
      />
    </main>
  );
};
