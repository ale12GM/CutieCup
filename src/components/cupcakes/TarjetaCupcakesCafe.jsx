import React, { useState, useRef } from "react";
import cupcake from "../../assets/recetascupcakes/cupcakescafe.svg";

const tabs = ["Descripción", "Ingredientes", "Pasos"];
const content = {
  Descripción: `Los cupcakes de café combinan el sabor suave del bizcocho con el aroma y gusto intenso del café. Son ideales para los amantes del café y una opción elegante para cualquier merienda o evento.`,
  Ingredientes: `- 1 taza de harina leudante\n- 1/2 taza de azúcar\n- 2 huevos\n- 1/2 taza de manteca derretida\n- 1/4 taza de café fuerte o espresso\n- 1 cdita de esencia de vainilla\n- Opcional: chips de chocolate o nueces`,
  Pasos: `1. Precalentar el horno a 180°C y preparar pirotines en una bandeja para cupcakes.\n2. Batir los huevos con el azúcar hasta espumar.\n3. Agregar la manteca, el café y la vainilla.\n4. Incorporar la harina y mezclar hasta integrar.\n5. Verter en los pirotines, llenando hasta 3/4.\n6. Hornear por 20-25 minutos o hasta que al pinchar salga seco.\n7. Dejar enfriar y decorar si se desea (frosting de café, crema, etc.).`,
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
          <title>Cupcakes de Café</title>
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
          Cupcakes de Café
        </h1>
        <img
          src={cupcake}
          alt="Cupcakes de Café"
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
        <h1>Cupcakes de Café</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
