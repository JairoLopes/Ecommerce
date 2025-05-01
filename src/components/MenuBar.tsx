const MenuBar = () => {
  return (
    <div
      id="nav"
      className="hidden lg:flex bg-gray-100 shadow-lg container mx-auto justify-center items-center py-3 rounded-lg"
    >
      <nav className="space-x-4 md:text-lg font-semibold px-3">
        {/* HERO */}
        <a
          href="#hero"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Destaques
        </a>

        {/* PLANTS */}
        <a
          href="#plants"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Espécies
        </a>

        {/* ABOUT */}
        <a
          href="#about"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Sobre nós
        </a>

        {/* TUTORIAL */}
        <a
          href="#tutorial"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Tutorial
        </a>

        {/* CONTACT */}
        <a
          href="#contact"
          className="text-gray-700 hover:text-accent transition-all"
        >
          Contato
        </a>
      </nav>
    </div>
  );
};

export default MenuBar;
