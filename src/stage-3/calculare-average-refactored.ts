export function calculateAverageRefactored(note1: number, note2: number, note3: number): number {
  const notes = [note1, note2, note3];

  if (notes.some(note => note < 0 || note > 10)) {
    throw new Error('Nota inválida');
  }

  const sum = notes.reduce((acc, note) => acc + note, 0);
  return sum / notes.length;
}
