import { FaEnvelope } from "react-icons/fa"; // Ícones de redes sociais

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <h1 className="font-garamond font-extrabold text-3xl mb-8 text-gray-500 tracking-widest text-center">
        Nuphar
      </h1>
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Seção de Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
          <p className="mb-2">Tem alguma dúvida? Entre em contato!</p>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-accent mr-2" />
            <p>suporte@nuphar.com.br</p>
          </div>
        </div>

        {/* Links Úteis */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/sobre"
                className="hover:text-accent transition-colors duration-300"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="/tutorial"
                className="hover:text-accent transition-colors duration-300"
              >
                Tutorial
              </a>
            </li>
            <li>
              <a
                href="/plantas"
                className="hover:text-accent transition-colors duration-300"
              >
                Nossas Plantas
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className="hover:text-accent transition-colors duration-300"
              >
                Contato
              </a>
            </li>
            {/* Adicione mais links conforme necessário */}
          </ul>
        </div>

        {/* Créditos e Newsletter (Opcional) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Créditos</h3>
          <p className="text-sm mb-2">
            Desenvolvido por{" "}
            <a
              href="https://jairolopes-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-accentDark transition-colors duration-300"
            >
              Jairo Lopes
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-8 mt-8 py-4 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Nuphar. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
