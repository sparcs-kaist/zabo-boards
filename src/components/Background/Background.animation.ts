const AnimationDuration = import.meta.env.VITE_ANIMATION_DURATION;

export const backgroundFadeIn = {
  to: {
    opacity: 1,
  },
  config: {
    duration: AnimationDuration,
  },
};

export const backgroundFadeOut = {
  to: {
    opacity: 0,
  },
  config: {
    duration: AnimationDuration,
  },
};
