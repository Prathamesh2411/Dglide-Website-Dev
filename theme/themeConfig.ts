// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    // Seed Token
    colorPrimary: "#3B82F6", // Blue 500
    colorInfo: "#3B82F6",
    colorSuccess: "#10B981", // Green 500
    colorWarning: "#F59E0B", // Yellow 500
    colorError: "#EF4444", // Red 500
    colorTextBase: "#1F2937", // Gray 800

    // Alias Token
    colorBgContainer: "#FFFFFF",
    colorBgLayout: "#F3F4F6", // Gray 100

    // Font
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontSize: 16,

    // Border Radius
    borderRadius: 8,

    // Size
    controlHeight: 40,

    // Animation
    motionDurationMid: "0.2s",
  },
  components: {
    Button: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      paddingContentHorizontal: 24,
    },
    Card: {
      paddingLG: 24,
    },
    Form: {
      labelFontSize: 14,
      marginLG: 24,
    },
    Input: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
  },
};

export default theme;
