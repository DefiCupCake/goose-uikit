import { Colors } from "./types";

var baseColors = {
  failure: "#ED4B9E",
  primary: "#ef65a4",
  primaryBright: "#ed398b",
  primaryDark: "#F11CB0",
  secondary: "#F11CB0",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f8e6c5",
  backgroundDisabled: "#ef65a4",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#f8e6c5",
  tertiary: "#f8e6c5",
  text: "#ef65a4",
  textDisabled: "#696969",
  textSubtle: "#ef65a4",
  borderColor: "#FF0000",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors = lightColors;
