import { useState, useEffect } from 'react';

type ScrollPosition = {
  x: number;
  y: number;
};

type ScrollDirection = 'up' | 'down' | 'stationary';

/**
 * @description A hook that tracks the current scroll position and direction.
 */
export default function useScrollTracker() {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [direction, setDirection] = useState<ScrollDirection>('stationary');

  // Sets initial scroll position on mount
  useEffect(() => {
    setLastScrollTop(window.scrollY);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Determines scroll direction
      if (currentY === lastScrollTop) {
        setDirection('stationary');
      } else if (currentY > lastScrollTop) {
        setDirection('down');
      } else {
        setDirection('up');
      }

      // Stores scroll position
      setPosition({
        x: window.scrollX,
        y: currentY,
      });

      // Stores last scroll position
      setLastScrollTop(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return { position, direction };
}
