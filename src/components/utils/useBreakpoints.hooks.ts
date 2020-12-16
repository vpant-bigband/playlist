import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'debounce';
import theme from '../../theme/theme.constant';

const BREAKPOINTS = theme.BREAKPOINTS;

const isBrowser = () => typeof window !== 'undefined';

const getSize = (breakpoints: number[]) => {
  const innerWidth = isBrowser() ? window.innerWidth : 0;

  return {
    isMobile: innerWidth < breakpoints[1],
    isPad1: innerWidth >= breakpoints[1] && innerWidth < breakpoints[2],
    isPad2: innerWidth >= breakpoints[2] && innerWidth < breakpoints[3],
    isDesktop: innerWidth >= breakpoints[3],
  };
};

export default function useBreakpoints(breakpoints: number[] = BREAKPOINTS) {
  const [device, setDevice] = useState(getSize(breakpoints));

  const handleResize = useCallback(() => {
    setDevice(getSize(breakpoints));
  }, [breakpoints]);

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 200));
    return () => {
      window.removeEventListener('resize', debounce(handleResize, 200));
    };
  }, [handleResize]);

  return device;
}
