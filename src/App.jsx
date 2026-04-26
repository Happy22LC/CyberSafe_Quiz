import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import LessonGrid from './components/LessonGrid';
import LessonDetail from './components/LessonDetail';
import ProgressPanel from './components/ProgressPanel';
import Footer from './components/Footer';
import lessons from './data/lessons';
import './styles/app.css';

//assigns a badge name based on how many quiz answers are correct
function getBadge(correct) {
  if (correct >= 30) return 'Cyber Hero';
  if (correct >= 20) return 'Cyber Detective';
  if (correct >= 10) return 'Safety Explorer';
  return 'New Learner';
}

  //load the last opened lesson from localStorage
  // if nothing is saved yet, default to lesson 1
export default function App() {
  const [activeLessonId, setActiveLessonId] = useState(() => {
    const savedLesson = localStorage.getItem('cybersafe_active_lesson');
    return savedLesson ? Number(savedLesson) : 1;
  });

  // load saved quiz answers from localStorage
  // if nothing is saved yet, start with an empty object
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem('cybersafe_answers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  // save answers to localStorage every time answers change
  useEffect(() => {
    localStorage.setItem('cybersafe_answers', JSON.stringify(answers));
  }, [answers]);
  
  // save selected lesson to localStorage every time activeLessonId changes
  useEffect(() => {
    localStorage.setItem('cybersafe_active_lesson', String(activeLessonId));
  }, [activeLessonId]);

  //find the lesson object that matches with selected lesson ID
  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId);

  //count the total number of quiz questions
  const totalQuestions = useMemo(() => {
    return lessons.reduce((sum, lesson) => sum + (lesson.quizzes?.length || 0), 0);
  }, []);

  //calculate progress whenever answers change
  const stats = useMemo(() => {
    const completed = Object.keys(answers).length; // number of quiz questions answered

     //correctly answered quiz questions
    const correct = Object.entries(answers).filter(([key, value]) => {
      const [lessonId, quizId] = key.split('-').map(Number);
      const lesson = lessons.find((item) => item.id === lessonId);
      const quiz = lesson?.quizzes?.find((q) => q.id === quizId);
      return quiz && quiz.answer === value;
    }).length;

    // return all progress related values in one object
    return {
      completed,
      correct,
      total: totalQuestions,
      percent: totalQuestions ? (completed / totalQuestions) * 100 : 0,
      badge: getBadge(correct),
    };
  }, [answers, totalQuestions]);

  // save selected answer
  // the key format is "lessonId-quizId"
  const handleAnswer = (lessonId, quizId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [`${lessonId}-${quizId}`]: value,
    }));
  };

  //open a lesson and smoothly scroll to lesson detail and quiz section
  const handleOpenLesson = (lessonId) => {
    setActiveLessonId(lessonId);

    const section = document.getElementById('study');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //reset all saved progress both in React state and localStorage
  const resetProgress = () => {
    setAnswers({});
    setActiveLessonId(1);
    localStorage.removeItem('cybersafe_answers');
    localStorage.removeItem('cybersafe_active_lesson');
  };

  //set of lesson IDs where all quizzes have been answered
  const completedSet = new Set(
    lessons
      .filter((lesson) =>
        lesson.quizzes?.every((quiz) => answers[`${lesson.id}-${quiz.id}`] !== undefined)
      )
      .map((lesson) => lesson.id)
  );

  // track which lessons have all quiz answers correct
  const correctMap = {};
  lessons.forEach((lesson) => {
    const allCorrect = lesson.quizzes?.every(
      (quiz) => answers[`${lesson.id}-${quiz.id}`] === quiz.answer
    );
    correctMap[lesson.id] = !!allCorrect;
  });

  return (
    <div className="app-shell">
      <Header />
      <main>
        <IntroSection />

        <section id="lessons" className="section container lessons-section">
          <div className="section-head">
            <div>
              <h2>Lesson Plan Overview</h2>
              <p>Choose any lesson card to study the topic and answer the quizzes.</p>
            </div>
            <button className="danger-button" onClick={resetProgress}>
              Reset Progress
            </button>
          </div>

          <LessonGrid
            lessons={lessons}
            activeLessonId={activeLessonId}
            onOpenLesson={handleOpenLesson}
            completedSet={completedSet}
            correctMap={correctMap}
          />
        </section>

        <section id="study" className="section container">
          <LessonDetail
            lesson={activeLesson}
            savedAnswers={answers}
            onAnswer={handleAnswer}
          />
        </section>

        <section id="results" className="section container">
          <ProgressPanel stats={stats} />
        </section>
      </main>
      <Footer />
    </div>
  );
}