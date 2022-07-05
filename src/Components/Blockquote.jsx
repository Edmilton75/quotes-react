import React, { useEffect, useState } from "react";
import "../styles/ButtonQuote.css";

const Blockquote = () => {
  const [randon, setRandon] = useState(null);

  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((json) => setRandon(json));
  }, []);
  console.log(randon);
  if (randon === null) return null;

  return (
    <>
      <blockquote className="blockquote">
        <p>{randon.data[0].quoteText}</p>
      </blockquote>
      <button className="buttonQuote">{randon.data[0].quoteAuthor}</button>
    </>
  );
};

export default Blockquote;
