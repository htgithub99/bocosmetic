import { useEffect, useState } from 'react';

export default function useViewport(innerWidth: number = 1024) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { isMobile: width < innerWidth, width };
};
