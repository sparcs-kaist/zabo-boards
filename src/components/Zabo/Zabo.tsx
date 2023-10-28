import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { type ZaboProps, ZaboState } from "@/types";
import {
  zaboFadeOut,
  zaboMoveToBefore,
  zaboMoveToCurrent,
} from "./Zabo.animation";
import style from "./Zabo.module.scss";

export const Zabo = (zaboProps: ZaboProps) => {
  const { title, imageUrl, state } = zaboProps;
  const [springs, api] = useSpring(() => ({
    from: {
      x: 4559,
      opacity: 1,
    },
  }));

  useEffect(() => {
    // as zabo state change, we need to do some animations
    if (state === ZaboState.BEFORE_STATE) {
      api.start(zaboMoveToBefore);
    } else if (state === ZaboState.CURRENT_STATE) {
      api.start(zaboMoveToCurrent);
    } else if (state === ZaboState.SHOWN_STATE) {
      api.start(zaboFadeOut);
    }
  }, [state]);

  return (
    <animated.div className={style.zabo} style={{ ...springs }}>
      <img src={imageUrl} alt={title} />
    </animated.div>
  );
};
