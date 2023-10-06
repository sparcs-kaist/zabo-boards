import React from "react";
import style from "./Board.module.scss";

const imageSrc =
  "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-138911661625106654";

export const Board: React.FC = () => (
  <main className={style.container}>
    <section>
      <header>Zabo</header>
      <div className={style.info}>
        <div className={style.text}>
          <h1>자보</h1>
          <p>설명</p>
        </div>
        <div>date</div>
      </div>
      <div className={style.qrCode}>QR</div>
    </section>
    {/* <img src={imageSrc} alt="board" /> */}
    <div className={style.background}>
      <main />
      <div style={{ backgroundImage: `url(${imageSrc})` }} />
    </div>
  </main>
);
