import React from 'react'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Snack(props) {

    const {onClose} = props

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                {...props}
                autoHideDuration={6000}
                message="Department Added"
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    )
}

export default Snack
