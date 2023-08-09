import { useState, useEffect } from 'react';

type ScrollPosition = {
  scrollX: number;
  scrollY: number;
};

/**
 * @description A simple hook that returns the current scroll position of the window.
 * @example
 * ```tsx
 * const { scrollX, scrollY } = useScrollPosition();
 * ```
 */
export default function ScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}
