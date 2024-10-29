import { describe, it, expect } from 'vitest';
import { calculateAverage } from '../stage-2/calculate-average';

describe('calculateAverage', () => {
  it('should correctly calculate the average of three whole marks', () => {
    expect(calculateAverage(7, 8, 9)).toBe(8);
  });

  it('should return 0 when all scores are zero', () => {
    expect(calculateAverage(0, 0, 0)).toBe(0);
  });

  it('should correctly calculate the average with maximum marks (10, 10, 10)', () => {
    expect(calculateAverage(10, 10, 10)).toBe(10);
  });

  it('should throw an error if any of the notes are negative', () => {
    expect(calculateAverage(6.5, 7.3, 8.4)).toBeCloseTo(7.4, 1);
  });

  it('should throw an error if any of the notes are negative', () => {
    expect(() => calculateAverage(-1, 5, 7)).toThrow('Nota inválida');
  });

  it('should throw an error if any of the scores is greater than 10', () => {
    expect(() => calculateAverage(11, 9, 8)).toThrow('Nota inválida');
  });
});
