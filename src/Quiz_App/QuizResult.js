import React from "react";
import Questions from './QuizData'


const QuizResult = (props) =>{

return(

    <>
        <div className="score-section">
                <h2>Completed!</h2>
                <h4>Total Score {props.score}/50</h4>
                <h4>Your Correct Question {props.correctAnswer} out of {Questions.length}</h4>
                <button className="btn" onClick={props.handlePlayAgain}>Play Again</button>




        </div>
    
    
    
    </>
)    

}

export default QuizResult;