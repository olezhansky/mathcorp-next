import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import theme from "./theme";
import store from "../store/store";
import "../styles/reset.scss";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  // const language = useSelector((state) => state.settingsReducer.language);

  // useEffect(() => {
  //   const savedLang = localStorage.getItem("lang");
  //   i18n.changeLanguage(savedLang || language);
  // }, [language]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
