import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/theme";
import { AppWrapper } from "../context/state";

import "../styles/reset.scss";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  );
};

export default App;
