type Props = { eyebrow: string; title: string; description?: string; light?: boolean; id?: string };

export function SectionHeading({ eyebrow, title, description, light = false, id }: Props) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
