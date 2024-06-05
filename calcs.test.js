const {pitchAdjustmentConvertor, effectiveRoofArea} = require('./calcs');

describe('pitchAdjustmentConvertor', () => {
  test('converts 30 pitch to 1.29 float', () => {
      expect(pitchAdjustmentConvertor(30)).toBe(1.29);
    });
    
  test('converts 45 pitch to 1.5 float', () => {
      expect(pitchAdjustmentConvertor(45)).toBe(1.5);
    });
    
  test('converts 60 pitch to 1.87 float', () => {
      expect(pitchAdjustmentConvertor(60)).toBe(1.87);
    });
    
  test('returns 0 for any other pitch', () => {
      expect(pitchAdjustmentConvertor(0)).toBe(0);
      expect(pitchAdjustmentConvertor(15)).toBe(0);
      expect(pitchAdjustmentConvertor(75)).toBe(0);
    });
})

describe('effectiveRoofArea', () => {
  test('calculates correctly with all arguments', () => {
    expect(effectiveRoofArea(10, 5, 0.8)).toBe(40);
  });

  test('calculates correctly with default values', () => {
    expect(effectiveRoofArea()).toBe(0);
    expect(effectiveRoofArea(10)).toBe(0);
    expect(effectiveRoofArea(10, 5)).toBe(0);
  });

  test('throws an error for non-numeric arguments', () => {
    expect(() => effectiveRoofArea('a', 5, 0.8)).toThrow('Arguments must be numbers');
    expect(() => effectiveRoofArea(10, 'b', 0.8)).toThrow('Arguments must be numbers');
    expect(() => effectiveRoofArea(10, 5, 'c')).toThrow('Arguments must be numbers');
  });
})
