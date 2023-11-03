import { ANIMATION_DURATION } from "@/config";

export const backgroundFadeIn = {
  to: {
    opacity: 1,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};

export const backgroundFadeOut = {
  to: {
    opacity: 0,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};
