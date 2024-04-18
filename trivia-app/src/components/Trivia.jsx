
import React, { useEffect, useState } from "react";
import "../style/Trivia.css"


const Trivia = () => {
  const [questions, setQuestion] = useState(null)
  const [rightClick, setCorrectClick] = useState("white")
  const [wrongClick, setIncorrectClick] = useState("white")

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
  }, [])

  return (
    <>
      <h1>Trivia App</h1>
      {questions && questions.map((question, index) => (
        <>
          <h2 key={index}>{question.question}</h2>
            <div>
                <button onClick={() => setCorrectClick("green")} style={{backgroundColor: rightClick}}>{question.correct_answer}</button>
            </div>
            {question.incorrect_answers.map((answer, i) => (
              <div>
                <button key={i} onClick={() => setIncorrectClick("pink")} style={{backgroundColor: wrongClick}}>{answer}</button>
              </div>
              ))}
            
        </>

      ))}

    </>
  );
};

export default Trivia;