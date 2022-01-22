import { useEffect } from "react";
import { store, wrapper } from "../store/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { appWithTranslation } from "next-i18next";

import "../styles/reset.scss";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const language = useSelector((state) => state.settings.language);

  console.log("language", language);

  // useEffect(() => {
  //   const savedLang = localStorage.getItem("lang");
  //   i18n.changeLanguage(savedLang || language);
  // }, [language]);

  console.log("store", store);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(wrapper.withRedux(App));
