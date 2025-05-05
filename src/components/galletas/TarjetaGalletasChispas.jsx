import React, { useState, useRef } from "react";
import galletas from "../../assets/recetasdegalletas/galletasChispas.svg";

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Las galletas con chispas de chocolate son un clásico irresistible: crujientes por fuera, suaves por dentro y llenas de trozos de chocolate derretido. Perfectas para la merienda o para compartir.`,
  Ingredientes: `- 1 taza de manteca a temperatura ambiente\n- 1 taza de azúcar rubia\n- 2 huevos\n- 2 cditas de esencia de vainilla\n- 2 1/2 tazas de harina\n- 1 cdita de bicarbonato de sodio\n- 1/2 cdita de sal\n- 2 tazas de chispas de chocolate`,
  Pasos: `1. Precalentar el horno a 180°C.\n2. Batir la manteca con el azúcar hasta que quede cremoso.\n3. Agregar los huevos uno a uno y luego la vainilla.\n4. Incorporar la harina, el bicarbonato y la sal.\n5. Añadir las chispas de chocolate y mezclar.\n6. Formar bolitas y colocarlas en una bandeja con papel manteca.\n7. Hornear entre 10 y 12 minutos o hasta que los bordes estén dorados.\n8. Dejar enfriar antes de servir.`,
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
          <title>Galletas con Chispas de Chocolate</title>
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
          Galletas con Chispas de Chocolate
        </h1>
        <img
          src={galletas}
          alt="Galletas con Chispas"
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
      <div className="hidden" ref={printRef}>
        <h1>Galletas con Chispas de Chocolate</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
