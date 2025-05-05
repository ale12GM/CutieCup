import React, { useState, useRef } from "react";
import cupcakes from "../assets/cupcakeschocolate.svg";

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Los cupcakes de chocolate son mini tortas individuales, húmedas y con intenso sabor a cacao. Suaves por dentro y esponjosos, se pueden decorar con crema, ganache o buttercream, y son ideales para celebraciones o meriendas.`,
  Ingredientes: `- 1 taza de azúcar\n- 1 taza de harina\n- 1/2 taza de cacao en polvo\n- 1 cdita de polvo de hornear\n- 1/2 cdita de bicarbonato de sodio\n- 1/2 cdita de sal\n- 1 huevo\n- 1/2 taza de leche\n- 1/4 taza de aceite\n- 1 cdita de esencia de vainilla\n- 1/2 taza de agua caliente`,
  Pasos: `1. Precalentar el horno a 180°C y preparar los moldes para cupcakes.\n2. Mezclar los ingredientes secos: azúcar, harina, cacao, polvo de hornear, bicarbonato y sal.\n3. Agregar huevo, leche, aceite y vainilla. Batir hasta integrar.\n4. Incorporar el agua caliente (la mezcla quedará líquida).\n5. Rellenar los moldes hasta 3/4 de su capacidad.\n6. Hornear de 18 a 22 minutos o hasta que al pinchar con un palillo salga seco.\n7. Dejar enfriar antes de decorar.`,
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
          <title>Cupcakes de Chocolate</title>
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
          Cupcakes de Chocolate
        </h1>
        <img
          src={cupcakes}
          alt="Cupcakes de Chocolate"
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
        <h1>Cupcakes de Chocolate</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
