import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import closeImg from '../../../assets/images/common/close.png'
import img from '../../../assets/images/feedback/feedback-img.svg'
import classes from './Modal.module.scss'
import Form from '../../Form/Form'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import { useAppContext } from '../../../context/state'

const Modal = () => {
    const { t } = useTranslation()

    const {state, setState} = useAppContext()

    const handleClick = () => {
        setState({...state, modal: false})

    }

    const context = useAppContext()

    return (
        <>
            <div className={context.state.modal ? classes.ModalActive : classes.Modal}>
                <div className={classes.ModalBody}>
                    <div className={classes.ModalTop} >
                        <div onClick={handleClick} className={classes.CloseImg} >
                            <Image src={closeImg} alt="close"/>
                        </div>
                    </div>
                    <div className={classes.Content}>
                        <div className={classes.ContentLeft}>
                            <p className={classes.Text}>
                                {t('common:form.text')} <span>{t('common:form.textBold')}</span> {t('common:form.text2')}
                            </p>
                            <div className={classes.Images}>
                                <Image src={img} alt="img"/>
                            </div>
                        </div>
                        <div className={classes.Form}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <Backdrop isOpen={context.state.modal}/> 
        </>
    )
}

export default Modal
