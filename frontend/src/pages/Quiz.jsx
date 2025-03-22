import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuiz, submitQuiz } from '../api';

const Quiz = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const getQuiz = async () => {
            const data = await fetchQuiz(id);
            setQuiz(data);
        };

        getQuiz();
    }, [id]);

    const handleSubmit = async () => {
        const result = await submitQuiz(id, answers);
        alert(`Quiz submitted! Your score: ${result.score}`);
    };

    if (!quiz) return <p>Loading...</p>;

    return (
        <div>
            <h1>{quiz.title}</h1>
            {quiz.questions.map((q, index) => (
                <div key={index}>
                    <p>{q.question}</p>
                    {q.options.map((option, i) => (
                        <label key={i}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                onChange={() => setAnswers({ ...answers, [index]: option })}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
    );
};

export default Quiz;
