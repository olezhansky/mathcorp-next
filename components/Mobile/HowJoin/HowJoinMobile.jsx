import React from 'react'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import Title from '../../Title/Title'
import { howJoinDataMobile } from '../../../data/data'
import classes from './HowJoinMobile.module.scss'
import MyButton from '../../UI/MyButton/MyButton';


const HowJoinMobile = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.Inner}>
            <div className={classes.Title}>
                <Title title={t('common:howJoin.title')}/>
            </div>
            <ul className={classes.Main}>
                {howJoinDataMobile.map(((item, index) => (
                    <li className={classes.Item} data-aos={item.aos} data-aos-duration={item.duration}>
                        <div className={classes.ItemImages}>
                            <Image src={item.icon} alt="img"/>
                        </div>
                        <p>{index + 1}. {t(item.title)}</p>
                    </li>
                )))}
            </ul>
            <div className={classes.Button}>
                <MyButton variant="contained">{t('common:general.button')}</MyButton>
            </div> 
        </div>
    )
}

export default HowJoinMobile
