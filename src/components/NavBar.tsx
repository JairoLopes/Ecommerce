import { FaSearch, FaRegUser } from "react-icons/fa";
import { icon__wrapper } from "../style";
import CartCount from "./CartCount";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    /* Container de toda NAVBAR */
    <div className="sticky top-0 bg-white z-10">
      {/* Container que irá desaparecer em telas menores, e aparecer em maiores */}
      <div className="hidden lg:block">
        {/* Subcontainer que engloba todo conteudo da NAVBAR */}
        <div className="flex justify-between items-center p-6">
          {/* LOGO */}
          <h1 className="text-3xl md:text-4xl font-bold">Logo</h1>

          {/* Div que engloba a barra de pesquisa(INPUT)*/}
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-gray-200 border-none px-6 py-3 rounded-[30px] w-full focus:outline-2 focus:outline-gray-900"
              type="text"
              placeholder="Search Product..."
            />
            <FaSearch
              size={20}
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            />
          </div>

          {/* Div que engloba os ícones de login */}
          <div className="flex gap-4">
            {/* CONTAINER QUE ENGLOBA O ÍCONE USUARIO*/}
            <div className={`group ${icon__wrapper}`}>
              <FaRegUser className="group-hover:-translate-y-1 transition-all duration-1000" />
            </div>

            {/* CONTAINER QUE ENGLOBA O ÍCONE USUARIO*/}
            <div className={`${icon__wrapper} relative`}>
              <IoCartOutline />
              <CartCount size="w-[22px] h-[22px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
