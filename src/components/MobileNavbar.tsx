import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import CartCount from "./CartCount";

interface MobileNavbarProps {
  onToggleMenu: () => void;
  onOpenSearch: () => void; // Prop para abrir a pesquisa mobile
  onOpenCart: () => void; // Prop para abrir o carrinho mobile
}

const MobileNavbar = ({
  onToggleMenu,
  onOpenSearch,
  onOpenCart,
}: MobileNavbarProps) => {
  return (
    <div className="sticky top-0 bg-white z-10 lg:hidden p-4 flex justify-between items-center">
      {/* Ícone do Menu */}
      <button
        onClick={onToggleMenu}
        className="text-gray-700 hover:text-gray-900"
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* Logo (Centralizado) */}
      <h1 className="text-2xl font-garamond text-accentDark tracking-widest font-extrabold">
        Nuphar
      </h1>

      {/* Ícones da Direita */}
      <div className="flex gap-4">
        {/* Ícone de Pesquisa */}
        <button
          onClick={onOpenSearch}
          className="text-gray-700 hover:text-gray-900"
        >
          <FaSearch size={20} />
        </button>

        {/* Ícone do Carrinho */}
        <button
          onClick={onOpenCart}
          className="relative text-gray-700 hover:text-gray-900"
        >
          <IoCartOutline size={22} />
          <CartCount size="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
