import React, { useState } from "react";
import './Quiz.css';
import Questions from './QuizData'
import QuizResult from './QuizResult'

const Quiz = () => {

    const [currentQuestion, setcurrentQuestion] = useState(0)

    const [score, setScore] = useState(0)

    const [correctAnswer, setCorrectAnswer] = useState(0)

    const [showResultScreen, setShowResultScreen] = useState(false)

    const [clicked, setClicked] = useState(false)


    const handleAnswerOption = (isCorrect) => {
      

        if (isCorrect) {
            setScore(score + 10)
            setCorrectAnswer(correctAnswer + 1)

        }
        setClicked(true)

        

    }

    const handleNextOption = () => {
        setClicked(false)
        const nextOption = currentQuestion + 1
        nextOption < Questions.length
            ? (setcurrentQuestion(nextOption))
            :
            (setShowResultScreen(true))

    }

    const handlePlayAgain = ()=>{
        setcurrentQuestion(0)
        setScore(0)
        setCorrectAnswer(0)
        setShowResultScreen(false)

    }


    return (
        <>
            <div className="app">
                {
                    showResultScreen ? <QuizResult correctAnswer={correctAnswer} score={score} handlePlayAgain={handlePlayAgain}/>
                        :
                        (
                            <>
                                <div className="question-section">
                                    <h5>Score:{score}</h5>
                                    <div className="question-count">
                                        <span>Question {currentQuestion + 1} of {Questions.length}</span>
                                    </div>
                                    <div className="question-text">
                                        {Questions[currentQuestion].questionText}
                                    </div>

                                </div>

                                <div className="answer-section">
                                    {
                                        Questions[currentQuestion].answerOptions.map((ans, index) => {
                                            return <button 
                                                className={`button ${ans.isCorrect && clicked ? "correct" : "button"  }`}
                                                key={index}
                                                onClick={() => handleAnswerOption(ans.isCorrect)}
                                                disabled={clicked}
                                            >
                                                {ans.answerText}</button>
                                        })
                                    }
                                    <div className="actions">
                                        <button onClick={handlePlayAgain}>Quit</button>
                                        <button disabled={!clicked} onClick={handleNextOption}>Next</button>
                                    </div>
                                </div>

                            </>
                        )

                }




            </div>


        </>

    )

}

export default Quiz;