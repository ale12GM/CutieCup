import React, { useState, useRef } from "react";
import torta from "../../assets/recetasdetortas/chocolate.svg"; // Cambia aquí la imagen si tienes una de torta de chocolate

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción:
    "La torta de chocolate es un clásico delicioso, ideal para cualquier ocasión. Se prepara con un esponjoso bizcocho de chocolate, se puede rellenar con crema o dulce de leche, y suele cubrirse con una ganache o cobertura de chocolate brillante. Es húmeda, rica y muy fácil de preparar en casa.",
  Ingredientes:
    "- 200g de harina de trigo\n- 200g de azúcar\n- 100g de cacao en polvo sin azúcar\n- 1 cucharadita de polvo de hornear\n- 1/2 cucharadita de bicarbonato de sodio\n- 2 huevos\n- 240ml de leche\n- 120ml de aceite vegetal\n- 1 cucharadita de esencia de vainilla\n- 240ml de agua caliente\n- Ganache o cobertura de chocolate",
  Pasos:
    "1. Precalentar el horno a 180°C.\n2. Mezclar los ingredientes secos: harina, azúcar, cacao, polvo de hornear y bicarbonato.\n3. Añadir huevos, leche, aceite y vainilla. Batir hasta obtener una mezcla homogénea.\n4. Incorporar el agua caliente poco a poco.\n5. Verter en un molde engrasado y hornear por 35-40 minutos.\n6. Dejar enfriar, desmoldar y cubrir con ganache.",
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
          <title>Torta de Chocolate</title>
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
          Torta de Chocolate
        </h1>
        <img
          src={torta}
          alt="Torta de Chocolate"
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
        <h1>Torta de Chocolate</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
