export const scaleAnimation = 1.2

export const verticalFadeInVariant = {
  hidden: {
    opacity: 0,
    translateY: -20
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    translateY: 20,
    opacity: 0
  }
};

export const verticalFadeInVariantItem = {
  hidden: {
    opacity: 0,
    translateY: -20
  },
  visible: {
    opacity: 1,
    translateY: 0
  },
  exit: {
    translateY: -5,
    opacity: 0
  }
};

