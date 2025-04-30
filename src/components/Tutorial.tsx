const Tutorial = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <h2 className="text-accentDark text-4xl text-center font-bold mb-12">
          Tutorial
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8 text-center">
          O aquarismo é uma prática fascinante que envolve a criação e
          manutenção de ecossistemas aquáticos em casa. Para ajudar você a
          entender melhor as características das algas e plantas marinhas, aqui
          estão algumas definições importantes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nível de Cuidado */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-accentDark text-xl font-semibold mb-4">
              Nível de Cuidado
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Indica a complexidade da manutenção da espécie em seu aquário.
            </p>
            <div className="flex justify-center gap-4">
              <div className="rounded-full bg-green-200 text-green-700 font-semibold px-4 py-2">
                Baixo
              </div>
              <div className="rounded-full bg-yellow-200 text-yellow-700 font-semibold px-4 py-2">
                Moderado
              </div>
              <div className="rounded-full bg-red-200 text-red-700 font-semibold px-4 py-2">
                Alto
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mt-4 text-sm">
              Escolha de acordo com sua experiência e tempo dedicado ao aquário.
            </p>
          </div>

          {/* Requerimento de Luminosidade */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-sky-700 text-xl font-semibold mb-4">
              Requerimento de Luminosidade
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Especifica a intensidade de luz necessária para a fotossíntese e
              saúde da alga/planta.
            </p>
            <div className="flex justify-center gap-4">
              <div className="rounded-full bg-blue-100 text-blue-700 font-semibold px-4 py-2">
                Baixo
              </div>
              <div className="rounded-full bg-blue-300 text-blue-700 font-semibold px-4 py-2">
                Moderado
              </div>
              <div className="rounded-full bg-blue-500 text-white font-semibold px-4 py-2">
                Alto
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mt-4 text-sm">
              A iluminação adequada é crucial para o crescimento e vitalidade.
            </p>
          </div>

          {/* Requerimento de Fluxo */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-teal-700 text-xl font-semibold mb-4">
              Requerimento de Fluxo
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Indica a intensidade da corrente de água necessária para a
              nutrição e remoção de detritos.
            </p>
            <div className="flex justify-center gap-4">
              <div className="rounded-full bg-teal-100 text-teal-700 font-semibold px-4 py-2">
                Baixo
              </div>
              <div className="rounded-full bg-teal-300 text-teal-700 font-semibold px-4 py-2">
                Moderado
              </div>
              <div className="rounded-full bg-teal-500 text-white font-semibold px-4 py-2">
                Alto
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mt-4 text-sm">
              O fluxo adequado garante a saúde e previne o acúmulo de algas
              indesejadas.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 leading-relaxed">
            Entender essas características te ajudará a escolher as espécies
            mais adequadas para o seu aquário e a proporcionar um ambiente
            próspero para a vida marinha. Explore nossa seleção e descubra a
            beleza e os benefícios que as plantas e algas marinhas podem trazer
            para o seu pedacinho do oceano!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
