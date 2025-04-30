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
        <li
          className="text-lg font-bold text-gray-900 cursor-pointer"
          onClick={handleMenuItemClick}
        >
          Destaques
        </li>
        <li
          className="text-lg font-bold text-gray-900 cursor-pointer"
          onClick={handleMenuItemClick}
        >
          Espécies
        </li>
        <li
          className="text-lg font-bold text-gray-900 cursor-pointer"
          onClick={handleMenuItemClick}
        >
          Sobre nós
        </li>
        <li
          className="text-lg font-bold text-gray-900 cursor-pointer"
          onClick={handleMenuItemClick}
        >
          Tutorial
        </li>
        <li
          className="text-lg font-bold text-gray-900 cursor-pointer"
          onClick={handleMenuItemClick}
        >
          Contato
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
