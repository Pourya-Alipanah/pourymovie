import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

const generateDarkenColorFrom = (
  input: string,
  percentage: number = 0.07
): string => colord(input).darken(percentage).toHex();

const generateForegroundColorFrom = (
  input: string,
  percentage: number = 0.8
): string =>
  colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();

    // todo: convert opacities to tailwind classes

export const tailwindColors: Record<string, string> = {
  transparent: "transparent",
  white: "#E3E3E3",
  "cards-white": "#e3e3e3c0",
  "border-dash-white": "#e3e3e370",
  primary: "#8685EF",
  "primary-focus": generateDarkenColorFrom("#8685EF"),
  "primary-btn": "#8685efb3",
  "primary-badge": "#8685EF",
  "primary-unchecked": "#8785ef60",
  dark: "#1E1E1E",
  neutral: "#141414",
  "neutral-focus": generateDarkenColorFrom("#141414", 0.03),
  "neutral-content": generateForegroundColorFrom("#ffffff"),
  success: "#60ff79de",
  "success-content": generateForegroundColorFrom("#60ff79de"),
  "success-focus": generateDarkenColorFrom("#60ff79de"),
  warning: "#f6b22dde",
  "warning-content": generateForegroundColorFrom("#f6b22dde"),
  "warning-focus": generateDarkenColorFrom("#f6b22dde"),
  danger: "#ff6050de",
  "danger-content": generateForegroundColorFrom("#ff6050de"),
  "danger-focus": generateDarkenColorFrom("#ff6050de"),
  info: "#507affde",
  "info-content": generateForegroundColorFrom("#507affde"),
  "info-focus": generateDarkenColorFrom("#507affde"),
};
