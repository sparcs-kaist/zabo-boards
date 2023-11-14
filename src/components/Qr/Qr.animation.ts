import { ANIMATION_DURATION } from "@/config";

export const qrFadeIn = {
  to: {
    opacity: 1,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};

export const qrFadeOut = {
  to: {
    opacity: 0,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};
