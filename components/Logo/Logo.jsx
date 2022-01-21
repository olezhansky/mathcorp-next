import React from 'react'
import Image from 'next/image';
import logo from '../../assets/icons/logo.svg'
import logoMobile from '../../assets/icons/logo.svg'
import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { setRoutePathAction } from '../../store/actions/settingsActions'
import classes from './Logo.module.scss'
import { useMediaQuery } from '@material-ui/core'

const Logo = () => {
    // const tabletMatch = useMediaQuery((theme) => theme.breakpoints.up('md'));
    // const mobileMatch = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    // const router = useHistory()
    // const dispatch = useDispatch()
    const scrollToTopHandler = () => {
        router.push('/')
        window.scrollTo({
          behavior: 'smooth',
            top: 0,
        });
    };
    const handleClick = () => {
        // dispatch(setRoutePathAction('/'))
        scrollToTopHandler()
    }
    return (
        <div className={classes.Logo}>
            <Image src={logo} alt="img" width="70px" height="70px"/>
            {/* {tabletMatch &&  <img src={logo} alt="img"/>}
            {mobileMatch && !tabletMatch && <img src={logoMobile} alt="img"/>} */}
        </div>
    )
}

export default Logo
