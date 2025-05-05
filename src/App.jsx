import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout.jsx";
import Create_Account from "./components/Create_Account.jsx";
import Categorias from "./pages/CategoriasRecetas"; // asegúrate de que la ruta sea correcta
import CategoriasRecetas from "./pages/Recetas";
import Recetas from "./pages/Recetas"


import TarjetaBudinLimon from "./components/budines/TarjetaBudinLimon.jsx";
import TarjetaBudinBanana from "./components/budines/TarjetaBudinBanana.jsx";
import TarjetaBudinChocolate from "./components/budines/TarjetaBudinChocolate.jsx";
import TarjetaBudinFrutosRojos from "./components/budines/TarjetaBudinFrutosRojos.jsx";
import TarjetaBudinManzana from "./components/budines/TarjetaBudinManzana.jsx";
import TarjetaBudinNaranaja from "./components/budines/TarjetaBudinNaranja.jsx";

import TarjetaGalletasChocolate from "./components/galletas/TarjetaGalletasChocolate.jsx";
import TarjetaGalletasChispas from "./components/galletas/TarjetaGalletasChispas.jsx";
import TarjetaGalletasNutella from "./components/galletas/TarjetaGalletasNutella.jsx";
import TarjetaGalletasJengibre from "./components/galletas/TarjetaGalletasJengibre.jsx";
import TarjetaGalletasAlmendra from "./components/galletas/TarjetaGalletasAlmendra.jsx";
import TarjetaGalletasMaicena from "./components/galletas/TarjetaGalletasMaicena.jsx";

import TarjetaSelvaNegra from "./components/tortas/TarjetaSelvaNegra.jsx";
import TarjetaTortaChocolate from "./components/tortas/TarjetaTortaChocolate.jsx";
import TarjetaTortaFrambuesa from "./components/tortas/TarjetaTortaFrambuesa.jsx";
import TarjetaTortaLimon from "./components/tortas/TarjetaTortaLimon.jsx";
import TarjetaTortaMokka from "./components/tortas/TarjetaTortaMokka.jsx";
import TarjetaTortaVainilla from "./components/tortas/TarjetaTortaVainilla.jsx";

import TarjetaCupcakesCafe from "./components/cupcakes/TarjetaCupcakesCafe.jsx";
import TarjetaCupcakesChocolate from "./components/cupcakes/TarjetaCupcakesChocolate.jsx";
import TarjetaCupcakesLimon from "./components/cupcakes/TarjetaCupcakesLimon.jsx";
import TarjetaCupcakesNuex from "./components/cupcakes/TarjetaCupcakesNuex.jsx";
import TarjetaCupcakesRedVelvet from "./components/cupcakes/TarjetaCupcakesRedVelvet.jsx";
import TarjetaCupcakesZanahoria from "./components/cupcakes/TarjetasCupcakesZanahoria.jsx";

import TarjetaFlanLeche from "./components/flanes/TarjeraFlanLeche.jsx";
import TarjetaFlanAvena from "./components/flanes/TarjetaFlanAvena.jsx";
import TarjetaFlanChocolate from "./components/flanes/TarjetaFlanChocolate.jsx";
import TarjetaFlanFrutilla from "./components/flanes/TarjetaFlanFrutilla.jsx";
import TarjetaFlanQuinoa from "./components/flanes/TarjetaFlanQuinoa.jsx";
import TarjetaFlanPlatano from "./components/flanes/TarjetaFlanPlatano.jsx";

import TarjetaHeladoCanela from "./components/helados/TarjetaHeladoCanela.jsx";
import TarjetaHeladoChicle from "./components/helados/TarjetaHeladoChicle.jsx";
import TarjetaHeladoFrutilla from "./components/helados/TarjetaHeladoFrutilla.jsx";
import TarjetaHeladoMenta from "./components/helados/TarjetaHeladoMenta.jsx";
import TarjetaHeladoMora from "./components/helados/TarjetaHeladoMora.jsx";
import TarjetaHeladoPiña from "./components/helados/TarjetaHeladoPiña.jsx";




