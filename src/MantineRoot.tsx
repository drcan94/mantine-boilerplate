import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  MantineProvider,
  createEmotionCache,
  ColorSchemeProvider,
  ColorScheme,
  MantineTheme,
} from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import {
  useRtlContext,
  GlobalRtlContextType,
} from "./providers/RtlContextProvider/index";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

const MantineRoot: React.FC = () => {
  const { rtl, setRtl } = useRtlContext() as GlobalRtlContextType;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: false,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  useHotkeys([["mod+shift+L", () => setRtl((c) => !c)]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtl ? rtlCache : undefined}
        theme={{
          globalStyles: (theme: MantineTheme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
              outline: 0,
              textDecoration: "none",
              listStyle: "none",
              scrollPaddingTop: 100,
            },
            body: {
              ...theme.fn.fontStyles(),
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
              lineHeight: theme.lineHeight,
              minHeight: "100vh",
              position: "relative",
            },
          }),
          dir: rtl ? "rtl" : "ltr",
          fontFamily: "Verdana, sans-serif",
          fontFamilyMonospace: "Monaco, Courier, monospace",
          headings: {
            fontFamily: "Roboto, sans-serif",
            sizes: {
              h1: { fontSize: "2rem" },
            },
          },
          fontSizes: {
            xs: ".7rem",
            sm: ".85rem",
            md: ".96rem",
            lg: "1.2rem",
            xl: "1.4rem",
          },
          breakpoints: {
            xs: "30em",
            sm: "48em",
            md: "64em",
            lg: "74em",
            xl: "90em",
          },
          spacing: {
            xs: "0.8rem",
            sm: "1.3rem",
            md: "1.7rem",
            lg: "2rem",
            xl: "3rem",
          },
          radius: {
            xs: "0.1rem",
            sm: "0.3rem",
            md: "0.5rem",
            lg: "0.7rem",
            xl: "1rem",
          },
          colorScheme,
          colors: {
            // override dark colors to change them for all components
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },

          activeStyles: { transform: "scale(0.95)" },
          components: {
            Button: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === "light" ? "orange" : "blue",
              }),
            },
          },
        }}
      >
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MantineRoot;
