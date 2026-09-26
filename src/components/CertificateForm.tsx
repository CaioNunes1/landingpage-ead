import { useState, type FormEvent } from 'react';

type Props = { quizComplete: boolean };

export function CertificateForm({ quizComplete }: Props) {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [watched, setWatched] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !watched || !(evaluated || quizComplete)) return;
    try {
      const { generateParticipationPdf } = await import('../lib/pdf');
      generateParticipationPdf(name, institution);
      setMessage('Seu comprovante foi gerado e o download foi iniciado.');
    } catch {
      setMessage('Não foi possível gerar o PDF neste navegador. Tente novamente.');
    }
  }

  return (
    <form className="certificate-form" onSubmit={submit}>
      <div className="field-row">
        <label>Nome completo <span aria-hidden="true">*</span><input value={name} onChange={event => setName(event.target.value)} autoComplete="name" required maxLength={90} placeholder="Seu nome completo" /></label>
        <label>Curso ou instituição <small>(opcional)</small><input value={institution} onChange={event => setInstitution(event.target.value)} autoComplete="organization" maxLength={100} placeholder="Sua instituição" /></label>
      </div>
      <div className="declarations">
        <label><input type="checkbox" checked={watched} onChange={event => setWatched(event.target.checked)} required /><span>Assisti à videoaula e analisei os exemplos do minicurso.</span></label>
        <label><input type="checkbox" checked={quizComplete || evaluated} onChange={event => setEvaluated(event.target.checked)} disabled={quizComplete} required /><span>{quizComplete ? 'Avaliação interativa concluída neste site.' : 'Concluí a avaliação interativa ou externa.'}</span></label>
      </div>
      <button className="button button--primary button--full" type="submit">Gerar comprovante de participação <span aria-hidden="true">↓</span></button>
      <p className="privacy-note"><span aria-hidden="true">⌁</span> Seus dados são usados somente neste navegador para gerar o PDF. Não são enviados ou armazenados em servidor.</p>
      {message && <p className="form-message" role="status">{message}</p>}
    </form>
  );
}
