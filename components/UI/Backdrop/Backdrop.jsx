import React from 'react'
import classes from './Backdrop.module.scss'
import { useAppContext } from '../../../context/state'

const Backdrop = ({isOpen}) => {

    const {state, setState} = useAppContext()
    const handleClick = () => {
        setState({...state, modal: false})
    }


    return (
        <div onClick={handleClick} className={isOpen ? classes.WrapperActive : classes.Wrapper} />
    )  
}
   
export default Backdrop
