import React, { useEffect, useState } from "react";
import "../styles/ButtonRandon.css";
import { HiOutlineRefresh } from "react-icons/hi"

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
        <HiOutlineRefresh className="icone"/>
        <button onClick={() => getQuote()} className="buttonRandon">Random</button>
      </header>
      <blockquote className="blockquote">
        <q>{random.quoteText}</q>
      </blockquote>
      <a className="buttonQuote">{random.quoteAuthor}
      <p>{random.quoteGenre}</p></a>
    </>
  );
};

export default Blockquote;
