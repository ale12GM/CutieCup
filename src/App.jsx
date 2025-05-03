import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout.jsx";


export default function App() {
 return (
    <Routes>
       <Route path="/" element={<Login />} />

     </Routes>      


 );
}

