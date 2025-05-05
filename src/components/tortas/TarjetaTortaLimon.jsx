



import React, { useState, useRef } from "react";
import torta from "../../assets/recetasdetortas/limon.svg"; // Asegúrate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `La torta de limón es un postre suave y refrescante, ideal para cualquier ocasión. Está compuesta por un bizcocho esponjoso con ralladura de limón, rellena o cubierta con una crema de limón (lemon curd) y glaseado. Su sabor cítrico la hace perfecta para quienes disfrutan de postres no tan dulces.`,
  Ingredientes: `- Harina de trigo\n- Azúcar\n- Huevos\n- Ralladura y jugo de limón\n- Polvo de hornear\n- Mantequilla\n- Leche\n- Lemon curd o glaseado de limón`,
  Pasos: `1. Precalentar el horno a 180°C.\n2. Batir la mantequilla con el azúcar hasta cremoso.\n3. Agregar los huevos uno a uno, luego la ralladura y jugo de limón.\n4. Incorporar la harina con el polvo de hornear y la leche.\n5. Hornear por 30-40 minutos.\n6. Dejar enfriar y cubrir con lemon curd o glaseado.`,
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
          <title>Torta de Limón</title>
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
          Torta de Limón
        </h1>
        <img
          src={torta}
          alt="Torta de Limón"
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
        <h1>Torta de Limón</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
