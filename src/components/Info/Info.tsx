import { type InfoProps, ZaboState } from "@/types";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import eventBtn from "@/public/eventBtn.svg";
import { infoFadeIn, infoFadeOut } from "./Info.animation";
import style from "./Info.module.scss";

export const Info = (infoProps: InfoProps) => {
  const { title, description, date, state } = infoProps;

  const [springs, api] = useSpring(() => ({
    from: {
      x: 0,
      opacity: 0,
    },
  }));

  useEffect(() => {
    if (state === ZaboState.CURRENT_STATE) {
      api.start(infoFadeIn);
    } else if (state === ZaboState.SHOWN_STATE) {
      api.start(infoFadeOut);
    }
  });

  return (
    <animated.div className={style.text} style={{ ...springs }}>
      <h1>{title}</h1>
      <p className={style.description}>{description}</p>
      <div className={style.date}>
        <img src={eventBtn} alt="행사" />
        <p>{date}</p>
      </div>
    </animated.div>
  );
};