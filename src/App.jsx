import React from "react";
import Blockquote from "./Components/Blockquote";
import ButtonRandon from "./Components/ButtonRandon";
import './App.css'
const App = () => {
  return (
    <div className="navigator">
      <ButtonRandon />
      <Blockquote />
    </div>
  );
};

export default App;
