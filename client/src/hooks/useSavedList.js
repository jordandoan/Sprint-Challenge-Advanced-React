import { useLocalStorage } from './useLocalStorage';

export const useSavedList = () => {
  let [list, setList] = useLocalStorage("list",[]);
  
  const handleSave = (item) => {
    let found = list.findIndex(player => player.id === item.id);
    if (found < 0) {
      setList([...list, item]);
    }
  }

  return [list, handleSave];
}