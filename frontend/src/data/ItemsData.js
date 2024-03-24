import * as React from 'react';

// Contextオブジェクトを生成する
export const ItemsData = React.createContext();

// 生成したContextオブジェクトのProviderを定義する
export const ItemsDataProvider = ({children}) => {
  const [items, setItems] = React.useState([]);

  return (
    <ItemsData.Provider value={{
      items,
      setItems
    }}>
      {children}
    </ItemsData.Provider>
  )
};