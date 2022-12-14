import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DadosCnpj from "./pages/components/DadosCnpj";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home"/>
      <Route element={<DadosCnpj/>} path="/resultados"/>

    </Routes>
  );
}

export default App;

