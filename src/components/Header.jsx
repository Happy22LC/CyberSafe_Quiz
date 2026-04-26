import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="site-logo">CyberSafe Quiz</div>
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#lessons">Lessons</a>
          <a href="#study">Learn & Quiz</a>
          <a href="#results">Results</a>
        </nav>
      </div>
    </header>
  );
}
