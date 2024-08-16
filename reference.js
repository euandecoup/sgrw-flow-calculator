const gutterPipeCombos = {
  '4.5" HR': {
    //gutterDepth in mm
    gutterDepth: 55,
    "63mm Ø": {
      // all float values in l/s
      flowRate: 1.12,
    },
    "76mm Ø": {
      flowRate: 1.33,
    },
    "102mm Ø": {
      flowRate: 1.77,
    },
    "76x76mm": {
      flowRate: 1.66,
    },
    "76x102mm": {
      flowRate: 1.94,
    },
    "102x102mm": {
      flowRate: 2.22,
    },
  },
  '5" HR': {
    gutterDepth: 59,
    "63mm Ø": {
      flowRate: 1.15,
    },
    "76mm Ø": {
      flowRate: 1.37,
    },
    "102mm Ø": {
      flowRate: 1.82,
    },
    "76x76mm": {
      flowRate: 1.71,
    },
    "76x102mm": {
      flowRate: 2.0,
    },
    "102x102mm": {
      flowRate: 2.28,
    },
  },
  "Deep Flow HR": {
    gutterDepth: 100,
    "63mm Ø": {
      flowRate: 1.15,
    },
    "76mm Ø": {
      flowRate: 1.37,
    },
    "102mm Ø": {
      flowRate: 1.82,
    },
    "76x76mm": {
      flowRate: 1.71,
    },
    "76x102mm": {
      flowRate: 2.0,
    },
    "102x102mm": {
      flowRate: 2.28,
    },
  },
  '4x3" Ogee': {
    gutterDepth: 75,
    "63mm Ø": {
      flowRate: 1.16,
    },
    "76mm Ø": {
      flowRate: 1.9,
    },
    "76x76mm": {
      flowRate: 1.8,
    },
    "76x102mm": {
      flowRate: 2.41,
    },
  },
  '5x4" Ogee': {
    gutterDepth: 100,
    "63mm Ø": {
      flowRate: 1.28,
    },
    "76mm Ø": {
      flowRate: 2.19,
    },
    "102mm Ø": {
      flowRate: 3.51,
    },
    "76x76mm": {
      flowRate: 2.66,
    },
    "76x102mm": {
      flowRate: 3.1,
    },
  },
  '6x4" Ogee': {
    gutterDepth: 100,
    "63mm Ø": {
      flowRate: 1.31,
    },
    "76mm Ø": {
      flowRate: 2.22,
    },
    "102mm Ø": {
      flowRate: 3.56,
    },
    "76x76mm": {
      flowRate: 2.7,
    },
    "76x102mm": {
      flowRate: 3.14,
    },
    "102x102mm": {
      flowRate: 4.87,
    },
  },
  '8x6" Ogee': {
    gutterDepth: 150,
    "63mm Ø": {
      flowRate: 2.41,
    },
    "76mm Ø": {
      flowRate: 3.1,
    },
    "102mm Ø": {
      flowRate: 6.07,
    },
    "152mm Ø": {
      flowRate: 13.66,
    },
    "76x76mm": {
      flowRate: 4.27,
    },
    "76x102mm": {
      flowRate: 5.69,
    },
    "102x102mm": {
      flowRate: 7.59,
    },
  },
  '4x3" Box Gutter': {
    gutterDepth: 75,
    "63mm Ø": {
      flowRate: 1.62,
    },
    "76mm Ø": {
      flowRate: 2.29,
    },
    "102mm Ø": {
      flowRate: 4.08,
    },
    "76x76mm": {
      flowRate: 2.87,
    },
    "76x102mm": {
      flowRate: 3.35,
    },
    "102x102mm": {
      flowRate: 4.82,
    },
  },
  '5x4" Box Gutter': {
    gutterDepth: 100,
    "63mm Ø": {
      flowRate: 1.87,
    },
    "76mm Ø": {
      flowRate: 2.65,
    },
    "102mm Ø": {
      flowRate: 4.71,
    },
    "76x76mm": {
      flowRate: 3.31,
    },
    "76x102mm": {
      flowRate: 4.42,
    },
    "102x102mm": {
      flowRate: 5.89,
    },
  },
  '6x4" Box Gutter': {
    gutterDepth: 100,
    "63mm Ø": {
      flowRate: 1.87,
    },
    "76mm Ø": {
      flowRate: 2.65,
    },
    "102mm Ø": {
      flowRate: 4.71,
    },
    "152mm Ø": {
      flowRate: 7.07,
    },
    "76x76mm": {
      flowRate: 3.31,
    },
    "76x102mm": {
      flowRate: 4.42,
    },
    "102x102mm": {
      flowRate: 5.89,
    },
  },
  '6x6" Box Gutter': {
    "63mm Ø": {
      flowRate: 2.29,
    },
    "76mm Ø": {
      flowRate: 3.24,
    },
    "102mm Ø": {
      flowRate: 5.77,
    },
    "152mm Ø": {
      flowRate: 12.99,
    },
    "76x76mm": {
      flowRate: 4.6,
    },
    "76x102mm": {
      flowRate: 5.41,
    },
    "102x102mm": {
      flowRate: 7.21,
    },
  },
  '8x6" Box Gutter': {
    gutterDepth: 150,
    "63mm Ø": {
      flowRate: 2.29,
    },
    "76mm Ø": {
      flowRate: 3.24,
    },
    "102mm Ø": {
      flowRate: 5.77,
    },
    "152mm Ø": {
      flowRate: 12.99,
    },
    "76x76mm": {
      flowRate: 4.6,
    },
    "76x102mm": {
      flowRate: 5.41,
    },
    "102x102mm": {
      flowRate: 7.21,
    },
  },
};

module.exports = { gutterPipeCombos };
