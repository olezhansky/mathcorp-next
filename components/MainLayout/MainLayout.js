import Link from "next/link";
import Head from "next/head";
import classes from "./MainLayout.module.scss";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, js, react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <ul className={classes.List}>
          <li className={classes.Item}>
            <Link href="/">
              <a>Main</a>
            </Link>
          </li>
          <li className={classes.Item}>
            <Link className={classes.Item} href="/teachers">
              <a>Teachers</a>
            </Link>
          </li>
          <li className={classes.Item}>
            <Link className={classes.Item} href="/contacts">
              <a>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
