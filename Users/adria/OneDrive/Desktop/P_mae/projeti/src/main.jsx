// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index"; // Página inicial
import TarefaList from "./pages/Home/TarefaList"; // Página de lista de tarefas

import "./pages/Home/style.css"; // Caminho para o style.css dentro de pages/Home

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Página principal */}
      <Route path="/tarefa" element={<TarefaList />} /> {/* Página de tarefas */}
    </Routes>
  </Router>
);
