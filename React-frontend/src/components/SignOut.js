import Button from '@material-ui/core/Button'
import React from 'react'
import {auth} from '../firebase.js'

function SignOut() {
    return (
            <Button variant='outlined'   onClick={() => auth.signOut()}>Sign Out!</Button>
    )
}

export default SignOut
