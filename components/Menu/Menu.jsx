import Link from "next/link";
import classes from "./Menu.module.scss";

const MainLayout = ({ children, title }) => {
  return (
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

  );
};

export default MainLayout;
