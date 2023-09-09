export const variants = (x = 1000, opacity = 0) => ({
  enter: (direction: number) => {
    return {
      x: direction > 0 ? x : -x,
      opacity,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? x : -x,
      opacity,
    };
  },
});
