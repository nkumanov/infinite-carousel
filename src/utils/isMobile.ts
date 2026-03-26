export const isMobileLike =
  window.matchMedia("(pointer: coarse)").matches &&
  window.matchMedia("(hover: none)").matches;
