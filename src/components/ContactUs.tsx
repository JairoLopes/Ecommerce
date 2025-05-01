import { FaEnvelope } from "react-icons/fa";
import { growIn, slideUpFadeIn } from "../animations/animations";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-accentDark text-3xl md:text-4xl text-center font-bold mb-8"
        >
          Entre em Contato
        </motion.h2>

        <motion.p
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-gray-600 text-sm md:text-lg text-center mb-6"
        >
          A{" "}
          <strong className="text-accent tracking-widest font-garamond font-bold">
            Nuphar
          </strong>{" "}
          está aqui para ajudar! Se você tiver alguma dúvida ou precisar de
          assistência, não hesite em entrar em contato conosco.
        </motion.p>

        {/* Container que engloba todo o formulario e informações */}
        <motion.div
          initial={growIn.initial}
          whileInView={growIn.animate}
          transition={{ duration: 1, delay: 0.25 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
        >
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {/* Informações de Contato (Apenas Email) */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-gray-600 text-xl font-semibold mb-4">
                Informações
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-accent text-lg" />
                <p className="text-gray-500">suporte@nuphar.com.br</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold mb-2">
                  Horário de Atendimento
                </h4>
                <p className="text-gray-500 text-sm">
                  Segunda à Sexta: 9h às 18h
                </p>
                <p className="text-gray-500 text-sm">Sábados: 9h às 13h</p>
                <p className="text-gray-500 text-sm">
                  Domingos e Feriados: Fechado
                </p>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <h3 className="text-gray-600 text-xl font-semibold mb-4">
                Envie sua Mensagem
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Seu Nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Seu Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Assunto da Mensagem"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Sua Mensagem"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-accentDark hover:bg-accent transition-all duration-700 font-semibold text-white rounded-full w-full py-3 text-lg focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
