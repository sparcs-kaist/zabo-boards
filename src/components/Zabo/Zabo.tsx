import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import style from "./Zabo.module.scss";
import { ZaboState } from "./state";

export type ZaboJson = {
  title: string;
  description: string;
  date: string;
  qrUrl: string;
  imageUrl: string;
  // css animation starts if trigger is set to true
  state: ZaboState;
};

export const Zabo = (zaboJson: ZaboJson) => {
  const { title, description, date, qrUrl, imageUrl, state } = zaboJson;
  console.log(
    `title: ${title}, description: ${description}, date: ${date}, qrUrl: ${qrUrl}, imageUrl: ${imageUrl}, state: ${state}`,
  );

  const [infoAnimationTrigger, setInfoAnimationTrigger] = useState(
    style.no_animation,
  );
  const [zaboAnimationTrigger, setZaboAnimationTrigger] = useState(
    style.no_animation,
  );

  // if the state changes, we have to trigger the css animation
  useEffect(() => {
    // if the state changes from PENDING to BEFORE
    if (state === ZaboState.BEFORE_STATE) {
      // trigger css animation that moves zabo into ready position
      console.log(`STATE changed from PENDING to BEFORE`);
      setZaboAnimationTrigger(style.fadein_zabo_to_before);
    } else if (state === ZaboState.CURRENT_STATE) {
      console.log(`STATE changed from BEFORE to CURRENT`);
      setZaboAnimationTrigger(style.fadein_zabo_to_current);
      setInfoAnimationTrigger(style.fadein_info);
    } else if (state === ZaboState.SHOWN_STATE) {
      console.log(`STATE changed from CURRENT to SHOWN`);
      setZaboAnimationTrigger(style.fadeout_zabo_current);
      setInfoAnimationTrigger(style.fadeout_info);
    }
  }, [state]);

  return (
    <main className={style.container}>
      <section>
        <header>Zabo Boards</header>

        <div>
          <div className={`${style.info} ${infoAnimationTrigger}`}>
            <div className={style.text}>
              <h1>title</h1>
              <p>description</p>
            </div>
            <div>date</div>
          </div>
          <div className={style.qrCode}>
            <QRCode
              value={qrUrl}
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
      <div className={style.background}>
        <main />
        <div style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>

      <div className={`${style.zabo} ${zaboAnimationTrigger}`}>
        <img src={imageUrl} alt={title} />
      </div>
    </main>
  );
};
