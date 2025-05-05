import React, { useState, useRef } from "react";
import helado from "../../assets/ImagesRecetas/heladoChicle.jpg"; // Asegúrate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El helado de chicle es un postre divertido y colorido, perfecto para niños y para quienes aman los sabores dulces y nostálgicos. Tiene una textura cremosa y un sabor que recuerda al chicle tradicional de frutas.`,
  Ingredientes: `- 2 tazas de crema de leche\n- 1 taza de leche entera\n- 3/4 taza de azúcar\n- 1 cdita de esencia de chicle\n- Colorante rosado (opcional)\n- 4 yemas de huevo\n- Pizca de sal`,
  Pasos: `1. Calienta la leche con la crema y la mitad del azúcar, sin que hierva.\n2. En un bowl, bate las yemas con el resto del azúcar hasta que estén cremosas.\n3. Vierte poco a poco la mezcla caliente sobre las yemas sin dejar de batir.\n4. Regresa la mezcla a la olla y cocina a fuego bajo hasta que espese ligeramente (no dejes hervir).\n5. Retira del fuego, agrega la esencia de chicle y el colorante si lo deseas.\n6. Deja enfriar completamente, luego congela o usa una máquina de helado.\n7. Si congelas a mano, remueve cada 30 minutos para mantener la textura cremosa.`,
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
          <title>Helado de Chicle</title>
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
          Helado de Chicle
        </h1>
        <img
          src={helado}
          alt="Helado de Chicle"
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
        <h1>Helado de Chicle</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
