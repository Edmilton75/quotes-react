import React, { useEffect, useState } from "react";
import "../styles/ButtonRandon.css";

const Blockquote = () => {
  const [random, setRandom] = useState(null);
  const [atualizar, setAtualizar] = useState(0)

  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((json) => setRandom(json));
  }, [atualizar]);
  if (random === null) return null;

  return (
    <>
      <header>
        <button onClick={() => setAtualizar(atualizar + 1)} className="buttonRandon">Random</button>
      </header>
      <blockquote className="blockquote">
        <p>"{random.data[0].quoteText}"</p>
      </blockquote>
      <button className="buttonQuote">{random.data[0].quoteAuthor}</button>
    </>
  );
};

export default Blockquote;
