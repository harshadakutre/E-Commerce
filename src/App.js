import "./App.css";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
