import React, { useEffect, useState } from "react";
import "../styles/ButtonRandom.css";
import { HiOutlineRefresh } from "react-icons/hi";
import Quote from "./Quote";
import { Link } from "react-router-dom";

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
        <button onClick={() => getQuote()} className="buttonRandon">
          Random
          <HiOutlineRefresh className="icone" />
        </button>
      </header>

      <Quote quote={random.quoteText} author={random} mostrarBotao={true} />

      <Link to={`/author/${random.quoteAuthor}`} className="buttonQuote">
        {random.quoteAuthor}
        <p>{random.quoteGenre}</p>
      </Link>
    </>
  );
};

export default Blockquote;
