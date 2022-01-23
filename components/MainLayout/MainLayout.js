import Head from "next/head";
import classes from "./MainLayout.module.scss";
import Header from "../../containers/Header/Header";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, js, react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
