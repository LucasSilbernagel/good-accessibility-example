import { useEffect } from 'react';

type ResizeCallback = () => void;

/**
 * @description A hook that adds a resize event listener to the window object.
 */
export default function useResizeHandler(onResize: ResizeCallback): void {
  useEffect(() => {
    const handleResize = () => {
      onResize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);
}
