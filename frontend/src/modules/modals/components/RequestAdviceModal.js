import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// react-redux hooks
import { useDispatch, useSelector } from 'react-redux'

import { hideModal  } from '../state/modal.actions'
import { fetchUpdateWorkflow } from '../../ongoing-incidents/state/OngoingIncidents.actions'
import { TextField } from '@material-ui/core';


const onSubmitClick = (dispatch, incidentId, comment, assignee) => {
    if(comment === "" || assignee === ""){
        // show error because mandatory
        return;
    }

    dispatch(fetchUpdateWorkflow(incidentId, "request-advice", {
        assignee: assignee,
        comment: comment
    } ));
    dispatch(hideModal());
}

const RequestAdviceModal = (props) => {

    const dispatch = useDispatch();

    //maintains selected value in local state until change is confirmed
    const [assignee, setAssignee] = useState("");
    const [comment, setComment] = useState("");

    return (
        <div>
            <DialogTitle id="form-dialog-title">Change Resopse Time</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Select assignee for the incident
                </DialogContentText>
                <Select
                    value={assignee}
                    name="assignee"
                    displayEmpty
                    onChange={(e)=>{setAssignee(e.target.value)}}
                >
                    {props.users.map((user, index) => {
                        return (<MenuItem key={index} value={user.uid}>{user.displayname}</MenuItem>)
                    })}
                </Select>

                <DialogContentText>
                    Comment
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="email"
                    value={comment}
                    onChange={(e)=>{setComment(e.target.value)}}
                    fullWidth
                    multiline
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { dispatch(hideModal()) }} color="secondary">
                    Close
                </Button>
                <Button 
                    onClick={() => onSubmitClick(dispatch, props.activeIncident.id, comment, assignee)} 
                    color="primary">
                    Send Request For Advice
                </Button>
            </DialogActions>
        </div>
    );
}

export default RequestAdviceModal;
