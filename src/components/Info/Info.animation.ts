const AnimationDuration = import.meta.env.VITE_ANIMATION_DURATION;

export const infoFadeIn = {
  to: {
    opacity: 1,
  },
  config: {
    duration: AnimationDuration,
  },
};

export const infoFadeOut = {
  to: {
    opacity: 0,
  },
  config: {
    duration: AnimationDuration,
  },
};
