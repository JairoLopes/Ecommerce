import { IoCloseSharp } from "react-icons/io5";

const MenuMobile = () => {
  const handleMenuItemClick = () => {
    // Aqui você irá adicionar a lógica para navegar para a seção correspondente
    // Ex: window.location.href = '#secao-destaques';

    // Fecha o menu após o clique
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("close-mobile-menu"));
    }
  };

  return (
    <nav className="fixed inset-0 bg-white z-50 flex flex-col  justify-center">
      {/* Botão de fechar */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("close-mobile-menu"));
            }
          }}
          className="text-gray-700 hover:text-gray-900"
        >
          <IoCloseSharp size={26} />
        </button>
      </div>

      {/* Lista de itens do menu */}
      <ul className="flex flex-col gap-8 text-center">
        {/* HERO */}
        <a href="#hero">
          <li
            className="text-lg font-bold text-gray-900 cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Destaques
          </li>
        </a>

        {/* PLANTS */}
        <a href="#plants">
          <li
            className="text-lg font-bold text-gray-900 cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Espécies
          </li>
        </a>

        {/* ABOUT */}
        <a href="#about">
          <li
            className="text-lg font-bold text-gray-900 cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Sobre nós
          </li>
        </a>

        {/* TUTORIAL */}
        <a href="#tutorial">
          <li
            className="text-lg font-bold text-gray-900 cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Tutorial
          </li>
        </a>

        {/* CONTACT */}
        <a href="#contact">
          <li
            className="text-lg font-bold text-gray-900 cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Contato
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default MenuMobile;