export default function App() {
 return (
    <Routes>
       <Route path="/" element={<Login />} />  
       <Route path="/Create_Account" element={<Create_Account />} />
       <Route path="/Categorias" element={<Layout><Categorias /></Layout>} />
       <Route path="/Recetas" element={<Layout><CategoriasRecetas /></Layout>} />
       <Route path="/categorias/:nombre" element={<Layout><Recetas /></Layout>} />

       <Route path="/receta/budinchocolate" element={<privateRoute><Layout><TarjetaBudinChocolate/></Layout></privateRoute>} />
       <Route path="/receta/budinlimon" element={<privateRoute><Layout><TarjetaBudinLimon/></Layout></privateRoute>} />
       <Route path="/receta/budinfrutosrojos" element={<privateRoute><Layout><TarjetaBudinFrutosRojos/></Layout></privateRoute>} />
       <Route path="/receta/budinmanzana" element={<privateRoute><Layout><TarjetaBudinManzana/></Layout></privateRoute>} />
       <Route path="/receta/budinnaranja" element={<privateRoute><Layout><TarjetaBudinNaranaja/></Layout></privateRoute>} />
       <Route path="/receta/budinbanana" element={<privateRoute><Layout><TarjetaBudinBanana/></Layout></privateRoute>} />

       <Route path="/receta/galletaschocolate" element={<privateRoute><Layout><TarjetaGalletasChocolate/></Layout></privateRoute>} />
       <Route path="/receta/galletaschispas" element={<privateRoute><Layout><TarjetaGalletasChispas/></Layout></privateRoute>} />
       <Route path="/receta/galletasnutella" element={<privateRoute><Layout><TarjetaGalletasNutella/></Layout></privateRoute>} />
       <Route path="/receta/galletasjengibre" element={<privateRoute><Layout><TarjetaGalletasJengibre/></Layout></privateRoute>} />
       <Route path="/receta/galletasalmendra" element={<privateRoute><Layout><TarjetaGalletasAlmendra/></Layout></privateRoute>} />
       <Route path="/receta/galletasmaicena" element={<privateRoute><Layout><TarjetaGalletasMaicena/></Layout></privateRoute>} />

       <Route path="/receta/selvanegra" element={<privateRoute><Layout><TarjetaSelvaNegra/></Layout></privateRoute>} />
       <Route path="/receta/tortachocolate" element={<privateRoute><Layout><TarjetaTortaChocolate/></Layout></privateRoute>} />
       <Route path="/receta/tortaframbuesa" element={<privateRoute><Layout><TarjetaTortaFrambuesa/></Layout></privateRoute>} />
       <Route path="/receta/tortalimon" element={<privateRoute><Layout><TarjetaTortaLimon/></Layout></privateRoute>} />
       <Route path="/receta/tortamokka" element={<privateRoute><Layout><TarjetaTortaMokka/></Layout></privateRoute>} />
       <Route path="/receta/tortavainilla" element={<privateRoute><Layout><TarjetaTortaVainilla/></Layout></privateRoute>} />
       

       <Route path="/receta/cupcakescafe" element={<privateRoute><Layout><TarjetaCupcakesCafe/></Layout></privateRoute>} />
       <Route path="/receta/cupcakeschocolate" element={<privateRoute><Layout><TarjetaCupcakesChocolate/></Layout></privateRoute>} />
       <Route path="/receta/cupcakeslimon" element={<privateRoute><Layout><TarjetaCupcakesLimon/></Layout></privateRoute>} />
       <Route path="/receta/cupcakesnuex" element={<privateRoute><Layout><TarjetaCupcakesNuex/></Layout></privateRoute>} />
       <Route path="/receta/cupcakesredvelvet" element={<privateRoute><Layout><TarjetaCupcakesRedVelvet/></Layout></privateRoute>} />
       <Route path="/receta/cupcakeszanahoria" element={<privateRoute><Layout><TarjetaCupcakesZanahoria/></Layout></privateRoute>} />


       <Route path="/receta/flanleche" element={<privateRoute><Layout><TarjetaFlanLeche/></Layout></privateRoute>} />
       <Route path="/receta/flanavena" element={<privateRoute><Layout><TarjetaFlanAvena/></Layout></privateRoute>} />
       <Route path="/receta/flanchocolate" element={<privateRoute><Layout><TarjetaFlanChocolate/></Layout></privateRoute>} />
       <Route path="/receta/flanfrutilla" element={<privateRoute><Layout><TarjetaFlanFrutilla/></Layout></privateRoute>} />
       <Route path="/receta/flanquinoa" element={<privateRoute><Layout><TarjetaFlanQuinoa/></Layout></privateRoute>} />
       <Route path="/receta/flanplatano" element={<privateRoute><Layout><TarjetaFlanPlatano/></Layout></privateRoute>} />

       <Route path="/receta/heladocanela" element={<privateRoute><Layout><TarjetaHeladoCanela/></Layout></privateRoute>} />
       <Route path="/receta/heladochicle" element={<privateRoute><Layout><TarjetaHeladoChicle/></Layout></privateRoute>} />
       <Route path="/receta/heladofrutilla" element={<privateRoute><Layout><TarjetaHeladoFrutilla/></Layout></privateRoute>} />
       <Route path="/receta/heladomenta" element={<privateRoute><Layout><TarjetaHeladoMenta/></Layout></privateRoute>} />
       <Route path="/receta/heladomora" element={<privateRoute><Layout><TarjetaHeladoMora/></Layout></privateRoute>} />
       <Route path="/receta/heladopiña" element={<privateRoute><Layout><TarjetaHeladoPiña/></Layout></privateRoute>} />

     </Routes>      


 );
}