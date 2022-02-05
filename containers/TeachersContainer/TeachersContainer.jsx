import React from 'react'
import classes from './Teachers.module.scss'
import MyButton from '../../components/UI/MyButton/MyButton'
import Teachers from '../../components/Teachers/Teachers'
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";

const TeachersContainer = () => {
    const { t } = useTranslation()
    const router = useRouter()
    const handleClick = () => {
        router.push('/teachers')
    }
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <Teachers numSlice={3} title="common:teachers.title" />
                    <div className={classes.Link}>
                        <span onClick={handleClick}>{t('common:teachers.other_teacher')}</span>
                    </div>
                    <div className={classes.Button}>
                        <MyButton variant="contained">{t('common:teachers.button')}</MyButton>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersContainer
