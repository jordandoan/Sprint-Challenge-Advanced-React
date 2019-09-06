import { useState, useEffect } from 'react';

export const useSavedList = () => {
  let [list, setList] = useState([]);
  
  const handleSave = (item) => {
    let found = list.findIndex(player => player.id == item.id);
    if (found < 0) {
      setList([...list, item]);
    }
    console.log(list);
  }

  return [list, handleSave];
}