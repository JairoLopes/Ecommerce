import React from "react";

// Define uma interface para os dados de cada item do Hero
interface HeroItem {
  path: string;
  topTitle?: string;
  bigTitle: string;
  descTitle?: string;
  price: number;
  isMain: boolean; // Indica se este item é o principal
}

const Hero = () => {
  // Array contendo os dados para cada item do Hero, incluindo a imagem e o conteúdo
  const heroItems: HeroItem[] = [
    {
      path: "halymenia.jpeg",
      topTitle: "Em destaque",
      bigTitle: "Halymenia",
      descTitle: "Por apenas",
      price: 39.99,
      isMain: true, // O primeiro item é a imagem principal
    },
    {
      path: "caluerpa.jpeg", // Você pode usar um caminho de imagem diferente aqui
      bigTitle: "Caluerpa",
      descTitle: "Sarting At",
      price: 79.99,
      isMain: false,
    },
    {
      path: "codium.jpeg", // Você pode usar um caminho de imagem diferente aqui
      bigTitle: "Codium",
      descTitle: "Sarting At",
      price: 79.99,
      isMain: false,
    },
    // Você pode adicionar mais itens aqui, cada um com sua própria imagem e conteúdo
  ];

  return (
    <div className="h-screen mx-auto pt-[5%] pb-20 px-10">
      {/* Div que engloba todo o HERO */}
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-8">
        {/* Mapeia o array de heroItems para renderizar cada item */}
        {heroItems.map((item, index) => {
          // Define o estilo de background para cada item dinamicamente
          const bg_style = `bg-[linear-gradient(to_right,rgb(5,5,20,1),rgb(5,5,20,0.2)),url('/img/Banner_Hero/${item.path}')] bg-no-repeat bg-center bg-cover`;

          /* SEGUNDO RETURN DENTRO DO RETURN PRINCIPAL, ESSE APENAS RENDERIZA OS PRODUTOS */
          return (
            <div
              key={index} // Adiciona uma key única para cada item renderizado em um loop
              className={`${
                item.isMain
                  ? "lg:col-span-2 lg:row-start-1 lg:row-end-[-1]" // Estilos específicos para a imagem principal
                  : ""
              } ${bg_style} shadow-2xl rounded`}
            >
              {/* Renderiza o componente TitleAndPrice para cada item */}
              <TitleAndPrice
                main={item.isMain} // Passa a propriedade "isMain" para o componente TitleAndPrice
                topTitle={item.topTitle}
                bigTitle={item.bigTitle}
                descTitle={item.descTitle}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* COMPONENTE QUE INSERE TITULO E PREÇO NO CONTAINER DAS IMAGENS */
interface TitleAndPriceProps {
  topTitle?: string;
  bigTitle: string;
  descTitle?: string;
  price: number;
  main: boolean;
}

function TitleAndPrice({
  topTitle,
  bigTitle,
  descTitle,
  price,
  main = false,
}: TitleAndPriceProps) {
  return (
    <div className="flex flex-col justify-center py-12 lg:py-8 pl-0 max-w-[60%] h-full ml-8 sm:ml-4 sm:space-y-3]">
      {/* TÍTULO SUPERIOR */}
      <p
        className={`${
          main ? "text-2xl" : "text-lg"
        } text-gray-200 hidden sm:block`}
      >
        {topTitle}
      </p>

      {/* TÍTULO */}
      <h2
        className={`${
          main ? "md:text-5xl" : "md:text-3xl lg:text-2xl"
        } text-lg text-gray-200 ssm:text-2xl sm:text-4xl font-bold text-wrap`}
      >
        {bigTitle}
      </h2>

      {/* DESCRIÇÃO */}
      <p
        className={`${
          main ? "text-xl" : "text-lg"
        } text-sky-400 font-bold pt-4 sm:pt-6`}
      >
        {descTitle}
      </p>

      {/* Preço FORMATADO */}
      <div
        className={`${
          main
            ? "p-1 ssm:pb-4 sm:pb-8 sm:text-4xl"
            : "ssm:pb-1 sm:text-4xl lg:text-2xl mt-2 mb-6 lg:my-3"
        } text-lg font-medium text-rose-600`}
      >
        R${Number.parseFloat(price.toFixed(2)).toLocaleString("pt-BR")}
      </div>

      <button className="flex items-center gap-4 bg-accentDark hover:bg-accent transition-all duration-700 font-semibold text-white rounded-full w-fit px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
        Shop Now
      </button>
    </div>
  );
}

export default Hero;
