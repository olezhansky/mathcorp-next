import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { MenuItem, Select } from "@material-ui/core";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./MainLayout.module.scss";

const MainLayout = ({ children, title }) => {
  const [language, setLanguage] = useState("ua");

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, js, react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <div className={classes.Wrapper} data-aos="fade-down">
        <div className="container">
          <div className={classes.Inner}>
            <div>
              <Logo />
            </div>
            <div className={classes.MenuSelectButton}>
              <Menu />
              <div className={classes.Select}>
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  value={language}
                  onChange={handleChangeLanguage}
                >
                  <MenuItem value="UA">UA</MenuItem>
                  <MenuItem value="RU">RU</MenuItem>
                </Select>
              </div>
              <div className={classes.Button}>
                <MyButton variant="contained">Button</MyButton>
              </div>
            </div>
            {/* <div className={classes.MenuSelectButtonMobileWrapper}>
              <div
                className={classes.MenuSelectButtonMobile}
                onClick={handleClick}
              >
                <div
                  className={
                    mobileMenu
                      ? classes.MenuLineTopTransform
                      : classes.MenuLineTop
                  }
                ></div>
                <div
                  className={
                    mobileMenu
                      ? classes.MenuLineCenterTransform
                      : classes.MenuLineCenter
                  }
                ></div>
                <div
                  className={
                    mobileMenu
                      ? classes.MenuLineBottomTransform
                      : classes.MenuLineBottom
                  }
                ></div>
              </div>
            </div> */}
            {/* <MobileMenu mobileMenu={mobileMenu} onToggle={handleClick} /> */}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
