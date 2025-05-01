import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";
import MenuMobile from "./components/MenuMobile";
import CartSidebar from "./components/CartSidebar";
import Hero from "./components/Hero";
import Plants from "./components/Plants";
import { IoCloseSharp } from "react-icons/io5";
import AboutUs from "./components/AboutUs";
import Tutorial from "./components/Tutorial";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  // Estado para controlar a visibilidade do menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Estado para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para controlar a visibilidade da barra lateral do carrinho
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Estado para controlar a visibilidade da barra de pesquisa mobile
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // Função para alternar a visibilidade do menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para alternar a visibilidade da barra lateral do carrinho
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Função para alternar a visibilidade da barra de pesquisa mobile
  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  // Hook useEffect para lidar com o evento de fechamento do menu mobile
  useEffect(() => {
    // Função para definir o estado do menu mobile como fechado
    const handleCloseMenu = () => {
      setIsMobileMenuOpen(false);
    };

    // Adiciona um listener para o evento customizado 'close-mobile-menu'
    window.addEventListener("close-mobile-menu", handleCloseMenu);

    // Função de limpeza para remover o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("close-mobile-menu", handleCloseMenu);
    };
  }, []); // O array de dependências vazio garante que o efeito roda apenas uma vez na montagem e desmontagem

  // Função para atualizar o estado searchTerm com o termo de busca
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main className="relative">
      {/* Componente da barra de navegação principal (desktop) */}
      <NavBar onSearch={handleSearch} onOpenCart={toggleCart} />
      {/* Componente da barra de navegação mobile */}
      {/* Passa as funções para controlar a visibilidade do menu e da pesquisa mobile, e para abrir o carrinho */}
      <MobileNavbar
        onToggleMenu={toggleMobileMenu}
        onOpenSearch={toggleMobileSearch}
        onOpenCart={toggleCart}
      />
      {/* Renderiza o menu mobile condicionalmente quando isMobileMenuOpen é true */}
      {isMobileMenuOpen && <MenuMobile />}

      {/* Componente da barra lateral do carrinho */}
      {/* Controla a visibilidade com isCartOpen e passa a função para fechar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />

      {/* Barra de pesquisa mobile */}
      {/* Renderiza condicionalmente quando isMobileSearchOpen é true */}
      {isMobileSearchOpen && (
        <div className="fixed top-0 left-0 w-full bg-white z-[9998] p-4 shadow-md">
          <div className="relative">
            {/* Input de busca mobile */}
            <input
              className="bg-gray-200 border-none px-6 py-3 rounded-[30px] w-full focus:outline-2 focus:outline-gray-900"
              type="text"
              placeholder="Buscar Espécies..."
              onChange={(e) => handleSearch(e.target.value)} // Usa a mesma função de busca da versão desktop
            />
            {/* Botão para fechar a barra de pesquisa mobile */}
            <button
              onClick={toggleMobileSearch}
              className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 hover:text-gray-700"
            >
              <IoCloseSharp size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Componente do Hero (banner principal) */}
      <Hero />

      {/* Componente da lista de plantas, filtrada pelo termo de busca */}
      <Plants searchTerm={searchTerm} />

      {/* Componente "Sobre Nós" */}
      <AboutUs />

      {/* Componente do Tutorial (Guia Rápido das Nossas Espécies) */}
      <Tutorial />

      {/* Componente de Contato */}
      <ContactUs />

      {/* Componente do Rodapé */}
      <Footer />
    </main>
  );
}

export default App;
