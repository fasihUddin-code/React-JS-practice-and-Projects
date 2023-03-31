import React from "react";
import './Quiz.css';

const Quiz = ()=>{

//console.log('Quiz Component');

return
  
    <>
        <div className="app">
            <div className="question-section">
                <h5>Score:5</h5>
                <div className="question-count">
                    <span>Question 1 of 5</span>
                </div> 
                <div className="question-text">
                    Question 1
                </div>    

            </div>

            <div className="answer-section">
                <button>Answer</button>
            </div>

        </div>


    </>
 


}

export default Quiz