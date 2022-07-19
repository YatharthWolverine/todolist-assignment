/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const breakpoints = ["1em", "30em", "45em", "64em", "80em", "86em", "100em"];

const [xs, sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.xs = xs;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.xm = xm;
breakpoints.lg = lg;
breakpoints.ml = ml;
breakpoints.xl = xl;

// #endregion
// #region typography

const fonts = {
  primaryLight: "AxiformaLight",
  primaryRegular: "AxiformaRegular",
  primaryMedium: "AxiformaMedium",
  primaryBlack: "AxiformaBold",
  primaryExtraBold: "AxiformaExtraBold",
  primaryBook: "AxiformaBook",
};
// #endregion
// #region colors
const colorSets = [
  {
    name: "primary",
    colors: [
      { name: 100, hex: "#731dc21f" },
      { name: 200, hex: "#AE7FB8" },
      { name: 500, hex: "#662C72" },
    ],
  },
  {
    name: "secondary",
    colors: [
      { name: 100, hex: "#8E10E8" },
      { name: 500, hex: "#731DC2" },
      { name: 900, hex: "#652D90" },
    ],
  },
  {
    name: "accent",
    colors: [
      { name: 100, hex: "#E8505B" },
      { name: 500, hex: "#FFDCDB" },
      { name: 800, hex: "#ffa82959" },
      { name: 900, hex: "#FFA829" },
    ],
  },
  {
    name: "purple",
    colors: [
      { name: 100, hex: "#ae7fb833" }
    ],
  },
  {
    name: "lightgrey",
    colors: [
      { name: 100, hex: "#31313108" }
    ],
  },
  {
    name: "grey",
    colors: [
      { name: 100, hex: "#E5E5E5" },
      { name: 200, hex: "#E7E1EB" },
      { name: 200, hex: "#EEEEEE" },
      { name: 400, hex: "#747474" },
      { name: 500, hex: "#454545" },
      { name: 600, hex: "#484848" },
      { name: 800, hex: "#888888" },
      { name: 900, hex: "#313131" },
    ],
  },
  {
    name: "green",
    colors: [
      { name: 100, hex: "#E5F3EB" },
      { name: 400, hex: "#E4FEDD" },
      { name: 500, hex: "#27C566" },
      { name: 900, hex: "#02A958" },
    ],
  },
];

export const colors = colorSets.reduce(
  (colorMap, { name, alias = name, colors: colorSet }) => {
    const color = {};
    const cm = colorMap;
    for (let colorIndex = 0; colorIndex < colorSet.length; colorIndex++) {
      const { name: colorName, hex } = colorSet[colorIndex];
      color[colorIndex] = hex;
      color[colorName] = hex;
    }
    cm[name] = color;
    cm[alias] = color;
    return cm;
  },
  {
    // ...defaultTheme.colors,
    white: "#FFFFFF",
    "white.0": "#FFFFFF",
    black: "#000000",
    "black.0": "#000000",
  }
);

// #endregion
const radii = {
  small: "0.125rem",
  normal: "0.1875rem",
  large: "0.375rem",
  full: "10rem",
  square: 0,
};
const zIndices = {
  modal: 2000,
  tooltip: 5000,
  toast: 7000,
};

const shadows = [
  { name: "none", shadow: undefined },
  { name: "sm", shadow: "0 .075rem .15rem rgba(0,0,0,.15)" },
  { name: "xl", shadow: "0 0 1rem rgba(0,0,0,.15)" },
].reduce((shadowSet, { name, shadow }, index) => {
  const s = shadowSet;
  s[name] = shadow;
  s[index] = shadow;
  return s;
});

export const theme = {
  // ...defaultTheme,
  breakpoints,
  radii,
  colors,
  zIndices,
  shadows,
  fonts,
};
