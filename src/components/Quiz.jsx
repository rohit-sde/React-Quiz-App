import { useState } from "react";

import QUESTIONS from "../questions";
import quizCompleteimg from "../assets/quiz-complete.png";

function Quiz() {
    const [userAnswer, setuserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setuserAnswer((prevUSerAnswers) => {
            return [...prevUSerAnswers, selectedAnswer];
        });
    }

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteimg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Quiz;
