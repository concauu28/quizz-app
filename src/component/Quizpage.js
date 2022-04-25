import { useState } from "react";
import { nanoid } from "nanoid";
import Startpage from "./Startpage";
import Quizzquestion from "./Quizzquesiton";
import Correctionpage from "./Correctionpage";
export default function Quizzpage(props) {
  const [current, setcurrent] = useState("quizz");
  const [identify, setidentify] = useState([]);
  const element = props.allPair.map((data) => (
    <Quizzquestion
      question={data.question}
      correct_answer={data.correct_answer}
      incorrect_answers={data.incorrect_answers}
      key={data.id}
      list={[...data.incorrect_answers, data.correct_answer].map((data) => ({
        answer: data,
        id: nanoid(),
        isHeld: false,
      }))}
      check={false}
      addanswer={addanswer}
      chosenanswer={[0]}
    />
  ));

  function check_correct_answer() {
    setcurrent("correction");
  }
  function addanswer(id) {
    setidentify((prev) => [...prev, id]);
  }
  const a = (
    <div>
      <div className="container question-container">
        <div className="main">
          {element}
          <button onClick={check_correct_answer} className="check-button">
            Check answer
          </button>
        </div>
      </div>
    </div>
  );
  if (current == "quizz") {
    return a;
  } else {
    return <Correctionpage allPair={props.allPair} answerid={identify} />;
  }
}
