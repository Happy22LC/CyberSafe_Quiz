import React from 'react';
import '../styles/lesson-card.css';

export default function LessonCard({ lesson, active, onOpen, completed, correct }) {
  //icon component stored in the lesson data
  const Icon = lesson.icon;

  // handle click on a lesson card
  // open the selected lesson
  // smoothly scroll to the lesson detail
  const handleClick = () => {
    onOpen(lesson.id);

    const section = document.getElementById('study');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    //lesson card is clickable like a button
    <button className="lesson-card-button" onClick={handleClick}>
      <div className={`lesson-card ${active ? 'lesson-card-active' : ''}`}>
        <div className="lesson-card-top">
          <div className="lesson-icon-box">
            <Icon size={18} />
          </div>

          {/* show different badge text depending on quiz completion */}
          {completed ? (
            <span className={`lesson-badge ${correct ? 'badge-success' : 'badge-review'}`}>
              {correct ? 'Passed' : 'Reviewed'}
            </span>
          ) : (
            <span className="lesson-badge badge-neutral">Lesson + Quiz</span>
          )}
        </div>

        <h3>{lesson.title}</h3>
        <p>{lesson.objective}</p>
      </div>
    </button>
  );
}