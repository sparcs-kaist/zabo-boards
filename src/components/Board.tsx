import React, { useState } from "react";
import QRCode from "react-qr-code";
import style from "./Board.module.scss";

export const Board: React.FC = () => {
  const [currentZabo, setCurrentZabo] = useState({
    title: "자보",
    description: "설명",
    date: "date",
    qrUrl: "https://zabo.sparcs.org/s/86f104",
    imageUrl:
      "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471",
  });

  const [nextZabo, setNextZabo] = useState({
    title: "다음자보자보",
    description: "다음자보설명",
    date: "다음date",
    qrUrl: "https://zabo.sparcs.org/s/86f104",
    imageUrl:
      "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421694355488272",
  });

  setTimeout(() => {
    setCurrentZabo(nextZabo);
    setNextZabo(currentZabo);
  }, 3000);

  return (
    <main className={style.container}>
      <section>
        <header>Zabo</header>

        <div>
          <div className={style.info}>
            <div className={style.text}>
              <h1>{currentZabo.title}</h1>
              <p>{currentZabo.description}</p>
            </div>
            <div>{currentZabo.date}</div>
          </div>

          <div className={style.qrCode}>
            <QRCode
              value={currentZabo.qrUrl}
              size={300}
              bgColor="transparent"
              fgColor="#D2D3D7"
              level="H"
            />
            <p>
              Zabo에서
              <br />
              상세 정보 확인하기
            </p>
          </div>
        </div>
      </section>
      {/* <img src={imageSrc} alt="board" /> */}
      <div className={style.background}>
        <main />
        <div style={{ backgroundImage: `url(${currentZabo.imageUrl})` }} />
      </div>

      <div className={`${style.zabo} ${style.current}`}>
        <img src={currentZabo.imageUrl} alt={currentZabo.title} />
      </div>
      <div className={`${style.zabo} ${style.next}`}>
        <img src={nextZabo.imageUrl} alt={nextZabo.title} />
      </div>
    </main>
  );
};
