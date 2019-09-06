import {useState, useEffect} from 'react';

export const useDarkMode = () => {  
  let [isDark, setDark] = useState(false);

  useEffect(() => {
    let bodyTag = document.querySelector(body);
    if (isDark) {
      bodyTag.classList.add("dark-mode");
    } else {
      bodyTag.classList.remove("dark-mode");
    }
  }, [isDark]);
  return [isDark, setDark];
}
