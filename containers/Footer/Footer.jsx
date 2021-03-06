import React from 'react'
import facebookImg from '../../assets/images/footer/facebook.png'
import instagramImg from '../../assets/images/footer/instagram.png'
import classes from './Footer.module.scss'
import Logo from '../../components/Logo/Logo'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <p className={classes.Text}>{t('common:footer.text')}</p>
                <div className={classes.SocialNetworks}>
                    <a 
                        rel="noreferrer"
                        href="https://m.facebook.com/pg/math.corporation.kyiv/reviews/?ref=page_internal&mt_nav=0" 
                        target="_blank" 
                        className={classes.SocialNetworksImg}
                    >
                        <Image src={facebookImg} alt="img"/>
                    </a>
                    <a 
                        rel="noreferrer"
                        href="https://www.instagram.com/math.corporation/?utm_medium=copy_link" 
                        target="_blank" 
                        className={classes.SocialNetworksImg}
                    >
                        <Image src={instagramImg} alt="img"/>
                    </a>
                </div>
                <p className={classes.SubText}>{t('common:footer.subText')}</p>
                <div className={classes.Copyright}>
                    <p> &#169;Copyright 2021. {t('common:footer.copyright')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
