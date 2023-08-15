export const getSlideFadeTransitionClasses = (isVisible: boolean) =>
  isVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100';
