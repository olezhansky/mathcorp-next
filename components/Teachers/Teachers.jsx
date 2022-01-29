import React from 'react'
import classes from './Teachers.module.scss'
import Title from '../../components/Title/Title'
import { teachers } from '../../data/data'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';

const Teachers = ({numSlice, title}) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={classes.Title}>
                <Title title={t(`${title}`)}/>
            </div>
            <ul className={classes.List}>
                {teachers.slice(0, numSlice).map((teacher) => (
                    <li className={classes.ListItem} data-aos={teacher.aos} data-aos-duration={teacher.duration}>
                        <div className={classes.ListItemWrapper}>
                            <div className={classes.ListItemImg}>
                                <Image src={teacher.img} alt="img"/>
                            </div>
                            <div className={classes.ListItemText}>
                                <p className={classes.ListItemName}>{t(teacher.name)}, {t(teacher.age)}</p>
                                <p className={classes.ListItemSpecialization}>{t('common:teachers.specialization')}: <span>{t(teacher.specialization)}</span></p>
                                <p className={classes.ListItemExperience}>{t('common:teachers.experience')}: <span>{t(teacher.experience)}</span></p>
                                <p className={classes.ListItemEducation}>{t('common:teachers.education')}: <span>{t(teacher.education)}</span></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default Teachers