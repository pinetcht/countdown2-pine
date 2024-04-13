
import React, { useEffect, useState } from "react";


const Trivia = () => {
  const[questions, setQuestion] = useState(null)
  
  useEffect(() => {
    const fetchData = async () =>{
      const data = await fetch('https://opentdb.com/api.php?amount=10');
      const json = await data.json();

      if(json.results){
        setQuestion(json.results);
      }

      console.log(data)
    }
    fetchData();

    fetchData().catch(console.error)
  },[])
   
   return (
    <>
      <h1>Trivia App</h1>
      {questions && questions.map((question, index) => (
        <>
        <h2 key={index}>{question.question}</h2>
        <ul>
          <li><button>{question.correct_answer}</button></li>
          question.incorrect_answers.forEach((answer) => )

          forEach({})
          <li>{question.incorrect_answers}</li>
        </ul>
        </>
     
      ))}
      
    </>
   );
};

export default Trivia;