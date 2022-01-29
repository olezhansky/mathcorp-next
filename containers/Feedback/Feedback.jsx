import React from 'react'
import classes from './Feedback.module.scss'
import feedbackImg from '../../assets/images/feedback/feedback-img.svg'
import feedbackImgMobile from '../../assets/images/feedback/feedback-img-mobile.svg'
import ovalImg from '../../assets/images/feedback/oval.png'
import ovalMobileImg from '../../assets/images/feedback/ovalMobile.png'
import Form from '../../components/Form/Form'
import useTranslation from "next-translate/useTranslation";
import { useMediaQuery } from '@material-ui/core'
import Image from 'next/image';

const Feedback = () => {
    const { t } = useTranslation()
    const tabletMatch = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const mobileMatch = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <div className={classes.Wrapper}>
           <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Content}>
                        <div className={classes.OvalText}>
                            {tabletMatch &&   <Image src={ovalImg} alt="img"/>}
                            {mobileMatch && !tabletMatch && <Image src={ovalMobileImg} alt="img"/>}
                            <p className={classes.Text}  data-aos="zoom-in" data-aos-easing="ease-in-sine">
                                {t('common:form.text')} <span>{t('common:form.textBold')}</span> {t('common:form.text2')}
                            </p>
                        </div>
                        <div className={classes.Images} data-aos="fade-right">
                            {tabletMatch && <Image src={feedbackImg} alt="img"/>}
                            {mobileMatch && !tabletMatch && <Image src={feedbackImgMobile} alt="img"/>}                           
                        </div>
                    </div>
                    <div className={classes.Form} data-aos="zoom-in-up">
                        <Form />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Feedback;

