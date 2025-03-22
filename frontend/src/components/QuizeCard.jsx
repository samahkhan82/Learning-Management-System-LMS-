const QuizCard = ({ quiz, onStart }) => {
    return (
        <div className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <button onClick={() => onStart(quiz._id)}>Start Quiz</button>
        </div>
    );
};

export default QuizCard;
