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
            img={item.imagem}
            tipoAgua={item.tipoAgua}
            beneficios={item.beneficios}
            nivelCuidado={item.nivelCuidado}
            requerimentoLuminosidade={item.requerimentoLuminosidade}
            requerimentoFluxo={item.requerimentoFluxo}
            notas={item.notas}
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
  tipoAgua: string;
  img: string;
  beneficios: string[];
  nivelCuidado: string;
  requerimentoLuminosidade: string;
  requerimentoFluxo: string; // Adicionado
  notas: string; // Adicionado
}

function PlantCard({
  nome,
  preco,
  descricao,
  tipoAgua,
  img,
  beneficios,
  nivelCuidado,
  requerimentoLuminosidade,
  requerimentoFluxo,
  notas,
}: PlantCardProps) {
  return (
    <div className="border border-gray-200 hover:border-gray-400 rounded-lg shadow-2xl">
      {/* CONTAINER QUE ENGLOBA O CARD */}
      <div className="flex justify-between items-center p-6">
        {/* SUBCONTAINER QUE ENGLOBA O RESTANTE DO CARD */}
        <div className="p-2 bg-orange-500 space-y-4 w-full">
          <h3 className="font-semibold text-lg sm:text-xl text-center">
            {nome}
          </h3>

          {/* CONTAINER QUE ENGLOBA O ARRAY DE BENEFICIOS E A IMAGEM*/}
          <div className="p-2 bg-gray-600 flex gap-2 justify-between">
            {/* Container que engloba os beneficios que é um array */}
            <div className="flex flex-wrap justify-start gap-0.5">
              {beneficios.map((i, index) => (
                <span className="text-sky-400 text-sm underline" key={index}>
                  {i}
                </span>
              ))}
            </div>

            {/* imagem */}
            <img
              className="w-[100px] h-[100px] rounded-full object-cover"
              src={`/img/${nome}.png`}
              alt="Imagem ilustrativa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plants;
