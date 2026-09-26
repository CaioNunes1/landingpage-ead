import { useState } from 'react';
import { course } from '../data/course';

const links = [
  ['inicio', 'Início'], ['sobre', 'Sobre'], ['objetivos', 'Objetivos'],
  ['aula', 'Aula'], ['exemplos', 'Exemplos'], ['avaliacao', 'Avaliação'],
  ['referencias', 'Referências'], ['conclusao', 'Conclusão'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Ir para o início" onClick={() => setOpen(false)}>
          <span className="brand-symbol" aria-hidden="true">{`{·}`}</span>
          <span className="brand-text"><strong>EXERCÍCIOS <em>+ IA</em></strong><small>MINICURSO EaD</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="main-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
      <span className="sr-only">{course.title}</span>
    </header>
  );
}
