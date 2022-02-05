import React from 'react'
import Title from '../../components/Title/Title'
import Image from 'next/image';
import classes from './HowJoin.module.scss'
import { howJoinData } from '../../data/data'
import useTranslation from "next-translate/useTranslation";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyButton from '../../components/UI/MyButton/MyButton'
import HowJoinMobile from '../../components/Mobile/HowJoin/HowJoinMobile'

const HowJoin = () => {
    const { t } = useTranslation();
    const tabletMatch = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const mobileMatch = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Title}>
                        <Title title={t('common:howJoin.title')}/>
                    </div>
                    <ul className={classes.List}>
                      {howJoinData.map((item) => (
                        <li key={item.id} className={classes.ListItem} data-aos={item.aos} data-aos-duration={item.duration}>
                            <div className={classes.ListItemIcon}>
                                <Image src={item.icon} alt="icon"/>
                            </div>
                            <div className={classes.ListItemImg}>
                                <Image src={item.img} alt="img"/>
                            </div>
                            <p className={classes.ListItemText}>{t(item.title)}</p>
                          </li>
                      ))}
                    </ul>
                    <div className={classes.Button}>
                        <MyButton variant="contained">{t('common:general.button')}</MyButton>
                    </div>
                </div>
                {mobileMatch && !tabletMatch && <HowJoinMobile />}
            </div>
        </div>
    )
}

export default HowJoin
