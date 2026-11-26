import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const entry = 'Diagnosis: acute reassurance dependency—you want a second opinion, as long as it agrees with the first and arrives in a soothing font.';
const primary = '/output/entry.txt';

try {
  mkdirSync('/output', { recursive: true });
  writeFileSync(primary, entry.trim(), 'utf8');
} catch {
  const here = dirname(fileURLToPath(import.meta.url));
  writeFileSync(join(here, 'entry.txt'), entry, 'utf8');
}

console.log(entry);
