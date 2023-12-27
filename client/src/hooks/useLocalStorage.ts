import { useState } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: null,
): any[] {
  const [jwtValue, setJwtValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('🚨', error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    const valToStore = value instanceof Function ? value(jwtValue) : value;
    setJwtValue(valToStore);
    window.localStorage.setItem(key, JSON.stringify(valToStore));
  };
  return [jwtValue, setValue];
}
