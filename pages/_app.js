// import { store, wrapper } from "../store/store";
// import { Provider } from "react-redux";
// import { ThemeProvider } from "@material-ui/styles";
// import theme from "./theme";

// import "../styles/reset.scss";
// import "../styles/globals.scss";

// const App = ({ Component, pageProps }) => {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </Provider>
//   );
// };

// export default wrapper.withRedux(App);

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { AppWrapper } from "../context/state";

import "../styles/reset.scss";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  );
};

export default App;
