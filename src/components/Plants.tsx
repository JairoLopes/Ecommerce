import { useState } from "react";
import { plantasMarinhasData } from "../data/products";
import { useCart } from "./CartContext";

interface PlantsProps {
  searchTerm: string;
}

const Plants = ({ searchTerm }: PlantsProps) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 6;
  const { addItem } = useCart(); // Obtém a função addItem do contexto

  const produtosFiltrados = plantasMarinhasData.filter((planta) =>
    planta.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const numeroTotalDePaginas = Math.ceil(
    produtosFiltrados.length / produtosPorPagina
  );

  const produtosExibidos = produtosFiltrados.slice(
    (paginaAtual - 1) * produtosPorPagina,
    paginaAtual * produtosPorPagina
  );

  const irParaPaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const irParaProximaPagina = () => {
    if (paginaAtual < numeroTotalDePaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const handleAddToCart = (item: (typeof plantasMarinhasData)[0]) => {
    addItem({ id: item.id, nome: item.nome, preco: item.preco });
    // REMOVIDO: alert(`${item.nome} adicionado ao carrinho!`); // Feedback visual
  };

  return (
    <div className="pt-16 md:pt-5 pb-12 max-md:px-5 md:px-10">
      {/* TÍTULO */}
      <h2 className="text-gray-700 text-4xl text-center font-bold mb-12">
        Nossas Espécies
      </h2>

      {/* Div que engloba os produtos da página atual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {produtosExibidos.map((item) => (
          <PlantCard
            key={item.id}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            beneficios={item.beneficios}
            nivelCuidado={item.nivelCuidado}
            requerimentoLuminosidade={item.requerimentoLuminosidade}
            requerimentoFluxo={item.requerimentoFluxo}
            onAddToCart={() => handleAddToCart(item)} // Passa a função para o PlantCard
          />
        ))}
      </div>

      {/* Div para os botões de navegação */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {/* Botão para ir para a página anterior. */}
        <button
          onClick={irParaPaginaAnterior}
          disabled={paginaAtual === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        {/* Exibe a página atual e o total de páginas. */}
        <span className="text-gray-700">
          Página {paginaAtual} de {numeroTotalDePaginas}
        </span>
        {/* Botão para ir para a próxima página. */}
        <button
          onClick={irParaProximaPagina}
          disabled={paginaAtual === numeroTotalDePaginas}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

interface PlantCardProps {
  nome: string;
  preco: number;
  descricao: string;
  beneficios: string[];
  nivelCuidado: string;
  requerimentoLuminosidade: string;
  requerimentoFluxo: string;
  onAddToCart: () => void; // Nova prop para a função de adicionar ao carrinho
}

function PlantCard({
  nome,
  preco,
  descricao,
  beneficios,
  nivelCuidado,
  requerimentoLuminosidade,
  requerimentoFluxo,
  onAddToCart,
}: PlantCardProps) {
  const lvl = {
    Baixo: "text-accent",
    Moderado: "text-amber-500",
    Alto: "text-rose-500",
  };
  const promocao = ["Halymenia", "Codium", "Caulerpa"];

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-50 border hover:-translate-y-1 border-gray-300 rounded-lg shadow-2xl transition-all duration-700">
      {/* CONTAINER QUE ENGLOBA O CARD */}
      <div className="flex justify-between items-center p-3">
        {/* SUBCONTAINER QUE ENGLOBA O RESTANTE DO CARD */}
        <div className="space-y-4 w-full">
          <h3 className="font-semibold text-lg sm:text-2xl lg:text-3xl text-accentDark text-center">
            {nome}
          </h3>
          {/* CONTAINER QUE ENGLOBA O PREÇO E A IMAGEM*/}
          <div className="flex gap-2 justify-between px-4">
            {/* Container dos preços e botão reservar */}
            <div className="flex flex-col justify-center items-center">
              <h2
                className={`${
                  promocao.includes(nome) ? "text-accent" : "text-rose-500 "
                } text-4xl font-semibold`}
              >
                R$ {preco}
              </h2>

              {/* NOVO: Container para o botão Reservar */}
              <div className="mt-4">
                <button
                  onClick={onAddToCart} // Chama a função ao clicar no botão
                  className="flex items-center gap-4 bg-accentDark hover:bg-accent transition-all duration-700 font-semibold text-white rounded-full w-fit px-4 py-2 text-[14px] cursor-pointer"
                >
                  Reservar
                </button>
              </div>
            </div>
            {/* imagem */}
            <img
              className="w-[100px] h-[100px] rounded-full object-cover"
              src={`/img/${nome}.png`}
              alt="Imagem ilustrativa"
            />
          </div>
          {/* CONTAINER DE DESCRIÇÃO */}
          <div className="border-b-1 border-gray-300 pb-3">
            <p>{descricao}</p>
          </div>
          {/* Container que engloba o nivel de cuidado, Luminosidade e Fluxo */}
          <div className="flex flex-col border-b-1 border-gray-300 pb-3">
            {/* Span do nivel de cuidado */}
            <span>
              Cuidado:{" "}
              <span
                className={`${lvl[nivelCuidado as keyof typeof lvl]} font-bold`}
              >
                {nivelCuidado}
              </span>
            </span>
            {/* Span de nivel de luminosidade */}
            <span>
              Luminosidade:{" "}
              <span
                className={`${
                  lvl[requerimentoLuminosidade as keyof typeof lvl]
                } font-bold`}
              >
                {requerimentoLuminosidade}
              </span>
            </span>
            {/* Span de nivel de Fluxo */}
            <span>
              Fluxo:{" "}
              <span
                className={`${
                  lvl[requerimentoFluxo as keyof typeof lvl]
                } font-bold`}
              >
                {requerimentoFluxo}
              </span>
            </span>
          </div>
          {/* Container que engloba os beneficios que é um array */}
          <div className="flex flex-wrap justify-start gap-x-3">
            {beneficios.map((i, index) => (
              <span className="text-sky-600 text-sm underline" key={index}>
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plants;
