const {pitchAdjustmentConvertor, effectiveRoofArea, runOff, flowRate, capacityCheck, halfDistanceBetweenOutlets} = require('./calcs');

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

describe('runOff', ()=> {
  test('calculates runoff correctly with valid effective roof area', () => {
    expect(runOff(40)).toBe(0.88);
});

test('calculates runoff correctly with zero effective roof area', () => {
    expect(runOff(0)).toBe(0);
});
})

describe('flowRate', () => {
  test('calculates flow rate correctly', () => {
    expect(flowRate(10, 2)).toBe(5.00);
    expect(flowRate(12.5, 3)).toBeCloseTo(4.17, 2);
});

test('handles zero runoff volume', () => {
    expect(flowRate(0, 2)).toBe(0.00); 
});

test('throws an error for non-numeric arguments', () => {
    expect(() => flowRate('a', 2)).toThrow('Arguments must be numbers');
    expect(() => flowRate(10, 'b')).toThrow('Arguments must be numbers');
});

test('handles division by zero gracefully', () => {
    expect(() => flowRate(10, 0)).toThrow('Minimum of 1 outlet required');
});
})

describe('capacityCheck', () => {
  test('returns adequate capacity for valid combination and sufficient flow', () => {
    expect(capacityCheck(1.0, "4.5\" HR", "76mm Ø")).toBe("Adequate Capacity");
});

test('returns inadequate capacity for valid combination and excessive flow', () => {
    expect(capacityCheck(1.5, "4.5\" HR", "76mm Ø")).toBe("Inadequate Capacity");
});

test('throws an error for invalid gutter profile', () => {
    expect(() => capacityCheck(1.0, "Invalid Gutter", "76mm Ø")).toThrow("Invalid gutter-pipe profile combination");
});

test('throws an error for invalid pipe profile', () => {
    expect(() => capacityCheck(1.0, "4.5\" HR", "Invalid Pipe")).toThrow("Invalid gutter-pipe profile combination");
});
})

describe('halfDistanceBetweenOutlets', () => {
  test('calculates half distance correctly', () => {
    expect(halfDistanceBetweenOutlets(10)).toBe(5.00);
    expect(halfDistanceBetweenOutlets(8.4)).toBe(4.20);
});

test('throws an error for non-numeric arguments', () => {
    expect(() => halfDistanceBetweenOutlets('a')).toThrow('Arguments must be numbers');
    expect(() => halfDistanceBetweenOutlets(null)).toThrow('Arguments must be numbers');
});
})