import { Button } from '@material-ui/core';
import React from 'react'
// import { useDispatch } from 'react-redux';
// import { openModalAction } from '../../../store/actions/settingsActions';
import { useAppContext } from '../../../context/state'

const MyButton = ({children}) => {
    // const dispatch = useDispatch()
    // const handleClick = () => {
    //     dispatch(openModalAction())
    // }

    const {state, setState} = useAppContext()


    const fn = useAppContext()

    console.log(fn);


    return (
        <div>
            <Button onClick={() => setState({...state, modal: true})} variant="contained">{children}</Button>
        </div>
    )
}

export default MyButton
