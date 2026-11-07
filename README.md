# Minicurso EaD — Personalização de exercícios com apoio de IA

Site front-end em React, TypeScript e Vite. Inclui videoaula incorporável, exemplos de adaptação, avaliação interativa com feedback e comprovante de participação em PDF gerado no navegador.

## Executar localmente

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite. Para validar a versão de produção, execute `npm run build` e, se desejar, `npm run preview`.

Com o servidor local aberto, `npm run test:e2e` verifica navegação, versão mobile, avaliação, PDF e erros de console usando o Microsoft Edge instalado. Se o navegador estiver em outro local, defina `EDGE_PATH` antes de executar o teste.

## Personalizar o conteúdo

Edite **`src/data/course.ts`**:

- `AUTHOR_NAME`: nome exibido no início, rodapé e PDF.
- `YOUTUBE_VIDEO_URL`: endereço completo do vídeo no YouTube. Aceita links `youtube.com/watch`, `youtu.be`, `embed`, `shorts` e `live`. Enquanto estiver como placeholder, o site mostra um estado de preparação.
- `EVALUATION_URL`: endereço completo da avaliação externa. Quando configurado, o botão “Realizar avaliação” a abre em nova aba. A avaliação integrada permanece disponível em “Responder aqui”. Um link Genially também pode ser exibido em iframe opcional.
- `references`: substitua os títulos e autores marcados como placeholders pelas fontes utilizadas. Adicione o campo `url` quando houver link.
- `course`, `profiles`, `objectives` e `quizQuestions`: dados adicionais do minicurso.

## Materiais complementares da 2ª VA

A seção “Materiais complementares”, após a videoaula, reúne o e-book interativo no FlipHTML5 e o infográfico. O menu “Materiais” leva diretamente a essa seção. O percurso sugerido é: videoaula → e-book → infográfico → exemplos → avaliação.

Os links, títulos e a transcrição textual do infográfico ficam em `learningMaterials`, no arquivo `src/data/course.ts`. As cópias em PDF estão em `public/materiais/` e acompanham o build e a publicação na Vercel. O e-book pode ser lido online ou baixado; o infográfico pode ser aberto em nova aba ou baixado. Para atualizar os PDFs, substitua os arquivos mantendo os nomes, ou ajuste os caminhos em `learningMaterials`.

## Comprovante

Depois de confirmar a participação na aula e na avaliação, o visitante informa seu nome e pode gerar `comprovante-nome-do-participante.pdf`. O nome do arquivo é sanitizado. O PDF é montado com **jsPDF no navegador**; os dados não são enviados a servidor. O documento é um **comprovante de participação**, sem caráter de certificado institucional.

## Publicar na Vercel

Importe este repositório na Vercel. Use o preset **Vite**, comando de build `npm run build` e diretório de saída `dist`. Não são necessárias variáveis de ambiente ou backend.

## Estrutura

```text
src/
  components/     Header, vídeo, avaliação, formulário e títulos
  data/course.ts  Dados e links editáveis
  lib/pdf.ts       Geração do comprovante
  sections/       Seções didáticas
  App.tsx         Composição da página
  styles.css      Identidade visual e responsividade
```

## Acessibilidade

O site utiliza seções semânticas, hierarquia de títulos, link para pular ao conteúdo, navegação por teclado, indicadores de foco, rótulos de campos, feedback anunciado, contraste alto e respeito à preferência por movimento reduzido.
