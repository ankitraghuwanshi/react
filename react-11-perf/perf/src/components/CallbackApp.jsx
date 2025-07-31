import React, { useState, useCallback } from 'react'

const Callback = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    //before useCallback()
    // const removeItem = (itemToRemove) => {
    //   setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
    // };

    //after useCallback()
    const removeItem = useCallback((itemToRemove) => {
        setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
    },[])
  
    return (
      <div>
        {items.map((item) => (
            <div key={item}>
                {item} 
                {/* <RemoveComponent removeItem={removeItem} /> */}
                <button onClick={() => removeItem(item)}>Remove</button>
            </div>
        ))}
      </div>
    );
};
  
export default Callback;