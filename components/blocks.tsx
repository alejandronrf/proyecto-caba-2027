export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-purple-600">EJES</h2>
            <p className="text-xl text-gray-400">Estos son nuestros ejes de cambio para  CABA 2027</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full text-white text-2xl">
                1
              </div>
              <h4 className="h4 mb-2 text-purple-600">Motosierra <span className="h4 mb-2 text-gray-400">(Optimización del Gasto Fiscal): </span></h4>
              <p className="text-lg text-gray-400 text-center">Reducción drástica y rápida de partidas para financiar obras con fondos propios</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full text-white text-2xl">
                2
              </div>
              <h4 className="h4 mb-2 text-gray-400">Transformación y expansión de la Red de <span className="h4 mb-2 text-purple-600">Subtes</span>:</h4>
              <ol className="text-lg text-gray-400 text-left list-decimal ml-5">
                <li>Automatización de Líneas C y D</li>
                <li>Extensión de Línea H hasta FFCC Belgrano Sur</li>
                <li>Extensión de la Línea D hasta Puente Saavedra</li>
                <li>Licitación y Tramo 1 de “Línea I” la cual terminará uniendo 5 líneas de FFCC, 4 Líneas de Subte (A, B, D y E) y Premetro (P)</li>
              </ol>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full text-white text-2xl">
                3
              </div>
              <h4 className="h4 mb-2 text-purple-600">Ciudad <span className="h4 mb-2 text-gray-400">Sin Barreras:</span></h4>
              <p className="text-lg text-gray-400 text-center">Eliminación de los 38 Pasos a Nivel Restantes en la Ciudad de Buenos Aires</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full text-white text-2xl">
                4
              </div>
              <h4 className="h4 mb-2 text-purple-600">Eliminación de <span className="h4 mb-2 text-gray-400">Bicisendas espurias:</span></h4>
              <p className="text-lg text-gray-400 text-center">Eliminación progresiva de las bicisendas no utilizadas y habilitación de estacionamiento en ambos lados</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full text-white text-2xl">
                5
              </div>
              <h4 className="h4 mb-2 text-purple-600">Veredas <span className="h4 mb-2 text-gray-400">modernas, funcionales y costo-eficientes:</span></h4>
              <p className="text-lg text-gray-400 text-center">Desarrollo de veredas de cemento alisado y renovación progresiva de veredas en estado deficiente</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}