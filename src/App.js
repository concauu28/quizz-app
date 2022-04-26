import Startpage from "./component/Startpage";
import Quizzpage from "./component/Quizpage";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
function App() {
  const [allPair, setallPair] = useState([{}]);
  const [startPage, setstartPage] = useState(true);
  function welcome() {
    setstartPage(false);
    localStorage.setItem("welcomepage", "false");
  }

  useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) =>
        setallPair(
          data.results.map((result) => ({
            ...result,
            isHeld: false,
            id: nanoid(),
          }))
        )
      );
  }, []);

  if (allPair.length === 1) {
    console.log("loading");
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    return (
      <div>
        {startPage ? (
          <Startpage handleclick={welcome} />
        ) : (
          <Quizzpage allPair={allPair} />
        )}
      </div>
    );
  }
}

export default App;
