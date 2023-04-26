import './App.css';


import Inicio from './Inicio';
import Pedido from './Pedido';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {



  return (
    <BrowserRouter>
    <Routes>
  
        <Route path="/" exact element={<Inicio />} />
        <Route path="pedido" element={<Pedido />} />
        
     
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;

