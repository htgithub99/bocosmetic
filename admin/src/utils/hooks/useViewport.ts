import { BreakpointsUp } from 'constants/enum';
import { useEffect, useState } from 'react';

export default function useViewport(innerWidth: number = BreakpointsUp.MD) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { isMobile: width < innerWidth, width };
};
