import React, { createContext, useState, useContext } from "react";

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number; // Adicionamos a propriedade quantidade
}

interface CartState {
  items: CartItem[];
  addItem: (item: { id: number; nome: string; preco: number }) => void; // Modificamos o tipo do item ao adicionar
  removeItem: (id: number) => void;
  decreaseItem: (id: number) => void; // Nova função para diminuir a quantidade
}

const CartContext = createContext<CartState>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  decreaseItem: () => {}, // Inicializamos a nova função
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: { id: number; nome: string; preco: number }) => {
    const existingItem = items.find((item) => item.id === newItem.id);

    if (existingItem) {
      setItems(
        items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...newItem, quantidade: 1 }]);
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const decreaseItem = (id: number) => {
    const existingItem = items.find((item) => item.id === id);

    if (existingItem && existingItem.quantidade > 1) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
      );
    } else {
      // Se a quantidade for 1 ou o item não existir, remove o item
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, decreaseItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
