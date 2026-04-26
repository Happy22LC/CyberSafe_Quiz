import React from 'react';
import LessonCard from './LessonCard';
import '../styles/lesson-grid.css';

export default function LessonGrid({ lessons, activeLessonId, onOpenLesson, completedSet, correctMap }) {
  return (
    //all lesson cards in a grid layout
    <div className="lesson-grid">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          active={lesson.id === activeLessonId}
          onOpen={onOpenLesson}
          completed={completedSet.has(lesson.id)}
          correct={!!correctMap[lesson.id]}
        />
      ))}
    </div>
  );
}
