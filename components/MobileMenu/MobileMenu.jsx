import { MenuItem, Select } from '@material-ui/core';
import React from 'react'
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import MyButton from '../UI/MyButton/MyButton';
import classes from './MobileMenu.module.scss'

const MobileMenu = ({mobileMenu, onToggle}) => {
    const { t } = useTranslation();
    const router = useRouter()
    const {pathname} = router
    console.log(router)
    const handleClick = () => {
        // onToggle()
        console.log('onToggle')
    }

    return (
        <div className={mobileMenu ? classes.WrapperActive : classes.Wrapper}>
            <ul className={classes.List}>
                <li onClick={handleClick} className={classes.Item}>
                    <Link  href='/'>
                        <a className={pathname === '/' ? classes.linkActive : classes.link}>   {t('common:menu.main')}</a>
                    </Link>
                </li>
                <li onClick={handleClick} className={classes.Item}>
                    <Link href='/teachers'>
                        <a className={pathname === '/teachers' ? classes.linkActive : classes.link}>{t('common:menu.teachers')}</a>
                    </Link>
                </li>
                <li onClick={handleClick} className={classes.Item}>
                    <Link  href='/contacts'>
                        <a className={pathname === '/contacts' ? classes.linkActive : classes.link}>{t('common:menu.contacts')}</a>
                    </Link>
                </li>
            </ul>
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
                <MyButton variant="contained">{t('common:general.button')}</MyButton>
            </div>
        </div>
    )
}

export default MobileMenu
