import React from "react";
import { useCart } from "./CartContext";

interface CartCountProps {
  size?: string;
}

const CartCount: React.FC<CartCountProps> = ({
  size = "w-[20px] h-[20px]",
}) => {
  const { items } = useCart(); // Use o hook para acessar o estado do carrinho

  return (
    <div
      className={`absolute -top-2 -right-2 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-bold ${size}`}
    >
      {items.length} {/* Exibe o número de itens no carrinho */}
    </div>
  );
};

export default CartCount;
