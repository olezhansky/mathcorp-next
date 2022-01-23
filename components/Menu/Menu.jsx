import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import classes from "./Menu.module.scss";

const Menu = () => {
  const { t } = useTranslation();

  const {pathname} = useRouter()

  return (
      <nav>
        <ul className={classes.List}>
          <li className={classes.Item}>
            <Link href="/">
              <a className={pathname === '/' ? `${classes.ItemLink} ${classes.ItemLinkActive}` : classes.ItemLink}>{t("common:menu.main")}</a>
            </Link>
          </li>
          <li className={classes.Item}>
            <Link href="/teachers">
              <a className={pathname === '/teachers' ? `${classes.ItemLink} ${classes.ItemLinkActive}` : classes.ItemLink}>{t("common:menu.teachers")}</a>
            </Link>
          </li>
          <li className={classes.Item}>
            <Link className={classes.Item} href="/contacts">
              <a className={pathname === '/contacts' ? `${classes.ItemLink} ${classes.ItemLinkActive}` : classes.ItemLink}>{t("common:menu.contacts")}</a>
            </Link>
          </li>
        </ul>
      </nav>

  );
};

export default Menu;
