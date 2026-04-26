import React from 'react';
import { Trophy } from 'lucide-react';
import '../styles/progress-panel.css';

export default function ProgressPanel({ stats }) {
  //scroll page back to the lessons section when clicks the "Go to Lessons" button
  const goToLessons = () => {
    const section = document.getElementById('lessons');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="panel progress-panel">
      <div className="progress-header">
        <div className="progress-icon">
          <Trophy size={24} />
        </div>
        <div>
          <h2>Your Progress</h2>
          <p>Track how many quizzes you completed and how many answers were correct.</p>
        </div>
      </div>

      {/* quickly navigate back to lesson cards */}
      <div className="progress-actions">
        <button className="go-lessons-button" onClick={goToLessons}>
          Go to Lessons
        </button>
      </div>

      <div className="progress-bar-shell">
        <div
          className="progress-bar-fill"
          style={{ width: `${stats.percent}%` }}
        />
      </div>

      {/*summary cards showing progress information */}
      <div className="progress-stats-grid">
        <div className="progress-card">
          <p>Completed Quizzes</p>
          <strong>{stats.completed}</strong>
        </div>

        <div className="progress-card">
          <p>Correct Answers</p>
          <strong>{stats.correct}</strong>
        </div>

        <div className="progress-card">
          <p>Total Quizzes</p>
          <strong>{stats.total}</strong>
        </div>

        {/*badge level earned based on correct answers */}
        <div className="progress-card">
          <p>Badge</p>
          <strong className="badge-name">{stats.badge}</strong>
        </div>
      </div>
    </div>
  );
}