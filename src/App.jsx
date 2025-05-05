import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout.jsx";
import Create_Account from "./components/Create_Account.jsx";
import Categorias from "./pages/CategoriasRecetas"; // asegúrate de que la ruta sea correcta
import CategoriasRecetas from "./pages/Recetas";
import Recetas from "./pages/Recetas"
export default function App() {
 return (
    <Routes>
       <Route path="/" element={<Layout><Login /></Layout>} />  
       <Route path="/Create_Account" element={<Layout><Create_Account /></Layout>} />
       <Route path="/Categorias" element={<Layout><Categorias /></Layout>} />
       <Route path="/Recetas" element={<Layout><CategoriasRecetas /></Layout>} />
       <Route path="/categorias/:nombre" element={<Layout><Recetas /></Layout>} />
     </Routes>      


 );
}

