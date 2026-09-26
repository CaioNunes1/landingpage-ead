import { useState } from 'react';
import { course, quizQuestions } from '../data/course';

type Props = { onComplete: () => void };

const externalUrl = /^https?:\/\//i.test(course.evaluationUrl) ? course.evaluationUrl : null;

export function Quiz({ onComplete }: Props) {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = quizQuestions[questionIndex];

  function confirm() {
    if (selected === null) return;
    if (selected === question.correct) setScore(score + 1);
    setConfirmed(true);
  }

  function next() {
    if (questionIndex + 1 === quizQuestions.length) {
      setFinished(true);
      onComplete();
    } else {
      setQuestionIndex(questionIndex + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }

  function restart() {
    setQuestionIndex(0); setSelected(null); setConfirmed(false); setScore(0); setFinished(false); setStarted(true);
  }

  return (
    <div className="quiz-shell">
      {!started && <div className="quiz-intro">
        <div className="quiz-symbol" aria-hidden="true">?</div>
        <div><strong>5 questões · feedback imediato</strong><p>Analise perfis, prompts, enunciados e gabaritos. Responda no seu ritmo.</p></div>
        {externalUrl ? <div className="quiz-start-actions"><a className="button button--primary" href={externalUrl} target="_blank" rel="noopener noreferrer">Realizar avaliação <span aria-hidden="true">↗</span></a><button className="button button--outline-dark" type="button" onClick={() => setStarted(true)}>Responder aqui</button></div> : <button className="button button--primary" type="button" onClick={() => setStarted(true)}>Realizar avaliação <span aria-hidden="true">↗</span></button>}
      </div>}

      {started && !finished && <div className="quiz-question">
        <div className="quiz-topline"><span>QUESTÃO {String(questionIndex + 1).padStart(2, '0')} / {String(quizQuestions.length).padStart(2, '0')}</span><span>{Math.round((questionIndex / quizQuestions.length) * 100)}% concluído</span></div>
        <div className="progress-track" aria-hidden="true"><span style={{ width: `${((questionIndex + 1) / quizQuestions.length) * 100}%` }} /></div>
        <h3 id="question-title">{question.prompt}</h3>
        <fieldset aria-labelledby="question-title" disabled={confirmed}>
          <legend className="sr-only">Escolha uma resposta</legend>
          {question.options.map((option, index) => <label key={option} className={`quiz-option ${selected === index ? 'quiz-option--selected' : ''} ${confirmed && index === question.correct ? 'quiz-option--correct' : ''} ${confirmed && selected === index && index !== question.correct ? 'quiz-option--wrong' : ''}`}>
            <input type="radio" name={`q-${questionIndex}`} checked={selected === index} onChange={() => setSelected(index)} />
            <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{option}</span>
          </label>)}
        </fieldset>
        {confirmed && <div className={`feedback ${selected === question.correct ? 'feedback--correct' : 'feedback--wrong'}`} role="status"><strong>{selected === question.correct ? 'Resposta correta.' : 'Vamos revisar.'}</strong> {question.explanation}</div>}
        <div className="quiz-actions">{!confirmed ? <button className="button button--primary" type="button" disabled={selected === null} onClick={confirm}>Conferir resposta</button> : <button className="button button--primary" type="button" onClick={next}>{questionIndex + 1 === quizQuestions.length ? 'Ver resultado' : 'Próxima questão'} <span aria-hidden="true">→</span></button>}</div>
      </div>}

      {finished && <div className="quiz-result" role="status"><div className="result-mark" aria-hidden="true">✓</div><span className="eyebrow">ATIVIDADE CONCLUÍDA</span><h3>Você chegou ao final.</h3><p>Você acertou <strong>{score} de {quizQuestions.length}</strong> questões. Use os feedbacks para revisar os pontos que ainda geram dúvidas.</p><button className="button button--outline-dark" type="button" onClick={restart}>Refazer avaliação</button></div>}

      {externalUrl && <div className="external-evaluation"><span>Também existe uma avaliação externa disponível.</span><a href={externalUrl} target="_blank" rel="noopener noreferrer">Abrir avaliação externa <span aria-hidden="true">↗</span></a></div>}
    </div>
  );
}
