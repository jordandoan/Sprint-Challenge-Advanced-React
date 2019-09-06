import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  let [isDark, setDark] = useLocalStorage();
  const handleDark = () => {
    setDark(!isDark);
  }
  useEffect(() => {
    let bodyTag = document.querySelector("body");
    if (isDark) {
      bodyTag.classList.add("dark-mode");
    } else {
      bodyTag.classList.remove("dark-mode");
    }
  }, [isDark]);
  return [handleDark];
}
