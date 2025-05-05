import React, { useState, useRef } from "react";
import budin from "../../assets/recetadebudines/budinlimon.svg";

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El budín de limón es un clásico con sabor fresco y aromático. Su textura suave y su sutil acidez lo hacen ideal para acompañar una infusión. Podés intensificar su sabor con ralladura y jugo de limón, e incluso agregarle un glaseado por encima.`,
  Ingredientes: `- 2 huevos\n- 1/2 taza de azúcar\n- 1/3 taza de aceite o manteca derretida\n- 1/2 taza de leche o yogur\n- 1 y 1/2 taza de harina leudante\n- Ralladura y jugo de 1 limón\n- 1 cdita de esencia de vainilla\n- Opcional: glaseado (azúcar impalpable + jugo de limón)`,
  Pasos: `1. Precalentar el horno a 180°C.\n2. Batí los huevos con el azúcar hasta integrar.\n3. Agregá el aceite, la leche (o yogur), la vainilla y el jugo de limón.\n4. Sumá la ralladura y mezclá.\n5. Incorporá la harina tamizada hasta lograr una mezcla homogénea.\n6. Volcá en un molde enmantecado y enharinado.\n7. Horneá durante 40-45 minutos. Dejar enfriar y decorar con glaseado si querés.`,
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
          <title>Budín de Limón</title>
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
          Budín de Limón
        </h1>
        <img
          src={budin}
          alt="Budín de Limón"
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

      <div className="hidden" ref={printRef}>
        <h1>Budín de Limón</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
