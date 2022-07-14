
export default function Quote(props) {
  return (
    <>
      <blockquote className="blockquote">
        <p>"{props.quote}"</p>
      </blockquote>

    </>
  );
}
