import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout.jsx";
import Prueba from "./components/Prueba.jsx";

export default function App() {
 return (
    <Routes>
       <Route path="/" element={<Layout><Login /></Layout>} />  
     </Routes>      


 );
}

