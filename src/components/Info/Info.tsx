import { type InfoProps, ZaboState } from "@/types";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import eventBtn from "@/public/eventBtn.svg";
import registrationBtn from "@/public/registrationBtn.svg";
import { infoFadeIn, infoFadeOut } from "./Info.animation";
import style from "./Info.module.scss";

export const Info = (infoProps: InfoProps) => {
  const { title, owner, scheduleDate, scheduleType, state } = infoProps;

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
      {owner !== null ? <p className={style.owner}>by {owner}</p> : null}
      {scheduleType !== null ? (
        <div className={style.date}>
          <img
            src={scheduleType === "행사" ? eventBtn : registrationBtn}
            alt={scheduleType}
          />
          <p>{scheduleDate}</p>
        </div>
      ) : null}
    </animated.div>
  );
};
