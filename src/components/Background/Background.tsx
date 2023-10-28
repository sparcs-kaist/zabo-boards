import { type BackgroundProps, ZaboState } from "@/types";
import { animated, useSpring, easings } from "@react-spring/web";
import { useEffect } from "react";
import { backgroundFadeIn, backgroundFadeOut } from "./Background.animation";
import style from "./Background.module.scss";

export const Background = (backgroundProps: BackgroundProps) => {
  const { imageUrl, state } = backgroundProps;

  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: {
      easings: easings.easeInOutSine,
    },
  }));

  useEffect(() => {
    if (state === ZaboState.CURRENT_STATE) {
      api.start(backgroundFadeIn);
    } else if (state === ZaboState.SHOWN_STATE) {
      api.start(backgroundFadeOut);
    }
  });

  return (
    <animated.div className={style.background} style={{ ...springs }}>
      <main />
      <div style={{ backgroundImage: `url(${imageUrl})` }} />
    </animated.div>
  );
};
