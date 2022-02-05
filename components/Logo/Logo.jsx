import React from 'react'
import Image from 'next/image';
import logoMobile from '../../assets/icons/logo.svg'
import { useRouter } from 'next/router'
import classes from './Logo.module.scss'

const Logo = () => {
    const router = useRouter()
    const scrollToTopHandler = () => {
        router.push('/')
        // window.scrollTo({
        //   behavior: 'smooth',
        //     top: 0,
        // });
    };
    const handleClick = () => {
        scrollToTopHandler()
    }
    return (
        <div className={classes.Logo} onClick={handleClick}>
            <Image src={logoMobile} width="70px" height='60px'  alt="img" />
        </div>
    )
}

export default Logo
