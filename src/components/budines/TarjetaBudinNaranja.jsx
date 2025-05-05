import React, { useState, useRef } from "react";
import budin from "../../assets/recetadebudines/budinnaranja.svg"; // Asegurate de tener esta imagen en tu proyecto

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El budín de naranja es esponjoso, húmedo y con un aroma cítrico refrescante. Ideal para acompañar una taza de té o café. Su sabor suave y natural proviene del jugo y la ralladura de naranja.`,
  Ingredientes: `- 2 huevos\n- 1 taza de azúcar\n- 1/2 taza de aceite\n- 1 taza de jugo de naranja natural\n- Ralladura de 1 naranja\n- 1 y 1/2 taza de harina leudante\n- 1 cdita de esencia de vainilla (opcional)`,
  Pasos: `1. Precalentar el horno a 180°C.\n2. Batí los huevos con el azúcar hasta que estén espumosos.\n3. Agregá el aceite, el jugo y la ralladura de naranja.\n4. Incorporá la harina tamizada y mezclá bien.\n5. Volcá en un molde enmantecado y enharinado.\n6. Horneá durante 40-45 minutos o hasta que esté dorado y al pinchar salga seco.`,
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
          <title>Budín de Naranja</title>
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
          Budín de Naranja
        </h1>
        <img
          src={budin}
          alt="Budín de Naranja"
          className="mx-auto w-full max-w-md sm:max-w-lg object-contain"
        />
      </div>

      <div className="p-6 font-['Orelega_One'] text-[#A9746E] w-[400px] h-[450px] flex flex-col justify-between">
        <div>
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
        <h1>Budín de Naranja</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
