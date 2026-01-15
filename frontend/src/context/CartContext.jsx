import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart =  () => useContext(CartContext)

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart)

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };
 const updateMember = (id, updatedData) => {
    setCart((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updatedData } : m))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart ,updateMember}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
