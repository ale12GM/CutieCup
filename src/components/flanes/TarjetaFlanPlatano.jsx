import React, { useState, useRef } from "react";
import flan from "../../assets/recetasdeflan/flanleche.svg"; // Asegúrate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción:
    "El flan de plátano es un postre suave, dulce y naturalmente cremoso. Aprovecha la dulzura del plátano maduro para crear un flan fácil de preparar, ideal para aprovechar frutas maduras. Se puede servir frío y decorado con rodajas de plátano caramelizado.",
  Ingredientes:
    "- 2 plátanos maduros\n- 1 lata de leche condensada\n- 1 taza de leche\n- 3 huevos\n- 1 cdita de esencia de vainilla\n- Caramelo líquido para el molde\n- Opcional: rodajas de plátano para decorar",
  Pasos:
    "1. Precalentar el horno a 180°C.\n2. Licuar los plátanos junto con la leche condensada, la leche, los huevos y la vainilla hasta obtener una mezcla homogénea.\n3. Verter caramelo líquido en el fondo del molde y añadir la mezcla del flan.\n4. Hornear a baño maría durante 50-60 minutos o hasta que cuaje.\n5. Dejar enfriar, refrigerar por al menos 4 horas y desmoldar antes de servir.",
};

export default function RecetaCard() {
  const [activeTab, setActiveTab] = useState("Descripción");
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Flan de Plátano</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #333; }
            h1 { color: #A9746E; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white flex-col sm:flex-row gap-4 p-4">
      <div className="p-6 font-['Orelega_One'] text-[#A9746E] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Flan de Plátano
        </h1>
        <img
          src={flan}
          alt="Flan de Plátano"
          className="mx-auto w-full max-w-xs sm:max-w-sm object-contain"
        />
      </div>

      <div className="p-6 font-['Orelega_One'] text-[#A9746E] w-full max-w-md flex flex-col justify-between">
        <div className="flex gap-3 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full font-semibold ${
                activeTab === tab
                  ? "bg-[#FFA79C]"
                  : "bg-[#FFA79C]/50 hover:bg-[#FFA79C]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-[#fff1dc] p-6 rounded-2xl shadow h-[300px] overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">{activeTab}:</h3>
          <p className="whitespace-pre-line">{content[activeTab]}</p>
        </div>

        <button
          onClick={handlePrint}
          className="mt-6 bg-[#FFA79C] hover:bg-[#ffa79c]/80 text-white font-bold py-2 rounded-full"
        >
          Imprimir
        </button>
      </div>

      {/* Contenido oculto para imprimir */}
      <div className="hidden" ref={printRef}>
        <h1>Flan de Plátano</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
