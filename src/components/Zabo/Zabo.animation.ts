import { AnimationDuration } from "@/config";

export const zaboMoveToBefore = {
  to: {
    x: 3145,
    opacity: 1,
  },
  config: {
    duration: AnimationDuration,
  },
};

export const zaboMoveToCurrent = {
  to: {
    x: 1731,
    opacity: 1,
  },
  config: {
    duration: AnimationDuration,
  },
};

export const zaboFadeOut = {
  to: {
    opacity: 0,
    x: 1731,
  },
  config: {
    duration: AnimationDuration,
  },
};
