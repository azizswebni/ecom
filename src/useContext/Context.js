import React, { createContext, useContext, useState } from "react";

const ItemsContext = createContext();
export function useItems() {
  return useContext(ItemsContext);
}
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const AddItems = (title, image, price) => {
    const find = items.findIndex((x) => x.image === image);
    let newnum = numItems;
    newnum += 1;
    setNumItems(newnum);
    if (find !== -1) {
      items[find].number += 1;
      console.log(items[find]);
    } else {
      const Newitems = items;
      Newitems.push({ title, image, price, number: 1 });
      setItems(Newitems);
      console.log(items);
    }
  };
  const removeItems = (image) => {
    setItems(items.filter((item) => item.image !== image));
    console.log(items);
  };
  return (
    <ItemsContext.Provider value={{ items, AddItems, removeItems, numItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
