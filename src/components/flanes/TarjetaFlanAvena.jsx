import React, { useState, useRef } from "react";
import flan from "../../assets/recetasdeflan/flanavena.svg"; // Asegurate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El flan de avena es una alternativa saludable al flan tradicional. Se elabora con avena cocida, leche vegetal o animal, y se endulza de forma natural. Tiene una textura cremosa y es ideal como postre o desayuno. No lleva huevos ni azúcar refinada, lo que lo convierte en una opción nutritiva.`,
  Ingredientes: `- 1 taza de avena arrollada\n- 2 tazas de leche (puede ser vegetal)\n- 2 cdas de miel o azúcar mascabo\n- 1 cdita de esencia de vainilla\n- 1/2 cdita de canela\n- Opcional: caramelo líquido para cubrir el molde`,
  Pasos: `1. Hervir la avena en la leche durante 10-15 minutos hasta que espese.\n2. Añadir la miel, vainilla y canela. Mezclar bien.\n3. Verter la mezcla en moldes individuales o uno grande. Si se desea, cubrir con caramelo previamente.\n4. Llevar a la heladera y dejar enfriar al menos 2 horas.\n5. Desmoldar y servir frío.`,
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
          <title>Flan de Avena</title>
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
          Flan de Avena
        </h1>
        <img
          src={flan}
          alt="Flan de Avena"
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
        <h1>Flan de Avena</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
