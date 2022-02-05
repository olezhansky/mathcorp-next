import { Button } from '@material-ui/core';
import React from 'react'
import { useAppContext } from '../../../context/state'

const MyButton = ({children}) => {

    const {state, setState} = useAppContext()

    return (
        <div>
            <Button onClick={() => setState({...state, modal: true})} variant="contained">{children}</Button>
        </div>
    )
}

export default MyButton
