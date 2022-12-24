import GlobalStyles from "./styles/global";
import "react-grid-layout/css/styles.css";
import "swiper/css";
import "swiper/css/effect-fade";

// components
import { SnackbarProvider } from "notistack";

// contexts
import { SidebarContextAPI } from "./contexts/sidebarContext";
// actions
import { saveToLocalStorage } from "./store/features/layout";
// hooks
import { useEffect } from "react";
import { useInterfaceContext } from "./contexts/interfaceContext";
import { useDispatch } from "react-redux";
// utils
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { preventDefault } from "./utils/helpers";
import AppLayout from "./AppLayout";

function App() {
  const page = document.documentElement;
  console.log(page);
  const { isDarkMode, isContrastMode, direction } = useInterfaceContext();
  const theme = createTheme({
    direction: direction,
  });
  // https://emotion.sh/docs/@emotion/cache
  const cacheRtl = createCache({
    key: "css-rtl",
    stylisPlugins: [rtlPlugin],
  });
  useDispatch()(saveToLocalStorage());

  useEffect(() => {
    page.setAttribute("dir", direction);
  }, [direction, page]);

  useEffect(() => {
    isContrastMode && page.classList.add("contrast");
    preventDefault();
  });

  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={{ theme: isDarkMode ? "dark" : "light" }}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: direction === "ltr" ? "right" : "left",
            }}
            autoHideDuration={3000}
          >
            <SidebarContextAPI>
              <GlobalStyles />
              <StyleSheetManager
                stylisPlugins={direction === "rtl" ? [rtlPlugin] : []}
              >
                <AppLayout />
              </StyleSheetManager>
            </SidebarContextAPI>
          </SnackbarProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
}

export default App;
