export const calculateWidthTable = (width: number, isViewport1023: boolean) =>
  isViewport1023 ? width - 30 : width - (60 + 250);
