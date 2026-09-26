import { course } from '../data/course';

function getYoutubeId(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return parsed.pathname.slice(1).split('/')[0];
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname === '/watch') return parsed.searchParams.get('v');
      const match = parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/);
      return match?.[1] ?? null;
    }
  } catch { return null; }
  return null;
}

export function VideoPlayer() {
  const id = getYoutubeId(course.youtubeUrl);
  return (
    <div className="video-frame">
      {id ? (
        <iframe title="Videoaula: personalização de exercícios com apoio de IA" src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" />
      ) : (
        <div className="video-placeholder" role="status">
          <div className="play-circle" aria-hidden="true"><span>▶</span></div>
          <strong>Videoaula em preparação</strong>
          <span>O vídeo aparecerá aqui assim que o link for adicionado.</span>
          <small>20–30 MIN · AULA ASSÍNCRONA</small>
        </div>
      )}
    </div>
  );
}
