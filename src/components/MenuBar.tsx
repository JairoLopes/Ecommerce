const MenuBar = () => {
  return (
    <div
      id="nav"
      className="hidden lg:flex bg-gray-100 shadow-lg container mx-auto justify-center items-center py-3 rounded-lg"
    >
      <nav className="space-x-4 md:text-lg font-semibold px-3">
        <a
          href="#hero"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Destaques
        </a>
        <a
          href="#plants"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Espécies
        </a>
        <a href="#" className="text-gray-700 hover:text-accent transition-all">
          Sobre nós
        </a>
        <a href="#" className="text-gray-700 hover:text-accent transition-all">
          Tutorial
        </a>
        <a href="#" className="text-gray-700 hover:text-accent transition-all">
          Contato
        </a>
      </nav>
    </div>
  );
};

export default MenuBar;
