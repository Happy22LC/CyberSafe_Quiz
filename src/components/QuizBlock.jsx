import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import '../styles/quiz-block.css';

export default function QuizBlock({
  lessonId,
  quiz,
  quizNumber,
  savedAnswer,
  onAnswer,
  tip
}) {
  const isAnswered = savedAnswer !== undefined; // check user has already answered this quiz
  const isCorrect = savedAnswer === quiz.answer; // check saved answer matches the correct answer

  //render one answer option button
  const renderOption = (label, value) => {
    const selected = savedAnswer === value;

    //CSS classes based on the answer is correct or wrong
    const classes = [
      'quiz-option',
      selected && isCorrect ? 'quiz-option-correct' : '',
      selected && !isCorrect ? 'quiz-option-wrong' : '',
    ].join(' ').trim();

    return (
      <button
        type="button"
        className={classes}
        onClick={() => onAnswer(lessonId, quiz.id, value)}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="quiz-block">
      <h3>Fun Quiz {quizNumber}</h3>
      <p className="quiz-question">{quiz.question}</p>

      <div className="quiz-options">
        {quiz.type === 'mcq' ? (
          //render all available options
          quiz.options.map((option, index) => (
            <div key={index}>{renderOption(option, index)}</div>
          ))
        ) : (
          <>
            {renderOption('True', true)}
            {renderOption('False', false)}
          </>
        )}
      </div>

      {/*feedback only after user answers */}
      {isAnswered && (
        <div className={`quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
          <div className="quiz-feedback-title">
            <CheckCircle2 size={18} />
            <span>{isCorrect ? 'Correct answer' : 'Try to learn from this one'}</span>
          </div>
          <p>{quiz.explanation}</p>
          <p><strong>Safety Tip:</strong> {tip}</p>
        </div>
      )}
    </div>
  );
}