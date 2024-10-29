import { describe, it, expect } from 'vitest';
import { calculateAverageRefactored } from '../stage-3/calculare-average-refactored';

describe('calculateAverage', () => {
  it('should correctly calculate the average of three whole marks', () => {
    expect(calculateAverageRefactored(7, 8, 9)).toBe(8);
  });

  it('should return 0 when all scores are zero', () => {
    expect(calculateAverageRefactored(0, 0, 0)).toBe(0);
  });

  it('should correctly calculate the average with maximum marks (10, 10, 10)', () => {
    expect(calculateAverageRefactored(10, 10, 10)).toBe(10);
  });

  it('should throw an error if any of the notes are negative', () => {
    expect(calculateAverageRefactored(6.5, 7.3, 8.4)).toBeCloseTo(7.4, 1);
  });

  it('should throw an error if any of the notes are negative', () => {
    expect(() => calculateAverageRefactored(-1, 5, 7)).toThrow('Nota inválida');
  });

  it('should throw an error if any of the scores is greater than 10', () => {
    expect(() => calculateAverageRefactored(11, 9, 8)).toThrow('Nota inválida');
  });
});
