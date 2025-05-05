import React, { useState, useRef } from "react";
import helado from "../../assets/ImagesRecetas/heladoMenta.jpg"; // Asegúrate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El helado de menta es refrescante y ligero, con un sabor herbal característico que combina perfectamente con chocolate o se disfruta solo. Es ideal para quienes buscan un postre fresco y diferente.`,
  Ingredientes: `- 2 tazas de crema de leche\n- 1 taza de leche entera\n- 3/4 taza de azúcar\n- 1 cdita de extracto de menta\n- Colorante verde (opcional)\n- 1/2 taza de chispas de chocolate (opcional)\n- Pizca de sal`,
  Pasos: `1. En un bowl, mezcla la leche, la crema, el azúcar y la sal hasta disolver completamente.\n2. Agrega el extracto de menta y unas gotas de colorante verde si deseas un tono más llamativo.\n3. Refrigera la mezcla por al menos 2 horas.\n4. Procesa en una máquina de helado o congela en un recipiente.\n5. Si congelas a mano, revuelve cada 30 minutos para evitar cristales de hielo.\n6. Cuando comience a espesar, agrega las chispas de chocolate si lo deseas.`,
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
          <title>Helado de Menta</title>
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
          Helado de Menta
        </h1>
        <img
          src={helado}
          alt="Helado de Menta"
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
        <h1>Helado de Menta</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
