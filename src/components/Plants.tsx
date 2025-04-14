import { plantasMarinhasData } from "../data/products";

const Plants = () => {
  return (
    <div className="pt-16">
      {/* Div que engloba todo o PLANTS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {plantasMarinhasData.map((item) => (
          <PlantCard
            key={item.id}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            beneficios={item.beneficios}
            nivelCuidado={item.nivelCuidado}
            requerimentoLuminosidade={item.requerimentoLuminosidade}
            requerimentoFluxo={item.requerimentoFluxo}
          />
        ))}
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
  requerimentoFluxo: string; // Adicionado
}

function PlantCard({
  nome,
  preco,
  descricao,
  beneficios,
  nivelCuidado,
  requerimentoLuminosidade,
  requerimentoFluxo,
}: PlantCardProps) {
  /* Objeto que irá definir a estilização baseado no nivel facil, moderado e dificil */
  const lvl = {
    Baixo: "text-accent",
    Moderado: "text-amber-500",
    Alto: "text-rose-500",
  };

  return (
    <div className="border border-gray-200 hover:border-gray-400 rounded-lg shadow-2xl">
      {/* CONTAINER QUE ENGLOBA O CARD */}
      <div className="flex justify-between items-center p-6">
        {/* SUBCONTAINER QUE ENGLOBA O RESTANTE DO CARD */}
        <div className="p-2 bg-orange-500 space-y-4 w-full">
          <h3 className="font-semibold text-lg sm:text-xl text-center">
            {nome}
          </h3>

          {/* CONTAINER QUE ENGLOBA O PREÇO E A IMAGEM*/}
          <div className="p-2 bg-gray-600 flex gap-2 justify-between">
            {/* Container dos preços */}
            <div className="bg-sky-500">
              <h2 className="text-rose-500 text-4xl font-semibold">
                R$ {preco}
              </h2>
            </div>

            {/* imagem */}
            <img
              className="w-[100px] h-[100px] rounded-full object-cover"
              src={`/img/${nome}.png`}
              alt="Imagem ilustrativa"
            />
          </div>

          {/* CONTAINER DE DESCRIÇÃO */}
          <div className="bg-sky-600">
            <p>{descricao}</p>
          </div>

          {/* Container que engloba o nivel de cuidado, Luminosidade e Fluxo */}
          <div className="bg-emerald-400 flex flex-col">
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
          <div className="bg-rose-500 flex flex-wrap justify-start gap-x-3">
            {beneficios.map((i, index) => (
              <span className="text-sky-400 text-sm underline" key={index}>
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
