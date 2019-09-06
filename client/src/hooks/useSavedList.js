import { useState, useEffect } from 'react';

export const useSavedList = (item) => {
  let [list, setList] = useState([]);
  
  const handleSave = () => {
    let found = list.findIndex(player => player.id == item.id);
    if (!found) {
      setList([...list, item]);
    }
  }

  return [list, handleSave];
}