import React from 'react'
// import { useDispatch } from 'react-redux'
// import { closeModalAction } from '../../../store/actions/settingsActions'
import classes from './Backdrop.module.scss'
import { useAppContext } from '../../../context/state'

const Backdrop = ({isOpen}) => {

    const {state, setState} = useAppContext()
    // const dispatch = useDispatch()
    const handleClick = () => {
        // dispatch(closeModalAction())
        setState({...state, modal: false})
    }


    return (
        <div onClick={handleClick} className={isOpen ? classes.WrapperActive : classes.Wrapper} />
    )  
}
   
export default Backdrop
