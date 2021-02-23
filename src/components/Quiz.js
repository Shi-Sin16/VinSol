// import React,{Component,useState,useEffect} from 'react';
// import Question from "./Question";

// import { shuffle, htmlDecode } from "../util";

// const Quiz = (props) => {
//     const [idx, setIdx] = useState(0);
//     const q = props.data.questions.length > 0 ? props.data.questions[idx].question : null;

//     return(
//         <>
//         <button>Start Quiz</button>
//         <Question question={htmlDecode(q)} />
//     </>
//     )
// }
// export default Quiz;

import React, { useEffect, useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import Actions from "./Actions";
import Card from "react-bootstrap/Card";

import { shuffle, htmlDecode } from "../util";

export default function Quiz(props) {
  const [idx, setIdx] = useState(0);

  const q =
    props.data.questions.length > 0 ? props.data.questions[idx].question : null;

  const a =
    props.data.questions.length > 0
      ? shuffle(
          `${props.data.questions[idx].incorrect_answers.join("|")}|${
            props.data.questions[idx].correct_answer
          }`.split("|")
        )
      : [];

  function nextQuestion() {
    // idx++
    setIdx(idx + 1);
  }

  function onAnswer(e) {
    const selection = e.target.innerHTML;

    if (selection === props.data.questions[idx].correct_answer) {
      console.log("correct");
    }
  }

  return (
    <Card className='mt-2'>
      <Card.Title>
        <h1>Quiz</h1>
      </Card.Title>
      <Card.Body>
        <Question question={htmlDecode(q)} />
        <Answer answers={a} onAnswer={onAnswer} />
        <Actions nextQuestion={nextQuestion} />
      </Card.Body>
    </Card>
  );
}