import { type QrProps, ZaboState } from "@/types";
import QRCode from "react-qr-code";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import { qrFadeIn, qrFadeOut } from "./Qr.animation";
import style from "./Qr.module.scss";

export const Qr = (qrProps: QrProps) => {
  const { qrUrl, state } = qrProps;

  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
  }));

  useEffect(() => {
    if (state === ZaboState.CURRENT_STATE) {
      api.start(qrFadeIn);
    } else if (state === ZaboState.SHOWN_STATE) {
      api.start(qrFadeOut);
    }
  }, [state]);

  return (
    <animated.div className={style.qr} style={{ ...springs }}>
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
    </animated.div>
  );
};
