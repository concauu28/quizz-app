import { nanoid } from "nanoid";
import Quizzquestion from "./Quizzquesiton";
import { useEffect, useState } from "react";
import App from "../App";
export default function Correctionpage(props) {
  const [a, seta] = useState([]);

  useEffect(
    function () {
      for (let i = 0; i < props.answerid.length; i++) {
        seta((preva) => [...preva, localStorage.getItem(props.answerid[i])]);
      }
    },

    [true]
  );
  function countcorrect() {
    let count = 0;
    for (let i = 0; i < props.allPair.length; i++) {
      if (a.includes(props.allPair[i].correct_answer)) {
        count++;
      }
    }
    return count;
  }
  function reset() {
    window.location.reload(false);
  }
  const element = props.allPair.map((data) => (
    <Quizzquestion
      question={data.question}
      correct_answer={data.correct_answer}
      incorrect_answers={data.incorrect_answers}
      key={data.id}
      id={data.id}
      list={[...data.incorrect_answers, data.correct_answer].map((data) => ({
        answer: data,
        id: nanoid(),
        isHeld: false,
      }))}
      check={true}
      chosenanswer={a}
    />
  ));

  return (
    <div>
      <div className="container question-container">
        <div className="main">
          {element}
          <div className="reveal-container">
            <p>You scord {countcorrect()}/5 answers</p>
            <button onClick={reset} className="check-button">
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
