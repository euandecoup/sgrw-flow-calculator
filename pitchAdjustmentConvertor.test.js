const {pitchAdjustmentConvertor} = require('./calc');

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

