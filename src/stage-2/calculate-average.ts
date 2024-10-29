export function calculateAverage(note1: number, note2: number, note3: number): number {
  if (note1 < 0 || note1 > 10 || note2 < 0 || note2 > 10 || note3 < 0 || note3 > 10) {
    throw new Error('Nota inválida');
  }

  const sum = note1 + note2 + note3;
  const average = sum / 3;

  return average;
}