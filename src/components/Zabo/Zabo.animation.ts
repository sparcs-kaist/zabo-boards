import { ANIMATION_DURATION } from "@/config";

export const zaboMoveToBefore = {
  to: {
    x: 3145,
    opacity: 0.5,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};

export const zaboMoveToCurrent = {
  to: {
    x: 1731,
    opacity: 1,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};

export const zaboFadeOut = {
  to: {
    opacity: 0,
    x: 1731,
  },
  config: {
    duration: ANIMATION_DURATION,
  },
};
