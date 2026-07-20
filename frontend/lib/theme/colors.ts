export const colors = {
  background: "#050816",
  surface: "#111827",
  primary: "#3B82F6",
  secondary: "#8B5CF6",
  accent: "#06B6D4",
  white: "#FFFFFF",
  muted: "#94A3B8",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
} as const;

export type ColorKey = keyof typeof colors;

export default colors;
