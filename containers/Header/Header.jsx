import Link from "next/link";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import { MenuItem, Select } from "@material-ui/core";
import MyButton from "../../components/UI/MyButton/MyButton";
import classes from "./Header.module.scss";
import { useRouter } from "next/router";
import { useAppContext } from '../../context/state'
import MobileMenu from '../../components/MobileMenu/MobileMenu';

const Header = () => {
const router = useRouter();
const {state, setState} = useAppContext()

const handleClick = () => {
  setState({...state, mobileMenu: !state.mobileMenu})
}

  return (
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
              value={router.locale}
              style={{ textTransform: "uppercase" }}
            >
              {router.locales.map((locale) => (
                <MenuItem
                  value={locale}
                  key={locale}
                  style={{ textTransform: "uppercase" }}
                >
                  <Link href={router.asPath} locale={locale}>
                    <a>{locale}</a>
                  </Link>
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.Button}>
            <MyButton variant="contained">Записатись</MyButton>
          </div>
        </div>
        <div className={classes.MenuSelectButtonMobileWrapper}>
          <div
            className={classes.MenuSelectButtonMobile}
            onClick={handleClick}
          >
            <div className={state.mobileMenu ? classes.MenuLineTopTransform : classes.MenuLineTop}></div>
            <div
              className={
                state.mobileMenu
                  ? classes.MenuLineCenterTransform
                  : classes.MenuLineCenter
              }
            ></div>
            <div
              className={
                state.mobileMenu
                  ? classes.MenuLineBottomTransform
                  : classes.MenuLineBottom
              }
            ></div>
          </div>
        </div> 
        <MobileMenu mobileMenu={state.mobileMenu} onToggle={handleClick} />
      </div>
    </div>
  </div>
  )
};

export default Header;
