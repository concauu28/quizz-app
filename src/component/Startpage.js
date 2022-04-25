export default function Startpage(props) {
  return (
    <div className="container">
      <div className="Start-container">
        <h1 className="Start-heading">Quizzical</h1>
        <h5 className="Start-description">Some description</h5>
        <button onClick={props.handleclick} className="Start-button">
          Start quizz
        </button>
      </div>
    </div>
  );
}
