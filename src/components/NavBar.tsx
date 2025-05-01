import { FaSearch } from "react-icons/fa";
import { icon__wrapper } from "../style";
import CartCount from "./CartCount";
import { IoCartOutline } from "react-icons/io5";
import MenuBar from "./MenuBar";
import { motion } from "framer-motion";
import { slideRight } from "../animations/animations";

interface NavBarProps {
  onSearch: (term: string) => void;
  onOpenCart: () => void; // Prop para abrir o carrinho
}

const NavBar = ({ onSearch, onOpenCart }: NavBarProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    /* Container de toda NAVBAR */
    <div className="sticky top-0 bg-white z-10">
      {/* Container que irá desaparecer em telas menores, e aparecer em maiores */}
      <div className="hidden lg:block">
        {/* Subcontainer que engloba todo conteudo da NAVBAR */}
        <div className="flex justify-between items-center p-6">
          {/* LOGO */}
          <motion.a
            href="#hero"
            initial={slideRight.initial}
            whileInView={slideRight.animate}
            transition={{ duration: 1.5, delay: 0.25 }}
          >
            <h1 className="font-garamond font-bold text-accentDark tracking-widest text-3xl md:text-4xl ">
              Nuphar
            </h1>
          </motion.a>

          {/* Div que engloba a barra de pesquisa(INPUT)*/}
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-gray-200 border-none px-6 py-3 rounded-[30px] w-full focus:outline-2 focus:outline-gray-900"
              type="text"
              placeholder="Buscar Espécies..."
              onChange={handleInputChange}
            />
            <FaSearch
              size={20}
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            />
          </div>

          {/* Div que engloba os ícones */}
          <div className="flex gap-4">
            {/* CONTAINER QUE ENGLOBA O ÍCONE CARRINHO*/}
            <div
              className={`${icon__wrapper} relative cursor-pointer`}
              onClick={onOpenCart}
            >
              {" "}
              {/* Adiciona onClick */}
              <IoCartOutline />
              <CartCount size="w-[22px] h-[22px]" />
            </div>
          </div>
        </div>
      </div>

      {/* MenuBar */}
      <MenuBar />
    </div>
  );
};

export default NavBar;
