import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';

const executablePath = process.env.EDGE_PATH || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const baseUrl = process.env.TEST_URL || 'http://127.0.0.1:5173/';
const browser = await chromium.launch({ executablePath, headless: true });
const errors = [];

try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
  desktop.on('pageerror', error => errors.push(error.message));
  desktop.on('console', message => { if (message.type() === 'error') errors.push(`${message.location().url}: ${message.text()}`); });
  await desktop.goto(baseUrl);
  await desktop.getByRole('heading', { level: 1 }).waitFor();

  for (const id of ['inicio', 'sobre', 'objetivos', 'aula', 'exemplos', 'avaliacao', 'referencias', 'conclusao']) {
    assert.equal(await desktop.locator(`#${id}`).count(), 1, `Seção #${id} ausente`);
  }
  await desktop.locator('nav a[href="#sobre"]').click();
  assert.equal(new URL(desktop.url()).hash, '#sobre');
  assert.equal(await desktop.locator('.video-placeholder, .video-frame iframe').count(), 1, 'Videoaula ou placeholder ausente');

  await desktop.locator('#avaliacao').scrollIntoViewIfNeeded();
  if (await desktop.getByRole('button', { name: /Realizar avaliação/ }).count()) {
    await desktop.getByRole('button', { name: /Realizar avaliação/ }).click();
  } else {
    await desktop.getByRole('button', { name: 'Responder aqui' }).click();
  }
  for (const correct of [1, 1, 1, 0, 1]) {
    await desktop.locator('.quiz-option').nth(correct).click();
    await desktop.getByRole('button', { name: 'Conferir resposta' }).click();
    assert.match(await desktop.locator('.feedback').innerText(), /Resposta correta/);
    await desktop.getByRole('button', { name: /Próxima questão|Ver resultado/ }).click();
  }
  assert.match(await desktop.locator('.quiz-result').innerText(), /5 de 5/);
  await desktop.locator('input[autocomplete="name"]').fill('Ana Beatriz Silva');
  await desktop.locator('input[autocomplete="organization"]').fill('Curso de Computação');
  await desktop.locator('.declarations input').first().check();
  const downloadPromise = desktop.waitForEvent('download');
  await desktop.getByRole('button', { name: /Gerar comprovante/ }).click();
  const download = await downloadPromise;
  assert.equal(download.suggestedFilename(), 'comprovante-ana-beatriz-silva.pdf');
  const pdf = await readFile(await download.path());
  assert.equal(pdf.subarray(0, 4).toString(), '%PDF');
  assert.ok(pdf.length > 1000, 'PDF vazio');
  assert.ok(pdf.toString('latin1').includes('Ana Beatriz Silva'), 'Nome ausente no conteúdo do PDF');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 1 });
  mobile.on('pageerror', error => errors.push(error.message));
  await mobile.goto(baseUrl);
  const dimensions = await mobile.evaluate(() => ({ viewport: innerWidth, content: document.documentElement.scrollWidth }));
  assert.ok(dimensions.content <= dimensions.viewport, `Rolagem horizontal no celular: ${JSON.stringify(dimensions)}`);
  await mobile.getByRole('button', { name: 'Abrir menu' }).click();
  await mobile.locator('nav a[href="#avaliacao"]').click();
  assert.equal(new URL(mobile.url()).hash, '#avaliacao');
  assert.equal(await mobile.getByRole('button', { name: 'Abrir menu' }).getAttribute('aria-expanded'), 'false');

  assert.deepEqual(errors, [], `Erros de navegador: ${errors.join('; ')}`);
  console.log('E2E OK: desktop, mobile, âncoras, vídeo, quiz, PDF e console.');
} finally {
  await browser.close();
}
