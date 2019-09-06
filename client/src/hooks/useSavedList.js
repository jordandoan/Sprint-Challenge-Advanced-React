import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useSavedList = () => {
  let [list, setList] = useLocalStorage("list",[]);
  
  const handleSave = (item) => {
    let found = list.findIndex(player => player.id == item.id);
    if (found < 0) {
      setList([...list, item]);
    }
    console.log(list);
  }

  return [list, handleSave];
}