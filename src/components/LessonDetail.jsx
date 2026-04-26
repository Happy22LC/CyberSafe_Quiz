import React from 'react';
import QuizBlock from './QuizBlock';
import '../styles/lesson-detail.css';

export default function LessonDetail({ lesson, savedAnswers, onAnswer }) {
  // if no lesson is selected yet show a default message
  if (!lesson) {
    return (
      <div className="panel lesson-detail-panel">
        <h2>Select a lesson</h2>
        <p>Choose a lesson card to view the lesson content, realistic scenario, and its quizzes.</p>
      </div>
    );
  }

  return (
    // main panel for selected lesson details
    <div className="panel lesson-detail-panel">
      {/*info chips showing lesson number, category, and quiz count */}
      <div className="lesson-detail-chips">
        <span>Lesson {lesson.id} of 10</span>
        <span>Cybersecurity</span>
        <span>{lesson.quizzes?.length || 0} Quizzes</span>
      </div>

      <h2>{lesson.title}</h2>
      <p className="lesson-detail-objective">{lesson.objective}</p>

      <div className="lesson-content-box">
        <h3>Lesson Content</h3>
        <ul>
          {/*show each content as list item */}
          {lesson.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="scenario-box">
        <h3>Realistic Scenario</h3>
        <p>{lesson.scenario}</p>
      </div>
{/*render all quizzes for the selected lesson */}
      <div className="lesson-quizzes-wrapper">
        {lesson.quizzes && lesson.quizzes.map((quiz, index) => (
          <QuizBlock
            key={quiz.id}
            lessonId={lesson.id}
            quiz={quiz}
            quizNumber={index + 1}
            savedAnswer={savedAnswers?.[`${lesson.id}-${quiz.id}`]}
            onAnswer={onAnswer}
            tip={lesson.tip}
          />
        ))}
      </div>
    </div>
  );
}