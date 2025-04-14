import { FaSearch, FaRegUser } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import CartCount from "./CartCount";
import { IoCartOutline } from "react-icons/io5";

const MobileNavbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      {/* Sub-Container que engloba todo o navbar mobile */}
      <div className="p-6 lg:hidden">
        {/* SubSub-container que engloba todo o navbar mobile */}
        <div className="flex justify-between items-center">
          {/* Container que engloba menu hamburguer com icone de pesquisa */}
          <div className="flex items-center gap-6">
            <RiMenuLine size={30} />
            <FaSearch size={20} />
          </div>

          <h1 className="text-3xl font-bold">Logo</h1>

          {/* Container onde engloba o icone de usuário, e tbm engloba o container do icone de carrinho */}
          <div className="flex gap-4 text-[30px]">
            <FaRegUser />

            {/* Container onde engloba apenas o icone de carrinho junto com o componente que conta itens do carrinho */}
            <div className="relative cursor-pointer">
              <IoCartOutline size={35} />
              <CartCount size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
