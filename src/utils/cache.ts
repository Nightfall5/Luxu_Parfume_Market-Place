const CACHE_PREFIX = 'tokokita:';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

interface CacheItem<T> {
  value: T;
  timestamp: number;
}

export const cacheSet = <T>(key: string, value: T): void => {
  const item: CacheItem<T> = {
    value,
    timestamp: Date.now()
  };
  localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(item));
};

export const cacheGet = <T>(key: string): T | null => {
  const item = localStorage.getItem(`${CACHE_PREFIX}${key}`);
  if (!item) return null;

  const parsed = JSON.parse(item) as CacheItem<T>;
  if (Date.now() - parsed.timestamp > CACHE_DURATION) {
    localStorage.removeItem(`${CACHE_PREFIX}${key}`);
    return null;
  }

  return parsed.value;
};

export const cacheClear = (prefix?: string): void => {
  const searchPrefix = prefix ? `${CACHE_PREFIX}${prefix}` : CACHE_PREFIX;
  
  Object.keys(localStorage)
    .filter(key => key.startsWith(searchPrefix))
    .forEach(key => localStorage.removeItem(key));
};