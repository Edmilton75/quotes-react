import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import Quote from "./Quote";
import "../styles/ButtonRandom.css";

export default function QuotesList() {
  const [quotesAuthor, setQuotesAuthor] = useState(null);
  const author = useParams();

  async function getList() {
    const response = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author.author}`
    );
    const toJson = await response.json();

    setQuotesAuthor(toJson.data);
  }

  useEffect(() => {
    getList();
  }, []);
  if (quotesAuthor === null) return null;
  return (
    <>
      <div className="authorTitle">
        <Link className="iconBack" to="/">
          <AiOutlineRollback  />
          <h1>{author.author}</h1>
        </Link>
      </div>
      <ul>
        {quotesAuthor.map((quoteAuthor) => (
          <li key={quoteAuthor._id} className="lista">
            <Quote quote={quoteAuthor.quoteText} />
          </li>
        ))}
      </ul>
    </>
  );
}

// https://quote-garden.herokuapp.com/api/v3/quotes
// https://quote-garden.herokuapp.com/api/v3/quotes?author=${}
