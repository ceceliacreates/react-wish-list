import React from 'react';
import {Typography} from '@material-ui/core';
import Check from '@material-ui/icons/Check.js';

function SelectedListItem (props) {
    return (
        <>
        <Check/><Typography variant="h5" display="inline">{props.name}</Typography>
        <br></br>
        </>
    )
}

export default SelectedListItem;