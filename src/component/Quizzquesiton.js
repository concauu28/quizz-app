import { nanoid } from "nanoid";
import React from "react";
import { useEffect, useState } from "react";
export default function Quizzquestion(props) {
  const [listofAnswer, setlistofAnswer] = useState(props.list);

  function Held(id) {
    setlistofAnswer((prev) =>
      prev.map((ele) => {
        return ele.id == id ? { ...ele, isHeld: !ele.isHeld } : { ...ele };
      })
    );

    for (let i = 0; i < listofAnswer.length; i++) {
      if (listofAnswer[i].id === id) {
        localStorage.setItem(id, listofAnswer[i].answer);
      }
    }
  }

  let elebutton;

  if (props.check == false) {
    elebutton = listofAnswer.map((element) => (
      <button
        style={{ backgroundColor: element.isHeld ? "#D6DBF5" : "white" }}
        className="Answer"
        onClick={() => {
          Held(element.id);
          props.addanswer(element.id);
        }}
        key={nanoid()}
      >
        {element.answer}
      </button>
    ));
  } else {
    elebutton = listofAnswer.map((element) => (
      <button
        style={{
          backgroundColor:
            element.answer === props.correct_answer
              ? "#94D7A2"
              : props.chosenanswer.includes(element.answer)
              ? "#F8BCBC"
              : null,
        }}
        className="Answer"
        key={nanoid()}
      >
        {element.answer}
      </button>
    ));
  }

  return (
    <div className="Question-container">
      <h1 className="Question"> {props.question}</h1>
      <div className="Answer-container">{elebutton}</div>

      <hr></hr>
    </div>
  );
}
