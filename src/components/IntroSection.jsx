import React from 'react';
import '../styles/introSection.css';

export default function IntroSection() {
  // these values are displayed in the summary cards on the right side of the intro section
  const stats = [
    ['10', 'Lessons'],
    ['40', 'Quizzes'],
    ['Instant', 'Feedback'],
    ['Mobile', 'Friendly'],
  ];

  return (
    <section id="home" className="hero section container">
      <div className="hero-main panel">
        <h1>Learn online safety through 10 fun lessons and quizzes.</h1>
        <p>
          This website helps users learn about strong passwords, phishing awareness, online privacy, device protection, and safe internet behavior.
          Each lesson presents a realistic situation, explanations, and interactive quizzes that provide immediate feedback.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#lessons">Start Learning</a>
          <a className="secondary-link" href="#results">View Progress</a>
        </div>
      </div>

      <div className="hero-stats panel">
        {stats.map(([value, label]) => (
          <div key={label} className="stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
