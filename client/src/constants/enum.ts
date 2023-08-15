export enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

export enum BreakpointsUp {
  XXL = 1536,
  // for viewport big size
  DT = 1366,
  // dt: desktop
  XL = 1280,
  // for viewport less than laptop
  LG = 1024,
  // for tablet landscape and laptop small
  MD = 768,
  // for tablet portrait
  SM = 640,
  // for mobile has viewport like: iphone 7, 8, 9..
  MB = 375,
  // mb: mobile
  XS = 320, // for mobile has viewport small like iphone 5, 6,,,,,,,,,
}
