import { useCart } from "./CartContext";

interface HeroItem {
  path: string;
  topTitle?: string;
  bigTitle: string;
  descTitle?: string;
  price: number;
  isMain: boolean;
  id: number; // Adicione um ID único para cada item do Hero
}

const Hero = () => {
  const { addItem } = useCart(); // Obtém a função addItem do contexto

  const heroItems: HeroItem[] = [
    {
      id: 100, // Adicione um ID único
      path: "halymenia.jpeg",
      topTitle: "Em destaque",
      bigTitle: "Halymenia",
      descTitle: "Por apenas",
      price: 40.0,
      isMain: true,
    },
    {
      id: 101, // Adicione um ID único
      path: "caulerpa.jpeg",
      bigTitle: "Caulerpa",
      descTitle: "Por apenas",
      price: 42.0,
      isMain: false,
    },
    {
      id: 102, // Adicione um ID único
      path: "codium.jpeg",
      bigTitle: "Codium",
      descTitle: "Por apenas",
      price: 50.0,
      isMain: false,
    },
  ];

  const handleAddToCart = (item: HeroItem) => {
    addItem({ id: item.id, nome: item.bigTitle, preco: item.price });
  };

  /*   const bg_style2 = `bg-[linear-gradient(to_right,rgb(5,5,20,1),rgb(5,5,20,0.2)),url('/img/Banner_Hero/halymenia.jpeg')] bg-no-repeat bg-center bg-cover`;
  const bg_style3 = `bg-[linear-gradient(to_right,rgb(5,5,20,1),rgb(5,5,20,0.2)),url('/img/Banner_Hero/caulerpa.jpeg')] bg-no-repeat bg-center bg-cover`;
  const bg_style4 = `bg-[linear-gradient(to_right,rgb(5,5,20,1),rgb(5,5,20,0.2)),url('/img/Banner_Hero/codium.jpeg')] bg-no-repeat bg-center bg-cover`; */

  return (
    <div
      id="hero"
      className="h-screen mx-auto pt-[6%] pb-20 px-10 max-sm:mb-[45%] min-sm:mb-[55%] lg:mb-0"
    >
      {/* Div que engloba todo o HERO */}
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-8">
        {heroItems.map((item, index) => {
          const bg_style = `bg-[linear-gradient(to_right,rgb(5,5,20,1),rgb(5,5,20,0.2)),url('/img/Banner_Hero/${item.path}')] bg-no-repeat bg-center bg-cover`;

          return (
            <div
              key={index}
              className={`${
                item.isMain
                  ? "lg:col-span-2 lg:row-start-1 lg:row-end-[-1]"
                  : ""
              } ${bg_style} shadow-2xl rounded`}
            >
              <TitleAndPrice
                main={item.isMain}
                topTitle={item.topTitle}
                bigTitle={item.bigTitle}
                descTitle={item.descTitle}
                price={item.price}
                onAddToCart={() => handleAddToCart(item)} // Passa a função para o TitleAndPrice
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TitleAndPriceProps {
  topTitle?: string;
  bigTitle: string;
  descTitle?: string;
  price: number;
  main: boolean;
  onAddToCart: () => void; // Nova prop para a função de adicionar ao carrinho
}

function TitleAndPrice({
  topTitle,
  bigTitle,
  descTitle,
  price,
  main = false,
  onAddToCart,
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

      <button
        onClick={onAddToCart} // Chama a função ao clicar no botão
        className="flex items-center gap-4 bg-accentDark hover:bg-accent transition-all duration-700 font-semibold text-white rounded-full w-fit px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer"
      >
        Reservar
      </button>

      <span id="plants"></span>
    </div>
  );
}

export default Hero;
