import { useState } from 'react';
import { Header } from './components/Header';
import { SectionHeading } from './components/SectionHeading';
import { Quiz } from './components/Quiz';
import { CertificateForm } from './components/CertificateForm';
import { Hero, About, Objectives, Lesson, Examples, PromptAndReview, ProcessAndPlanning } from './sections/LearningSections';
import { course, references } from './data/course';
import { LearningMaterials } from './sections/LearningMaterials';

function Evaluation({ onComplete }: { onComplete: () => void }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const canEmbed = /^https:\/\/[^/]*genially\.com\//i.test(course.evaluationUrl);
  return <section id="avaliacao" className="section evaluation-section"><div className="container evaluation-layout"><div><SectionHeading eyebrow="07 / AVALIAÇÃO INTERATIVA" title="Teste seus conhecimentos" description="Agora é sua vez. Analise perfis de estudantes, exercícios e exemplos produzidos por IA para verificar o que você aprendeu." /><div className="evaluation-aside"><span>✦</span><p>Ao responder, você recebe uma explicação para cada questão. A atividade pode ser refeita quando quiser.</p></div></div><div><Quiz onComplete={onComplete} />{canEmbed && <div className="embed-control"><button type="button" onClick={() => setShowEmbed(!showEmbed)} aria-expanded={showEmbed}>{showEmbed ? 'Ocultar' : 'Exibir'} avaliação Genially nesta página</button>{showEmbed && <div className="evaluation-embed"><iframe title="Avaliação interativa no Genially" src={course.evaluationUrl} loading="lazy" allowFullScreen /></div>}</div>}</div></div></section>;
}

function References() {
  return <section id="referencias" className="section section--white references-section"><div className="container references-layout"><SectionHeading eyebrow="08 / PARA APROFUNDAR" title="Referências" description="Espaço reservado para as fontes efetivamente utilizadas na videoaula." /><div className="reference-list">{references.map((reference, index) => <div className="reference-row" key={`${reference.title}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{reference.title}</strong><p>{reference.author}</p></div>{/^https?:\/\//i.test(reference.url) ? <a href={reference.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir referência: ${reference.title}`}>↗</a> : <span className="reference-pending">A INSERIR</span>}</div>)}</div></div></section>;
}

function Conclusion({ quizComplete }: { quizComplete: boolean }) {
  return <section id="conclusao" className="conclusion-section"><div className="container"><div className="conclusion-message"><span className="eyebrow"><span className="eyebrow-line" /> 09 / CONCLUSÃO</span><h2>O olhar do professor<br /><em>faz a diferença.</em></h2><p>A IA pode acelerar a criação e adaptação de exercícios, mas a decisão pedagógica e a validação continuam sendo responsabilidade do professor.</p><div className="recap"><span>CONTEXTUALIZE</span><b aria-hidden="true">→</b><span>ADAPTE</span><b aria-hidden="true">→</b><span>REVISE</span><b aria-hidden="true">→</b><span>TESTE</span></div></div><div className="completion-card"><div className="completion-intro"><span className="eyebrow"><span className="eyebrow-line" /> ÚLTIMA ETAPA</span><h2>Finalize sua participação</h2><p>Após concluir o conteúdo e a avaliação, informe seu nome para gerar um comprovante de participação em PDF.</p><div className="document-note">▤ &nbsp; Documento de participação gerado localmente, sem caráter de certificado institucional oficial.</div></div><CertificateForm quizComplete={quizComplete} /></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><strong>{course.title}</strong><p>Trilha Docência Digital na Era da IA · {course.trail}</p></div><div><span>Autoria: {course.author}</span><a href="#inicio">Voltar ao início ↑</a></div></div></footer>;
}

export default function App() {
  const [quizComplete, setQuizComplete] = useState(false);
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero /><About /><Objectives /><Lesson /><LearningMaterials /><Examples /><PromptAndReview /><ProcessAndPlanning /><Evaluation onComplete={() => setQuizComplete(true)} /><References /><Conclusion quizComplete={quizComplete} /></main><Footer /></>;
}
