import React from "react";
import { useCart } from "./CartContext";
import { IoCloseSharp } from "react-icons/io5";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, decreaseItem } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.preco * item.quantidade,
    0
  );

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-[9999] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header da barra lateral */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Carrinho</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <IoCloseSharp size={24} />
        </button>
      </div>

      {/* Conteúdo do carrinho */}
      <div className="p-4 overflow-y-auto">
        {items.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b"
              >
                <div className="flex items-center space-x-2 w-full">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={`/img/${item.nome}.png`}
                    alt={`Imagem de ${item.nome}`}
                  />
                  <div className="flex-grow">
                    <span>{item.nome}</span>
                    {item.quantidade > 1 && (
                      <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs font-semibold ml-1">
                        {item.quantidade}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  <div className="flex space-x-2 mt-1">
                    {item.quantidade > 1 && (
                      <button
                        onClick={() => decreaseItem(item.id)}
                        className="flex items-center justify-center w-6 h-6 bg-amber-500 hover:bg-amber-600 transition-all duration-300 font-semibold text-white rounded-full text-sm cursor-pointer"
                      >
                        -
                      </button>
                    )}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center justify-center w-6 h-6 bg-rose-500 hover:bg-rose-600 transition-all duration-300 font-semibold text-white rounded-full text-sm cursor-pointer"
                    >
                      x
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Total */}
      <div className="p-4 border-t font-bold">Total: R$ {total.toFixed(2)}</div>

      {/* Botão de checkout (opcional) */}
      {items.length > 0 && (
        <div className="p-4">
          <button className="flex items-center justify-center gap-2 bg-accentDark hover:bg-accent transition-all duration-700 font-semibold text-white rounded-full w-full px-4 py-2 text-[14px] cursor-pointer">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
