const AnimationDuration = import.meta.env.VITE_ANIMATION_DURATION;

export const qrFadeIn = {
  to: {
    opacity: 1,
  },
  config: {
    duration: AnimationDuration,
  },
};

export const qrFadeOut = {
  to: {
    opacity: 0,
  },
  config: {
    duration: AnimationDuration,
  },
};
