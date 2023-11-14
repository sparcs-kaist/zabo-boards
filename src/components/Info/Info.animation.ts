import { ANIMATION_DURATION } from "@/config";

export const infoFadeIn = {
  to: {
    opacity: 1,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};

export const infoFadeOut = {
  to: {
    opacity: 0,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};
