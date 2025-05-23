import React, { useState, useRef } from "react";
import helado from "../../assets/recetasdehelado/heladocanela.svg"; // Asegurate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El helado de canela es un postre cremoso y aromático, ideal para los amantes de los sabores especiados. Su preparación puede ser con o sin máquina de helado, y se destaca por el sabor profundo y cálido de la canela infusionada en leche o crema.`,
  Ingredientes: `- 2 tazas de crema de leche\n- 1 taza de leche\n- 3/4 taza de azúcar\n- 2 ramas de canela o 1 cda de canela en polvo\n- 4 yemas de huevo\n- Pizca de sal`,
  Pasos: `1. Calentar la leche con la crema y las ramas de canela. Dejar infusionar por 10 min.\n2. En un bowl, batir las yemas con el azúcar hasta que estén cremosas.\n3. Retirar la canela y añadir lentamente la mezcla caliente sobre las yemas sin dejar de batir.\n4. Volver todo a la olla y cocinar a fuego bajo hasta espesar ligeramente (no hervir).\n5. Dejar enfriar completamente y luego llevar al congelador o usar en máquina de helado.\n6. Mezclar cada 30 minutos si se congela a mano para evitar cristales.`,
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
          <title>Helado de Canela</title>
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
          Helado de Canela
        </h1>
        <img
          src={helado}
          alt="Helado de Canela"
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
        <h1>Helado de Canela</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
