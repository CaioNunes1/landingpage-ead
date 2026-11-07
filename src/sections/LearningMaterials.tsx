import { SectionHeading } from '../components/SectionHeading';
import { learningMaterials } from '../data/course';

const studySteps = [
  { href: '#aula', title: 'Assista à aula' },
  { href: '#ebook', title: 'Aprofunde com o e-book' },
  { href: '#infografico', title: 'Revise o infográfico' },
  { href: '#exemplos', title: 'Analise os exemplos' },
  { href: '#avaliacao', title: 'Faça a avaliação' },
];

export function LearningMaterials() {
  const { ebook, infographic } = learningMaterials;

  return (
    <section id="materiais" className="section materials-section" aria-labelledby="materials-title">
      <div className="container">
        <SectionHeading
          eyebrow="LEITURA E SÍNTESE"
          title="Materiais complementares"
          description="Aprofunde os conceitos da videoaula com o e-book e consulte o infográfico para revisar as etapas da personalização de exercícios."
          id="materials-title"
        />

        <nav className="study-route" aria-label="Sequência sugerida de estudo">
          <p>SEU PERCURSO DE ESTUDO</p>
          <ol>
            {studySteps.map((step, index) => (
              <li key={step.href}>
                <a href={step.href}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  {step.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="materials-grid">
          <article id="ebook" className="material-card" aria-labelledby="ebook-title">
            <div className="material-card-top">
              <span className="material-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 8c-3-3-8-3-12-2v20c4-1 9-1 12 2 3-3 8-3 12-2V6c-4-1-9-1-12 2Zm0 0v20M8 11h4m-4 5h4m8-5h4m-4 5h4" />
                </svg>
              </span>
              <span className="material-type">E-BOOK INTERATIVO</span>
            </div>
            <h3 id="ebook-title">{ebook.title}</h3>
            <p className="material-description">Um guia prático para docentes de Computação, com perfis de estudantes, prompts reutilizáveis, exemplos em Python e critérios para validar as atividades.</p>
            <ul className="material-highlights">
              <li>Diagnóstico do perfil e progressão de dificuldade</li>
              <li>Revisão de enunciados, gabaritos e casos-limite</li>
              <li>Oficina de adaptação e boas práticas docentes</li>
            </ul>
            <div className="material-actions">
              <a className="button button--primary" href={ebook.onlineUrl} target="_blank" rel="noopener noreferrer">
                Ler e-book online <span aria-hidden="true">↗</span><span className="sr-only"> (abre em nova aba no FlipHTML5)</span>
              </a>
              <a className="material-download" href={ebook.pdfUrl} download={ebook.fileName}>Baixar e-book em PDF <span aria-hidden="true">↓</span></a>
            </div>
            <p className="material-format">Leitura online no FlipHTML5 · {ebook.format}</p>
          </article>

          <article id="infografico" className="material-card material-card--infographic" aria-labelledby="infographic-title">
            <div className="material-card-top">
              <span className="material-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="10" y="2" width="12" height="6" rx="2" /><rect x="10" y="13" width="12" height="6" rx="2" /><rect x="10" y="24" width="12" height="6" rx="2" /><path d="M16 8v5m0 6v5" />
                </svg>
              </span>
              <span className="material-type">INFOGRÁFICO</span>
            </div>
            <h3 id="infographic-title">{infographic.title}</h3>
            <p className="material-description">Uma síntese visual em sete etapas: conheça o estudante, defina o objetivo e acompanhe o processo até a aplicação e o refinamento da atividade.</p>
            <div className="material-principle">
              <span>PRINCÍPIO CENTRAL</span>
              <p>A IA sugere.<br />O professor analisa, decide e valida.</p>
            </div>
            <div className="material-actions">
              <a className="button button--primary" href={infographic.pdfUrl} target="_blank" rel="noopener noreferrer">
                Abrir infográfico em PDF <span aria-hidden="true">↗</span><span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a className="material-download" href={infographic.pdfUrl} download={infographic.fileName}>Baixar infográfico <span aria-hidden="true">↓</span></a>
            </div>
            <p className="material-format">{infographic.format}</p>
          </article>
        </div>

        <details className="infographic-transcript">
          <summary>Ler o conteúdo do infográfico em texto</summary>
          <div className="infographic-transcript-body">
            <p>Um fluxo simples para criar atividades de Computação com IA, preservando a decisão pedagógica.</p>
            <ol>{infographic.steps.map(step => <li key={step.title}><strong>{step.title}</strong><p>{step.description}</p></li>)}</ol>
            <p><strong>Princípio central:</strong> A IA sugere. O professor analisa, decide e valida.</p>
          </div>
        </details>
        <p className="materials-next">Depois da leitura, <a href="#exemplos">analise os exemplos</a> e <a href="#avaliacao">teste seus conhecimentos</a>.</p>
      </div>
    </section>
  );
}
