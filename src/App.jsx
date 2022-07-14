import "./styles/reset.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blockquote from "./components/Blockquote";
import "./App.css";

import QuotesList from "./components/QuotesList";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blockquote />} />
          <Route path="/author/:author" element={<QuotesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
