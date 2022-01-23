import React from 'react'
import useTranslation from "next-translate/useTranslation";
import classes from './About.module.scss';
import Image from 'next/image';
import aboutImg from '../../assets/images/about/about.webp'
import MyButton from '../../components/UI/MyButton/MyButton';


const About = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Content} data-aos="fade-right">
                        <h1 className={classes.Title} >{t('common:about.title')}</h1>
                        <p className={classes.Text}>{t('common:about.text')}</p>
                        <p className={classes.Subtext}>{t('common:about.subtext')}</p>
                        <div className={classes.Button}  >
                            <MyButton variant="contained">{t('common:general.button')}</MyButton>
                        </div>
                    </div>
                    <div className={classes.Images} data-aos="zoom-in" data-aos-duration="2000">
                        <Image src={aboutImg} alt="about"/>
                    </div>
                    <div className={classes.ButtonMobile}>
                        <MyButton variant="contained">{t("common:general.button")}</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
