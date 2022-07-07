import React, { useEffect, useState } from "react";
import "../styles/ButtonRandon.css";

const Blockquote = () => {
  const [random, setRandom] = useState(null);

  async function getQuote() {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    const toJson = await response.json();

    setRandom(toJson.data[0]);
  }
  
  useEffect(() => {
    getQuote();
  }, []);

  if (random === null) return null;

  return (
    <>
      <header>
        <button onClick={() => getQuote()} className="buttonRandon">Random</button>
      </header>
      <blockquote className="blockquote">
        <p>"{random.quoteText}"</p>
      </blockquote>
      <button className="buttonQuote">{random.quoteAuthor}</button>
    </>
  );
};

export default Blockquote;
