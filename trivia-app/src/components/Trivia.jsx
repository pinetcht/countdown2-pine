
import React, { useEffect, useState } from "react";
import "../style/Trivia.css"


const Trivia = () => {
  const [questions, setQuestion] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://opentdb.com/api.php?amount=10');
      const json = await data.json();

      if (json.results) {
        setQuestion(json.results);
      }

      console.log(data)
    }
    fetchData();

    fetchData().catch(console.error)
  }, []);

  return (
    <>
      <h1>Trivia App</h1>
      <h3>Correct Answers: {correctCount}</h3>
      {questions && questions.map((question, index) => (
        <Question key={index} question={question} setCorrectCount={setCorrectCount} correctCount={correctCount}/>
      ))}
    </>
  );
};

const Question = ({ question, setCorrectCount, correctCount }) => {
  const [rightClick, setCorrectClick] = useState("cream")
  

  return (
    <>
      <h2 className="question">
        {question.question.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#039;/g, "'")}
      </h2>
      <div>
        <button onClick={() => {setCorrectClick("DarkSeaGreen"); setCorrectCount(correctCount +1); }}style={{ backgroundColor: rightClick }} class="button">
          {question.correct_answer}</button>
      </div>
      {question.incorrect_answers.map((answer, i) => (
        <div>
          <WrongAnswer key={i} answer={answer} />
        </div>
      ))}
    </>
  );
};

const WrongAnswer = ({ answer }) => {
  const [wrongClick, setIncorrectClick] = useState("cream")
  return (
    <button onClick={() => setIncorrectClick("pink")} style={{ backgroundColor: wrongClick }} className="button">
      {answer.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#039;/g, "'")}
    </button>
  )
 
}

export default Trivia;

