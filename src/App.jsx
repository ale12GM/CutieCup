import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout.jsx";
import Create_Account from "./components/Create_Account.jsx";
export default function App() {
 return (
    <Routes>
       <Route path="/" element={<Layout><Login /></Layout>} />  
       <Route path="/Create_Account" element={<Create_Account />} />
     </Routes>      


 );
}

