import React, { useState, useRef } from "react";
import flan from "../../assets/recetasdeflan/flanleche.svg"; // Asegúrate de tener esta imagen del flan de leche

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción:
    "El flan de leche es un postre clásico de textura suave y sabor dulce, preparado con huevos, leche y azúcar. Se hornea a baño maría y se sirve con una capa de caramelo líquido. Es una receta tradicional muy popular por su sencillez y delicioso resultado.",
  Ingredientes:
    "- 4 huevos\n- 1 lata de leche condensada (397 g)\n- 1 lata de leche evaporada (354 ml) o la misma cantidad de leche entera\n- 1 cdita de esencia de vainilla\n- 1/2 taza de azúcar (para el caramelo)",
  Pasos:
    "1. En una sartén, derrite el azúcar a fuego medio hasta obtener un caramelo dorado. Viértelo en un molde y distribúyelo por la base.\n2. En un bol, mezcla los huevos, la leche condensada, la leche evaporada y la vainilla hasta integrar bien.\n3. Vierte la mezcla en el molde caramelizado.\n4. Hornea a baño maría a 180°C durante aproximadamente 50-60 minutos.\n5. Deja enfriar, refrigera por al menos 4 horas y desmolda para servir frío.",
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
          <title>Flan de Leche</title>
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
          Flan de Leche
        </h1>
        <img
          src={flan}
          alt="Flan de Leche"
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
        <h1>Flan de Leche</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
