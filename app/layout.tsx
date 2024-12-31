// app/layout.tsx
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
