import { useCallback, useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useLazyLoad = (
  callback: () => void,
  options = { threshold: 0.1 }
) => {
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [inView, callback]);

  return ref;
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  const lastRun = useRef(Date.now());
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      } else {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
          callback(...args);
          lastRun.current = Date.now();
        }, delay);
      }
    },
    [callback, delay]
  );
};