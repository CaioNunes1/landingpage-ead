import { jsPDF } from 'jspdf';
import { course } from '../data/course';

export function sanitizeFileName(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'participante';
}

export function generateParticipationPdf(name: string, institution: string) {
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const width = 297;
  const date = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date());
  const cleanName = name.trim().replace(/\s+/g, ' ');
  const cleanInstitution = institution.trim().replace(/\s+/g, ' ');

  pdf.setFillColor(248, 250, 252); pdf.rect(0, 0, 297, 210, 'F');
  pdf.setFillColor(11, 29, 53); pdf.rect(0, 0, 297, 13, 'F');
  pdf.setFillColor(19, 163, 193); pdf.rect(0, 13, 82, 2, 'F');
  pdf.setDrawColor(207, 219, 228); pdf.setLineWidth(0.35); pdf.rect(13, 25, 271, 171);
  pdf.setTextColor(15, 38, 68); pdf.setFont('helvetica', 'bold'); pdf.setFontSize(10);
  pdf.text('DOCÊNCIA DIGITAL NA ERA DA IA  /  ENSINO E APRENDIZAGEM NA EaD', width / 2, 38, { align: 'center' });
  pdf.setTextColor(19, 130, 161); pdf.setFontSize(18);
  pdf.text('COMPROVANTE DE PARTICIPAÇÃO', width / 2, 59, { align: 'center' });
  pdf.setDrawColor(19, 163, 193); pdf.setLineWidth(0.6); pdf.line(116, 65, 181, 65);
  pdf.setTextColor(70, 86, 106); pdf.setFont('helvetica', 'normal'); pdf.setFontSize(12);
  pdf.text('Certificamos, para fins de participação, que', width / 2, 79, { align: 'center' });
  pdf.setTextColor(11, 29, 53); pdf.setFont('helvetica', 'bold'); pdf.setFontSize(cleanName.length > 48 ? 17 : 23);
  pdf.text(cleanName, width / 2, 92, { align: 'center', maxWidth: 245 });
  pdf.setTextColor(70, 86, 106); pdf.setFont('helvetica', 'normal'); pdf.setFontSize(12);
  pdf.text('concluiu o minicurso', width / 2, 104, { align: 'center' });
  pdf.setTextColor(15, 38, 68); pdf.setFont('helvetica', 'bold'); pdf.setFontSize(17);
  pdf.text(course.fullTitle, width / 2, 117, { align: 'center', maxWidth: 255 });
  pdf.setTextColor(70, 86, 106); pdf.setFont('helvetica', 'normal'); pdf.setFontSize(11);
  pdf.text(`da trilha ${course.trail}.`, width / 2, 128, { align: 'center' });
  if (cleanInstitution) pdf.text(`Curso/instituição informado(a): ${cleanInstitution}`, width / 2, 137, { align: 'center', maxWidth: 240 });
  pdf.setDrawColor(207, 219, 228); pdf.line(35, 147, 262, 147);
  pdf.setFontSize(10);
  const detail = 'Conteúdos: perfis de estudantes, prompts com contexto pedagógico, progressão de dificuldade, análise de enunciados e revisão de gabaritos gerados com apoio de IA.';
  pdf.text(pdf.splitTextToSize(detail, 220), width / 2, 157, { align: 'center' });
  pdf.setTextColor(15, 38, 68); pdf.setFont('helvetica', 'bold'); pdf.setFontSize(9);
  pdf.text(`Autor(a): ${course.author}`, 36, 181, { maxWidth: 115 });
  pdf.text(`Carga horária: ${course.workload}`, width / 2, 181, { align: 'center' });
  pdf.text(`Gerado em ${date}`, 262, 181, { align: 'right' });
  pdf.setFillColor(19, 163, 193); pdf.rect(0, 207, 297, 3, 'F');
  pdf.save(`comprovante-${sanitizeFileName(cleanName)}.pdf`);
}
