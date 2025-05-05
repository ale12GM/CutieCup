import React, { useState, useRef } from "react";
import cupcake from "../../assets/recetascupcakes/cupcakesredvelvet.svg"; // Imagen Red Velvet

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Los cupcakes Red Velvet son suaves, esponjosos y tienen un sabor distintivo con un toque de cacao y vainilla. Su color rojo vibrante los hace irresistibles, y suelen estar cubiertos con un glaseado de queso crema que complementa perfectamente su sabor.`,
  Ingredientes: `- 1 taza de harina leudante\n- 3/4 taza de azúcar\n- 1 huevo\n- 1/2 taza de leche\n- 1/4 taza de aceite\n- 1 cdita de vinagre blanco\n- 1 cdita de cacao en polvo\n- 1 cdita de esencia de vainilla\n- 1/2 cdita de colorante rojo en gel\n- 1/2 cdita de bicarbonato de sodio`,
  Pasos: `1. Precalentar el horno a 180°C y preparar los pirotines en una bandeja.\n2. En un bowl, mezclar el azúcar con el huevo, aceite y leche.\n3. Agregar la vainilla, el cacao, el colorante y el vinagre.\n4. Incorporar la harina y el bicarbonato y mezclar suavemente.\n5. Rellenar los moldes hasta 3/4 de su capacidad.\n6. Hornear durante 20-22 minutos o hasta que al pinchar salga seco.\n7. Dejar enfriar y decorar con frosting de queso crema.`,
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
          <title>Cupcakes Red Velvet</title>
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
          Cupcakes Red Velvet
        </h1>
        <img
          src={cupcake}
          alt="Cupcakes Red Velvet"
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
        <h1>Cupcakes Red Velvet</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
